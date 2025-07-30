'use client';

import React, { useEffect } from 'react';
import Calendar from 'react-calendar';
import { CalendarProps } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './SelectDateTimeDesktop.module.css';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setField } from '@/store/features/reservationFormSlice';
import { format } from 'date-fns';
import { toast } from 'react-hot-toast';

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
  const dispatch = useAppDispatch();
  const { serviceDate, serviceTime } = useAppSelector(
    (state) => state.reservationForm
  );

  const selectedDate = serviceDate ? new Date(serviceDate) : null;

  const handleDateChange: CalendarProps['onChange'] = (value) => {
    if (value instanceof Date) {
      if (value.getDay() === 0) {
        toast.error('일요일은 예약이 제한될 수 있습니다.');
      }

      const formatted = format(value, 'yyyy-MM-dd');
      dispatch(setField({ field: 'serviceDate', value: formatted }));
    }
  };

  const handleTimeSelect = (slot: string) => {
    dispatch(setField({ field: 'serviceTime', value: slot }));
  };

  const addThirtyMinutes = (time: string): string => {
    const [start, end] = time.split(' ~ ');
    const [endHour, endMinute] = end.split(':').map(Number);
    const endDate = new Date();
    endDate.setHours(endHour, endMinute, 0, 0);
    endDate.setMinutes(endDate.getMinutes() + 30);

    const formattedEnd = `${String(endDate.getHours()).padStart(2, '0')}:${String(
      endDate.getMinutes()
    ).padStart(2, '0')}`;

    return `${start} ~ ${formattedEnd}`;
  };

  const handleAddThirtyMinutes = () => {
    if (serviceTime) {
      const newSlot = addThirtyMinutes(serviceTime);
      dispatch(setField({ field: 'serviceTime', value: newSlot }));
    }
  };

  // ✅ Ensure default time slot is set
  useEffect(() => {
    if (!serviceTime && timeSlots.length > 0) {
      dispatch(setField({ field: 'serviceTime', value: timeSlots[0] }));
    }
  }, [dispatch, serviceTime]);

  // Optional: log values to verify Redux connection
  useEffect(() => {
    console.log('Redux serviceDate:', serviceDate);
    console.log('Redux serviceTime:', serviceTime);
  }, [serviceDate, serviceTime]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerTitle}>
          <h2 className={styles.title}>날짜 및 시간 선택</h2>
          <p className={styles.note}>*서비스 이용 최소 2~3일 전 예약 필수</p>
        </div>
        <div className={styles.tooltipWrapper}>
          <p className={styles.reminder}>
            이용 시간 안내
            <Image
              src="/assets/images/make-reservation/excla.png"
              alt="Reminder"
              height={14}
              width={14}
              className={styles.reminderImage}
            />
          </p>
          <div className={styles.tooltip}>
            예약 가능한 시간대를 확인해주세요.
          </div>
        </div>
      </div>

      <div className={styles.grid}>
        {/* Date Section */}
        <div className={styles.leftColumn}>
          <div className={styles.columnHeader}>
            <div className="flex gap-2 items-center">
              <Image
                src="/assets/images/make-reservation/lucide_calendar-fold.png"
                alt="Calendar Schedule"
                height={16}
                width={16}
              />
              <label className={styles.label}>
                날짜
                {!selectedDate && <span className={styles.required}>*</span>}
              </label>
            </div>
            <div className={styles.dateTag}>
              {selectedDate ? (
                <>
                  {selectedDate.getFullYear()}년 {selectedDate.getMonth() + 1}월{' '}
                  {selectedDate.getDate()}일
                </>
              ) : (
                '날짜를 선택해주세요'
              )}
            </div>
          </div>

          <div className={styles.calendarContainer}>
            <Calendar
              locale="ko-KR"
              calendarType="gregory"
              onChange={handleDateChange}
              value={selectedDate || new Date()}
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
        </div>

        {/* Time Section */}
        <div className={styles.rightColumn}>
          <div className="flex flex-col gap-2">
            <div className={styles.columnHeader}>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <Image
                    src="/assets/images/make-reservation/tabler_clock.png"
                    alt="Schedule Time"
                    height={16}
                    width={16}
                  />
                  <label className={styles.label}>
                    시간
                    {!serviceTime && <span className={styles.required}>*</span>}
                  </label>
                </div>
                <p className={styles.timeNote}>
                  30분 단위로 시간 추가 시 +버튼으로 추가 하세요.
                </p>
              </div>

              <div>
                {serviceTime && (
                  <div className={styles.selectedSlot}>
                    <span>{serviceTime}</span>
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
              </div>
            </div>
          </div>

          <div className={styles.gridTimeSlots}>
            {timeSlots.map((slot) => (
              <button
                key={slot}
                className={`${styles.slot} ${
                  serviceTime === slot ? styles.active : ''
                }`}
                onClick={() => handleTimeSelect(slot)}
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
