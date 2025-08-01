import React from 'react';
import styles from './Pagination.module.css';

export interface PaginationProps {
  current: number;
  total: number;
  pageSize?: number;
  showSizeChanger?: boolean;
  onChange?: (page: number, pageSize?: number) => void;
  className?: string;
  simple?: boolean;
}

const Pagination: React.FC<PaginationProps> = ({
  current = 1,
  total = 0,
  pageSize = 10,
  showSizeChanger = false,
  onChange,
  className,
  simple = false
}) => {
  const totalPages = Math.ceil(total / pageSize);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== current) {
      onChange?.(page, pageSize);
    }
  };

  const renderPageNumbers = () => {
    if (simple) {
      return (
        <span className={styles.info}>
          {current} / {totalPages}
        </span>
      );
    }

    const pages = [];
    const showPages = 5; // Show 5 page numbers at most
    
    let startPage = Math.max(1, current - Math.floor(showPages / 2));
    const endPage = Math.min(totalPages, startPage + showPages - 1);
    
    if (endPage - startPage < showPages - 1) {
      startPage = Math.max(1, endPage - showPages + 1);
    }

    // Always show first page
    if (startPage > 1) {
      pages.push(
        <button
          key={1}
          className={`${styles.paginationItem} ${current === 1 ? styles.active : ''}`}
          onClick={() => handlePageChange(1)}
        >
          1
        </button>
      );
      
      if (startPage > 2) {
        pages.push(
          <span key="ellipsis1" className={styles.ellipsis}>
            ...
          </span>
        );
      }
    }

    // Show page numbers
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          className={`${styles.paginationItem} ${current === i ? styles.active : ''}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }

    // Always show last page
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(
          <span key="ellipsis2" className={styles.ellipsis}>
            ...
          </span>
        );
      }
      
      pages.push(
        <button
          key={totalPages}
          className={`${styles.paginationItem} ${current === totalPages ? styles.active : ''}`}
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  if (totalPages <= 1 && !showSizeChanger) {
    return null;
  }

  return (
    <div className={`${styles.pagination} ${className || ''}`}>
      {/* Previous button */}
      <button
        className={`${styles.navButton} ${current <= 1 ? styles.disabled : ''}`}
        onClick={() => handlePageChange(current - 1)}
        disabled={current <= 1}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15,18 9,12 15,6"></polyline>
        </svg>
      </button>

      {/* Page numbers */}
      {renderPageNumbers()}

      {/* Next button */}
      <button
        className={`${styles.navButton} ${current >= totalPages ? styles.disabled : ''}`}
        onClick={() => handlePageChange(current + 1)}
        disabled={current >= totalPages}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9,6 15,12 9,18"></polyline>
        </svg>
      </button>
    </div>
  );
};

export default Pagination;