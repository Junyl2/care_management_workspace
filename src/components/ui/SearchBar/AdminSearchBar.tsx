import React, { useState, useRef } from 'react';
import styles from './AdminSearchBar.module.css';

export interface AdminSearchBarProps {
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  loading?: boolean;
  showClearButton?: boolean;
  onSearch?: (value: string) => void;
  onChange?: (value: string) => void;
  onClear?: () => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  className?: string;
}

const AdminSearchBar: React.FC<AdminSearchBarProps> = ({
  placeholder = '예약자명, 전화번호, 글쓴 등 검색',
  value,
  defaultValue = '',
  disabled = false,
  loading = false,
  showClearButton = true,
  onSearch,
  onChange,
  onClear,
  onFocus,
  onBlur,
  className
}) => {
  const [searchValue, setSearchValue] = useState(value || defaultValue);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSearchValue(newValue);
    onChange?.(newValue);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSearch();
    }
  };

  const handleSearch = () => {
    if (!disabled && !loading) {
      onSearch?.(searchValue);
    }
  };

  const handleClear = () => {
    setSearchValue('');
    onChange?.('');
    onClear?.();
    inputRef.current?.focus();
  };

  const shouldShowClearButton = showClearButton && searchValue.length > 0 && !disabled;
  const currentValue = value !== undefined ? value : searchValue;

  return (
    <div 
      className={`
        ${styles.searchContainer} 
        ${disabled ? styles.disabled : ''}
        ${loading ? styles.loading : ''}
        ${className || ''}
      `}
    >
      <input
        ref={inputRef}
        type="text"
        className={styles.searchInput}
        placeholder={placeholder}
        value={currentValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled}
        aria-label="검색"
      />
      
      {shouldShowClearButton && (
        <button
          type="button"
          className={styles.clearButton}
          onClick={handleClear}
          aria-label="검색어 지우기"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      )}
      
      {onSearch ? (
        <button
          type="button"
          className={styles.searchButton}
          onClick={handleSearch}
          disabled={disabled || loading}
          aria-label="검색"
        >
          {loading ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 6v6l4 2"></path>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="M21 21l-4.35-4.35"></path>
            </svg>
          )}
        </button>
      ) : (
        <div className={`${styles.searchIcon} ${loading ? styles.loading : ''}`}>
          {loading ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 6v6l4 2"></path>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="M21 21l-4.35-4.35"></path>
            </svg>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminSearchBar;