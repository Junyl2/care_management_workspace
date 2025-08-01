import React, { useState, useRef, useEffect } from 'react';
import styles from './PrimarySelectPicker.module.css';
import { type PickerOption } from '@/types/global';

export interface PrimaryPickerProps {
  options: PickerOption[];
  value?: string | number;
  defaultValue?: string | number;
  placeholder?: string;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  width?: 'auto' | 'full';
  onChange?: (value: string | number, option: PickerOption) => void;
  className?: string;
}

const PrimarySelectPicker: React.FC<PrimaryPickerProps> = ({
  options = [],
  value,
  defaultValue,
  placeholder = '선택하세요',
  disabled = false,
  size = 'medium',
  width = 'auto',
  onChange,
  className
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || defaultValue);
  const pickerRef = useRef<HTMLDivElement>(null);
  
  const selectedOption = options.find(option => option.value === selectedValue);
  
  useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value);
    }
  }, [value]);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);
  
  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };
  
  const handleOptionClick = (option: PickerOption) => {
    if (option.disabled) return;
    
    setSelectedValue(option.value);
    setIsOpen(false);
    onChange?.(option.value, option);
  };
  
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (disabled) return;
    
    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        setIsOpen(!isOpen);
        break;
      case 'Escape':
        setIsOpen(false);
        break;
      case 'ArrowDown':
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else {
          // Navigate to next option
          const currentIndex = options.findIndex(opt => opt.value === selectedValue);
          const nextIndex = currentIndex < options.length - 1 ? currentIndex + 1 : 0;
          const nextOption = options[nextIndex];
          if (nextOption && !nextOption.disabled) {
            setSelectedValue(nextOption.value);
            onChange?.(nextOption.value, nextOption);
          }
        }
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else {
          // Navigate to previous option
          const currentIndex = options.findIndex(opt => opt.value === selectedValue);
          const prevIndex = currentIndex > 0 ? currentIndex - 1 : options.length - 1;
          const prevOption = options[prevIndex];
          if (prevOption && !prevOption.disabled) {
            setSelectedValue(prevOption.value);
            onChange?.(prevOption.value, prevOption);
          }
        }
        break;
    }
  };
  
  const getSizeClass = () => {
    switch (size) {
      case 'small':
        return styles.small;
      case 'large':
        return styles.large;
      default:
        return '';
    }
  };
  
  const getWidthClass = () => {
    return width === 'full' ? styles.fullWidth : '';
  };
  
  return (
    <div 
      ref={pickerRef}
      className={`${styles.picker} ${className || ''}`}
    >
      <button
        type="button"
        className={`
          ${styles.pickerButton} 
          ${getSizeClass()} 
          ${getWidthClass()}
          ${disabled ? styles.disabled : ''}
        `}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className={`${styles.label} ${!selectedOption ? styles.placeholder : ''}`}>
          {selectedOption?.label || placeholder}
        </span>
        <span className={`${styles.arrow} ${isOpen ? styles.arrowUp : ''}`}>
          ▼
        </span>
      </button>
      
      <div className={`${styles.dropdown} ${isOpen ? styles.open : ''}`}>
        <div 
          className={styles.optionsList}
          role="listbox"
        >
          {options.map((option) => (
            <div
              key={option.value}
              className={`
                ${styles.option}
                ${option.value === selectedValue ? styles.selected : ''}
                ${option.disabled ? styles.disabled : ''}
              `}
              onClick={() => handleOptionClick(option)}
              role="option"
              aria-selected={option.value === selectedValue}
            >
              {option.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrimarySelectPicker;