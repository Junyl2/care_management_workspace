'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from './TimePickerMobile.module.css';

interface TimePickerMobileProps {
  onSelectTime: (time: string) => void;
  onClose: () => void;
}

const hours = Array.from({ length: 24 }, (_, i) =>
  i.toString().padStart(2, '0')
);
const minutes = Array.from({ length: 60 }, (_, i) =>
  i.toString().padStart(2, '0')
);

export default function TimePickerMobile({
  onSelectTime,
  onClose,
}: TimePickerMobileProps) {
  const [selectedHour, setSelectedHour] = useState('12');
  const [selectedMinute, setSelectedMinute] = useState('00');

  const hourRef = useRef<HTMLDivElement>(null);
  const minuteRef = useRef<HTMLDivElement>(null);

  const itemHeight = 40; // adjust to match your actual CSS line height

  const getCenterIndex = (scrollTop: number) =>
    Math.round(scrollTop / itemHeight);

  const onHourScroll = () => {
    if (hourRef.current) {
      const index = getCenterIndex(hourRef.current.scrollTop);
      setSelectedHour(hours[index] || '00');
    }
  };

  const onMinuteScroll = () => {
    if (minuteRef.current) {
      const index = getCenterIndex(minuteRef.current.scrollTop);
      setSelectedMinute(minutes[index] || '00');
    }
  };

  const handleCenterSelect = () => {
    onSelectTime(`${selectedHour}:${selectedMinute}`);
    onClose();
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.pickerContainer}>
          <div
            className={styles.scrollArea}
            ref={hourRef}
            onScroll={onHourScroll}
          >
            {hours.map((hour) => (
              <div key={hour} className={styles.item}>
                {hour}
              </div>
            ))}
          </div>
          <div
            className={styles.scrollArea}
            ref={minuteRef}
            onScroll={onMinuteScroll}
          >
            {minutes.map((minute) => (
              <div key={minute} className={styles.item}>
                {minute}
              </div>
            ))}
          </div>
        </div>

        {/* Center line for visual focus */}
        <div className={styles.centerOverlay} onClick={handleCenterSelect} />
      </div>

      <div className={styles.colon}>:</div>
    </>
  );
}
