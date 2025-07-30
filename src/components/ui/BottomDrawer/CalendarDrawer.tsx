'use client';

import React from 'react';
import Calendar, { CalendarProps } from 'react-calendar';
import { format } from 'date-fns';
import { toast } from 'react-hot-toast';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setField } from '@/store/features/reservationFormSlice';
import BottomDrawer from './BottomDrawer';
import { FiX } from 'react-icons/fi';
import styles from './CalendarDrawer.module.css';

interface CalendarDrawerProps {
  isVisible: boolean;
  onClose: () => void;
  onSelectDate: (date: string) => void;
}

export default function CalendarDrawer({
  isVisible,
  onClose,
  onSelectDate,
}: CalendarDrawerProps) {
  const dispatch = useAppDispatch();
  const selectedDate = useAppSelector(
    (state) => state.reservationForm.serviceDate
  );

  const handleDateChange: CalendarProps['onChange'] = (value) => {
    if (value instanceof Date) {
      if (value.getDay() === 0) {
        toast.error('일요일은 예약이 제한될 수 있습니다.');
      }

      const formatted = format(value, 'yyyy-MM-dd');
      dispatch(setField({ field: 'serviceDate', value: formatted }));
      onSelectDate(formatted);
      onClose();
    }
  };

  return (
    <BottomDrawer isVisible={isVisible} onClose={onClose}>
      <div className={styles.drawerHeader}>
        <div className={styles.indicator} />
        <FiX className={styles.closeIcon} onClick={onClose} />
      </div>
      <div className={styles.calendarWrapper}>
        <Calendar
          locale="ko-KR"
          calendarType="gregory"
          onChange={handleDateChange}
          value={selectedDate ? new Date(selectedDate) : new Date()}
          formatMonthYear={(locale, date) =>
            `${date.getFullYear()}년 ${date.getMonth() + 1}월`
          }
          formatDay={(locale, date) => String(date.getDate())}
          tileClassName={({ date }) =>
            date.getDay() === 0 ? styles.sunday : undefined
          }
          className={styles.customCalendar}
          next2Label={null}
          prev2Label={null}
          minDetail="month"
          maxDetail="month"
        />
      </div>
    </BottomDrawer>
  );
}
