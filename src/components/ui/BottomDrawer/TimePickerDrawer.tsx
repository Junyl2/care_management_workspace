'use client';

import React from 'react';
import BottomDrawer from '@/components/ui/BottomDrawer/BottomDrawer';
import TimePickerMobile from './TimePickerMobile';
import { FiX } from 'react-icons/fi';
import styles from './TimePickerDrawer.module.css';

interface TimePickerDrawerProps {
  isVisible: boolean;
  onClose: () => void;
  onSelectTime: (time: string) => void;
}

export default function TimePickerDrawer({
  isVisible,
  onClose,
  onSelectTime,
}: TimePickerDrawerProps) {
  return (
    <BottomDrawer isVisible={isVisible} onClose={onClose}>
      <div className={styles.drawerHeader}>
        <div className={styles.indicator} />
        <FiX className={styles.closeIcon} onClick={onClose} />
      </div>
      <div className={styles.pickerWrapper}>
        <TimePickerMobile onSelectTime={onSelectTime} onClose={onClose} />
      </div>
    </BottomDrawer>
  );
}
