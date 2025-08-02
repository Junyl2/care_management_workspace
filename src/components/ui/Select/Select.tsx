import React from 'react';
import styles from './Select.module.css';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string; label: string }[];
  showLabel?: boolean;
  label?: string;
  value?: string;
  variant?: 'primary' | 'simple';
}

export default function Select({
  options = [],
  showLabel = false,
  label = 'Select',
  className = '',
  value,
  variant = 'primary',
  ...props
}: SelectProps) {
  return (
    <div className={`${styles.selectWrapper} ${className}`}>
      {showLabel && <label className={styles.label}>{label}</label>}
      <select
        className={`${styles.select} ${styles[variant]}`}
        value={value}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
