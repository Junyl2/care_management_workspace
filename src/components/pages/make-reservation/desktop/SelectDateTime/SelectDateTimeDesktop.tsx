'use client';

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './SelectDateTimeDesktop.module.css';

const timeSlots = [
  '07:00 ~ 09:00',
  '08:00 ~ 10:00',
  '09:00 ~ 11:00',
  '10:00 ~ 12:00',
  '11:00 ~ 13:00',
  '12:00 ~ 14:00',
  '13:00 ~ 15:00',
  '14:00 ~ 16:00',
  '15:00 ~ 17:00',
  '16:00 ~ 18:00',
  '17:00 ~ 19:00',
  '18:00 ~ 20:00',
];

const SelectDateTimeDesktop: React.FC = () => {
  const [selectedSlot, setSelectedSlot] = useState<string>('11:00 ~ 13:00');
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const handleDateChange = (value: Date | Date[]) => {
    if (value instanceof Date) {
      setSelectedDate(value);
    }
  };

  const addThirtyMinutes = (time: string): string => {
    const [start, end] = time.split(' ~ ');
    const [endHour, endMinute] = end.split(':').map(Number);

    const endDate = new Date();
    endDate.setHours(endHour);
    endDate.setMinutes(endMinute);
    endDate.setSeconds(0);
    endDate.setMilliseconds(0);

    endDate.setMinutes(endDate.getMinutes() + 30);

    const formattedEnd = `${String(endDate.getHours()).padStart(2, '0')}:${String(
      endDate.getMinutes()
    ).padStart(2, '0')}`;

    return `${start} ~ ${formattedEnd}`;
  };

  const handleAddThirtyMinutes = () => {
    if (selectedSlot) {
      const newSlot = addThirtyMinutes(selectedSlot);
      setSelectedSlot(newSlot);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerTitle}>
          <h2 className={styles.title}>날짜 및 시간 선택</h2>
          <p className={styles.note}>*서비스 이용 최소 2~3일 전 예약 필수</p>
        </div>
        <div>이용 시간 안내</div>
      </div>

      <div className={styles.grid}>
        {/* 📅 Date Section */}
        <div className={styles.leftColumn}>
          <label className={styles.label}>날짜 *</label>
          <div className={styles.dateTag}>
            {selectedDate.getFullYear()}년 {selectedDate.getMonth() + 1}월{' '}
            {selectedDate.getDate()}일
          </div>
          <Calendar
            locale="ko-KR"
            calendarType="gregory"
            onChange={handleDateChange}
            value={selectedDate}
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

        {/* ⏰ Time Section */}
        <div className={styles.rightColumn}>
          <label className={styles.label}>시간 *</label>
          <p className={styles.timeNote}>
            30분 단위로 시간 추가 시 +버튼으로 추가 하세요.
          </p>

          {selectedSlot && (
            <div className={styles.selectedSlot}>
              <span>{selectedSlot}</span>
              <div className={styles.buttonWrapper}>
                <button
                  className={styles.addButton}
                  onClick={handleAddThirtyMinutes}
                >
                  ＋
                </button>
              </div>
            </div>
          )}

          <div className={styles.gridTimeSlots}>
            {timeSlots.map((slot) => (
              <button
                key={slot}
                className={`${styles.slot} ${selectedSlot === slot ? styles.active : ''}`}
                onClick={() => setSelectedSlot(slot)}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectDateTimeDesktop;
