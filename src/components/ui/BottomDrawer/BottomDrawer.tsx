'use client';
import { useEffect } from 'react';
import styles from './BottomDrawer.module.css';

interface BottomDrawerProps {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function BottomDrawer({
  isVisible,
  onClose,
  children,
}: BottomDrawerProps) {
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.drawer} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
