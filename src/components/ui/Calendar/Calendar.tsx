import React, { useEffect, useState, useMemo } from 'react';
import styles from './Calendar.module.css';

interface CalendarProps {
  onDateSelect?: (date: Date) => void;
  selectedDate?: Date;
  showCalendar: boolean;
  closeCalendar?: () => void;
  inDrawer: boolean;
}

const Calendar: React.FC<CalendarProps> = ({
  onDateSelect,
  selectedDate: selectedDateProp,
  showCalendar = false,
  closeCalendar,
  inDrawer = false,
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Normalize and validate the selectedDate prop
  const selectedDate = useMemo(() => {
    if (!selectedDateProp) return undefined;

    // If it's already a Date object, check if it's valid
    if (selectedDateProp instanceof Date) {
      return isNaN(selectedDateProp.getTime()) ? undefined : selectedDateProp;
    }

    // If it's a string or number, try to convert it
    const date = new Date(selectedDateProp);
    return isNaN(date.getTime()) ? undefined : date;
  }, [selectedDateProp]);

  const monthNames = [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ];

  const weekDays = ['일', '월', '화', '수', '목', '금', '토'];

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const getPreviousMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() - 1);
    setCurrentDate(newDate);
  };

  const getNextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  const handleDateClick = (day: Date) => {
    if (onDateSelect) {
      onDateSelect(day);
      if (!inDrawer) {
        closeCalendar?.();
      }
    }
  };

  const isDateSelected = (day: Date) => {
    if (!selectedDate) return false;

    // Check if selectedDate is a valid Date object
    if (!(selectedDate instanceof Date) || isNaN(selectedDate.getTime())) {
      console.warn('Invalid selectedDate passed to Calendar:', selectedDate);
      return false;
    }

    // Create date objects with same time (midnight) for accurate comparison
    const dayAtMidnight = new Date(
      day.getFullYear(),
      day.getMonth(),
      day.getDate()
    );
    const selectedAtMidnight = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      selectedDate.getDate()
    );

    return dayAtMidnight.getTime() === selectedAtMidnight.getTime();
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Previous month's days
    const prevMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      0
    );
    const daysInPrevMonth = prevMonth.getDate();

    for (let i = firstDay - 1; i >= 0; i--) {
      const day = daysInPrevMonth - i;
      days.push(
        <div
          key={`prev-${day}`}
          className={`${styles.dayCell} ${styles.otherMonth}`}
        >
          {day}
        </div>
      );
    }

    // Current month's days
    for (let day = 1; day <= daysInMonth; day++) {
      const dayOfWeek = (firstDay + day - 1) % 7;
      const isSunday = dayOfWeek === 0;
      const currentDayDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        day
      );
      const isSelected = isDateSelected(currentDayDate);

      // Build class names properly
      const dayClasses = [styles.dayCell, styles.currentMonth];

      if (isSunday) {
        dayClasses.push(styles.sunday);
      }

      if (isSelected) {
        dayClasses.push(styles.selected);
      }

      days.push(
        <div
          key={`current-${day}`}
          className={dayClasses.join(' ')}
          style={
            isSelected ? { backgroundColor: '#007aff', color: 'white' } : {}
          }
          onClick={() => handleDateClick(currentDayDate)}
        >
          {day}
        </div>
      );
    }

    // Next month's days to fill the grid
    const remainingCells = 42 - days.length; // 6 rows × 7 days
    for (let day = 1; day <= remainingCells; day++) {
      days.push(
        <div
          key={`next-${day}`}
          className={`${styles.dayCell} ${styles.otherMonth}`}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  useEffect(() => {
    console.log('Selected date:', selectedDate);
    console.log('Selected date type:', typeof selectedDate);
    console.log(
      'Is valid date:',
      selectedDate instanceof Date && !isNaN(selectedDate?.getTime())
    );
  }, [selectedDate]);

  return (
    <div
      className={`${styles.calendar} ${!showCalendar ? styles.noShow : ''} ${
        inDrawer ? styles.inDrawer : ''
      }`}
    >
      <div className={styles.header}>
        <button className={styles.navButton} onClick={getPreviousMonth}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="15,18 9,12 15,6"></polyline>
          </svg>
        </button>

        <h2 className={styles.monthYear}>
          {currentDate.getFullYear()} {monthNames[currentDate.getMonth()]}
        </h2>

        <button className={styles.navButton} onClick={getNextMonth}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="9,6 15,12 9,18"></polyline>
          </svg>
        </button>
      </div>
      <div className={styles.weekDays}>
        {weekDays.map((day) => (
          <div key={day} className={styles.weekDay}>
            {day}
          </div>
        ))}
      </div>
      <div className={styles.daysGrid}>{renderCalendarDays()}</div>
    </div>
  );
};

export default Calendar;
