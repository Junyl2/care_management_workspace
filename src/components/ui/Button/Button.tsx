import React from 'react';
import { BaseComponent, Variant, Size, Radius, ReviewVariant } from '@/types';
import { cn } from '@lib/utils';
import styles from './Button.module.css';

interface ButtonProps extends BaseComponent {
  variant?: Variant | ReviewVariant;
  size?: Size;
  radius?: Radius;
  disabled?: boolean;
  width?: string | number;
  fullWidth?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  style?: React.CSSProperties;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  radius = 'md',
  fullWidth = false,
  width,
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  className,
  ...props
}) => {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={cn(
        styles.button,
        styles[variant],
        styles[size],
        fullWidth && styles.fullWidth,
        styles[`radius-${radius}`], //
        { [styles.loading]: loading },
        className
      )}
      style={{ width }}
      {...props}
    >
      {loading && <span className={styles.spinner} />}
      {children}
    </button>
  );
};
