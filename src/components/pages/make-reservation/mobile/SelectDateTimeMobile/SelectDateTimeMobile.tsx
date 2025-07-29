'use client';

import React from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import { CalendarProps } from 'react-calendar';

import styles from './SelectDateTimeMobile.module.css';
import { FiChevronLeft } from 'react-icons/fi';
import { BottomBarBase } from '@/components/ui';
import { toast } from 'react-hot-toast';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setField } from '@/store/features/reservationFormSlice';
import { format } from 'date-fns';

interface Props {
  onBack: () => void;
  onNext: () => void;
}

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

const SelectDateTimeMobile: React.FC<Props> = ({ onBack, onNext }) => {
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

  const isValid = !!serviceDate && !!serviceTime;

  return (
    <div className={styles.wrapper}>
      {/* Header */}
      <div className={styles.header}>
        <button className={styles.backButton} onClick={onBack}>
          <FiChevronLeft size={34} className={styles.arrowLeft} />
        </button>
        <div className={styles.headerTitle}>
          <h2>예약하기</h2>
          <p>날짜 및 시간 선택</p>
        </div>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.subheading}>날짜 및 시간 선택</div>

        {/*  Date Section */}
        <div className={styles.dateSection}>
          <div>
            <h3 className={styles.sectionTitle}>날짜 선택</h3>
            <p className={styles.sectionNote}>
              *서비스 이용 최소 2~3일 전 예약 필수
            </p>
          </div>
          <div>
            <div className={styles.dateTag}>
              {selectedDate
                ? `${selectedDate.getFullYear()}년 ${selectedDate.getMonth() + 1}월 ${selectedDate.getDate()}일`
                : '날짜를 선택해주세요'}
            </div>

            <div className={styles.calendarWrapper}>
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
        </div>

        <div className={styles.divider} />

        {/*  Time Section */}
        <div className={styles.timeSection}>
          <div>
            <h3 className={styles.sectionTitle}>시간 선택</h3>
            <p className={styles.sectionNote}>
              * 최소 2시간 이상 선택, 30분 단위로 시간 추가 가능
            </p>
          </div>

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

          <div className={styles.grid}>
            {timeSlots.map((slot) => (
              <button
                key={slot}
                className={`${styles.slot} ${serviceTime === slot ? styles.active : ''}`}
                onClick={() => handleTimeSelect(slot)}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <BottomBarBase>
        <button
          className={`${styles.button} ${
            isValid ? styles.primary : styles.secondary
          }`}
          disabled={!isValid}
          onClick={onNext}
        >
          서비스 정보 입력하기
        </button>
      </BottomBarBase>
    </div>
  );
};

export default SelectDateTimeMobile;
