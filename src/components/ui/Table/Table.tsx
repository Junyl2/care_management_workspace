import React, { useRef, useEffect, useState } from 'react';
import styles from './Table.module.css';

export interface TableColumn {
  key: string;
  title: string;
  align?: 'left' | 'center' | 'right';
  width?: string | number;
  render?: (value: unknown, record: Record<string, unknown>, index: number) => React.ReactNode;
  // TODO: Modify this render that uses the value, record, and index to be typesafe
}

export interface ExpandableConfig<T> {
  expandedRowRender?: (record: T, index: number) => React.ReactNode;
  expandedRowKeys?: (string | number)[];
  onExpand?: (expanded: boolean, record: T, index: number) => void;
  expandRowByClick?: boolean;
  expandType?: 'full' | 'single-column' | 'redirect';
  onRedirect?: (record: T, index: number) => void;
  expandColumnSpan?: number;
}

export interface TableProps<T = Record<string, unknown>> {
  columns: TableColumn[];
  data: T[];
  loading?: boolean;
  emptyText?: string;
  onRowClick?: (record: T, index: number) => void;
  rowSelection?: {
    selectedRowKeys?: (string | number)[];
    onChange?: (selectedRowKeys: (string | number)[], selectedRows: T[]) => void;
    getCheckboxProps?: (record: T) => { disabled?: boolean };
  };
  expandable?: ExpandableConfig<T>;
  className?: string;
}

