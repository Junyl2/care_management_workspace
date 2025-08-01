import { useState } from 'react';

export const useReservationManagement = () => {
  const [sortingOption, setSortingOption] = useState<string>('newest');
  const [serviceTypeOption, setServiceTypeOption] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [expandedKeys, setExpandedKeys] = useState<(string | number)[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<(string | number)[]>([]);

  const handleSortingChange = (value: string | number) => {
    setSortingOption(value as string);
  };

  const handleServiceTypeChange = (value: string | number) => {
    setServiceTypeOption(value as string);
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  const handleExpandToggle = (recordKey: string | number) => {
    if (expandedKeys.includes(recordKey)) {
      setExpandedKeys(expandedKeys.filter(key => key !== recordKey));
    } else {
      setExpandedKeys([...expandedKeys, recordKey]);
    }
  };

  const handleRowSelectionChange = (selectedKeys: (string | number)[]) => {
    setSelectedRowKeys(selectedKeys);
  };

  return {
    sortingOption,
    serviceTypeOption,
    selectedDate,
    expandedKeys,
    selectedRowKeys,
    handleSortingChange,
    handleServiceTypeChange,
    handleDateSelect,
    handleExpandToggle,
    handleRowSelectionChange,
  };
}; 