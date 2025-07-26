'use client';

import { useEffect } from 'react';
import { FiX } from 'react-icons/fi';
import styles from './BaseModal.module.css';

interface BaseModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  className?: string;
  children?: React.ReactNode;
}

export const BaseModal = ({
  open,
  onClose,
  title,
  className = '',
  children,
}: BaseModalProps) => {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={`${styles.modal} ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close"
        >
          <FiX size={22} />
        </button>
        {title && <h2 className={styles.title}>{title}</h2>}
        {children}
      </div>
    </div>
  );
};