const Table = <T extends Record<string, unknown>>({
  columns,
  data,
  loading = false,
  emptyText = '데이터가 없습니다.',
  onRowClick,
  rowSelection,
  expandable,
  className
}: TableProps<T>) => {
  const headerCheckboxRef = useRef<HTMLInputElement>(null);
  const [internalExpandedKeys, setInternalExpandedKeys] = useState<(string | number)[]>([]);
  
  const expandedRowKeys = expandable?.expandedRowKeys || internalExpandedKeys;
  
  useEffect(() => {
    if (headerCheckboxRef.current) {
      headerCheckboxRef.current.indeterminate = 
        (rowSelection?.selectedRowKeys?.length || 0) > 0 && 
        (rowSelection?.selectedRowKeys?.length || 0) < data.length;
    }
  }, [rowSelection?.selectedRowKeys?.length, data.length]);

  const getRecordKey = (record: T, index: number) => {
    return (record as Record<string, unknown>).key || 
           (record as Record<string, unknown>).id || 
           index;
  };

  const isExpanded = (record: T, index: number) => {
    const key = getRecordKey(record, index);
    return expandedRowKeys.includes(key as string | number);
  };

  const handleExpand = (record: T, index: number) => {
    const key = getRecordKey(record, index) as string | number;
    const expanded = isExpanded(record, index);
    
    if (expandable?.expandType === 'redirect') {
      expandable.onRedirect?.(record, index);
      return;
    }
    
    let newExpandedKeys: (string | number)[];
    if (expanded) {
      newExpandedKeys = expandedRowKeys.filter(k => k !== key);
    } else {
      newExpandedKeys = [...expandedRowKeys, key];
    }
    
    if (!expandable?.expandedRowKeys) {
      setInternalExpandedKeys(newExpandedKeys);
    }
    
    expandable?.onExpand?.(!expanded, record, index);
  };

  const handleRowSelectionChange = (record: T, index: number, checked: boolean) => {
    if (!rowSelection?.onChange) return;
    
    const recordKey = getRecordKey(record, index);
    const currentSelected = rowSelection.selectedRowKeys || [];
    
    let newSelected: (string | number)[];
    if (checked) {
      newSelected = [...currentSelected, recordKey as string | number];
    } else {
      newSelected = currentSelected.filter(key => key !== recordKey);
    }
    
    const selectedRows = data.filter((item, idx) => {
      const itemKey = getRecordKey(item, idx);
      return newSelected.includes(itemKey as string | number);
    });
    
    rowSelection.onChange(newSelected, selectedRows);
  };

  const isRowSelected = (record: T, index: number) => {
    if (!rowSelection?.selectedRowKeys) return false;
    const recordKey = getRecordKey(record, index);
    return rowSelection.selectedRowKeys.includes(recordKey as string | number);
  };

  const getAlignClass = (align?: string) => {
    switch (align) {
      case 'center':
        return styles.center;
      case 'right':
        return styles.right;
      default:
        return '';
    }
  };

  const handleRowClick = (record: T, index: number, event: React.MouseEvent) => {
    // Don't trigger if clicking on checkbox or expand icon
    if ((event.target as HTMLElement).closest('input, button, .expand-icon')) {
      return;
    }
    
    if (expandable?.expandRowByClick) {
      handleExpand(record, index);
    } else {
      onRowClick?.(record, index);
    }
  };

  if (loading) {
    return (
      <div className={`${styles.tableContainer} ${className || ''}`}>
        <div className={styles.loading}>로딩 중...</div>
      </div>
    );
  }

  const totalColumns = columns.length + (rowSelection ? 1 : 0) + (expandable ? 1 : 0);

  return (
    <div className={`${styles.tableContainer} ${className || ''}`}>
      <table className={styles.table}>
        <thead className={styles.tableHeader}>
          <tr>
            {rowSelection && columns.length > 0 && (
              <th className={`${styles.headerCell} ${styles.center}`} style={{ width: '50px' }}>
                <input
                  ref={headerCheckboxRef}
                  type="checkbox"
                  className={styles.checkbox}
                  onChange={(e) => {
                    if (!rowSelection.onChange) return;
                    
                    if (e.target.checked) {
                      const allKeys = data.map((item, idx) => getRecordKey(item, idx)) as (string | number)[];
                      const allRows = [...data];
                      rowSelection.onChange(allKeys, allRows);
                    } else {
                      rowSelection.onChange([], []);
                    }
                  }}
                  checked={
                    data.length > 0 && 
                    rowSelection.selectedRowKeys?.length === data.length
                  }
                />
              </th>
            )}
            {columns.map((column) => (
              <th
                key={column.key}
                className={`${styles.headerCell} ${getAlignClass(column.align)}`}
                style={{ width: column.width }}
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {data.length === 0 ? (
            <tr>
              <td colSpan={totalColumns} className={styles.emptyState}>
                {emptyText}
              </td>
            </tr>
          ) : (
            data.map((record, index) => {
              const expanded = isExpanded(record, index);
              const rowKey = String(getRecordKey(record, index));
              
              return (
                <React.Fragment key={rowKey}>
                  <tr
                    className={`${styles.bodyRow} ${expanded ? styles.expandedRow : ''}`}
                    onClick={(e) => handleRowClick(record, index, e)}
                    style={{ cursor: (onRowClick || expandable?.expandRowByClick) ? 'pointer' : 'default' }}
                  >
                    {rowSelection && (
                      <td className={`${styles.bodyCell} ${styles.center}`}>
                        <input
                          type="checkbox"
                          className={styles.checkbox}
                          checked={isRowSelected(record, index)}
                          onChange={(e) => handleRowSelectionChange(record, index, e.target.checked)}
                          disabled={rowSelection.getCheckboxProps?.(record)?.disabled}
                          onClick={(e) => e.stopPropagation()}
                        />
                      </td>
                    )}
                    {columns.map((column) => (
                      <td
                        key={column.key}
                        className={`${styles.bodyCell} ${getAlignClass(column.align)}`}
                      >
                        {column.render 
                          ? column.render((record as Record<string, unknown>)[column.key], record, index)
                          : (record as Record<string, unknown>)[column.key] as React.ReactNode
                        }
                      </td>
                    ))}
                  </tr>
                  
                  {/* Expanded content row */}
                  {expanded && expandable?.expandedRowRender && expandable.expandType !== 'redirect' && (
                    <tr className={styles.expandedContentRow}>
                      {rowSelection && (
                        <td className={`${styles.bodyCell} ${styles.center}`}></td>
                      )}
                      <td
                        colSpan={columns.length + (expandable ? 1 : 0)}
                        className={styles.expandedContent}
                      >
                        {expandable.expandedRowRender(record, index)}
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;