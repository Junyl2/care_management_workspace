import React, { useState, useRef, useEffect } from 'react';
import styles from './AdminCalendar.module.css';

interface CalendarProps {
  selectedDate?: Date | undefined;
  onDateSelect?: (date: Date) => void;
  placeholder?: string;
}

const AdminCalendar: React.FC<CalendarProps> = ({
  selectedDate,
  onDateSelect,
  placeholder = "날짜"
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const dropdownRef = useRef<HTMLDivElement>(null);

  const months = [
    '1월', '2월', '3월', '4월', '5월', '6월',
    '7월', '8월', '9월', '10월', '11월', '12월'
  ];

  const weekDays = ['일', '월', '화', '수', '목', '금', '토'];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    const days = [];

    // Previous month's trailing days
    const prevMonth = new Date(year, month - 1, 0);
    for (let i = startingDay - 1; i >= 0; i--) {
      days.push({
        date: prevMonth.getDate() - i,
        isCurrentMonth: false,
        isPreviousMonth: true
      });
    }

    // Current month's days
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({
        date: day,
        isCurrentMonth: true,
        isPreviousMonth: false
      });
    }

    // Next month's leading days
    const remainingDays = 42 - days.length; // 6 rows × 7 days
    for (let day = 1; day <= remainingDays; day++) {
      days.push({
        date: day,
        isCurrentMonth: false,
        isPreviousMonth: false
      });
    }

    return days;
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const handleDateClick = (day: number, isCurrentMonth: boolean) => {
    if (!isCurrentMonth) return;

    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    onDateSelect?.(newDate);
    setIsOpen(false);
  };

  const isSelected = (day: number, isCurrentMonth: boolean) => {
    if (!isCurrentMonth || !selectedDate) return false;
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    return (
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    );
  };

  const isToday = (day: number, isCurrentMonth: boolean) => {
    if (!isCurrentMonth) return false;
    const today = new Date();
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const formatDisplayDate = (date: Date) => {
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
  };

  const days = getDaysInMonth(currentMonth);

  return (
    <div className={styles.calendarContainer} ref={dropdownRef}>
      <div 
        className={styles.selector}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={styles.selectorText}>
          {selectedDate ? formatDisplayDate(selectedDate) : placeholder}
        </span>
        <span className={`${styles.arrow} ${isOpen ? styles.arrowUp : ''}`}>
          ▼
        </span>
      </div>

      {isOpen && (
        <div className={styles.calendarDropdown}>
          <div className={styles.calendarHeader}>
            <button 
              className={styles.navButton}
              onClick={handlePrevMonth}
            >
              &#8249;
            </button>
            <span className={styles.monthYear}>
              {currentMonth.getFullYear()}년 {months[currentMonth.getMonth()]}
            </span>
            <button 
              className={styles.navButton}
              onClick={handleNextMonth}
            >
              &#8250;
            </button>
          </div>

          <div className={styles.weekDays}>
            {weekDays.map((day) => (
              <div key={day} className={styles.weekDay}>
                {day}
              </div>
            ))}
          </div>

          <div className={styles.daysGrid}>
            {days.map((dayObj, index) => (
              <button
                key={index}
                className={`
                  ${styles.dayButton} 
                  ${!dayObj.isCurrentMonth ? styles.otherMonth : ''}
                  ${isSelected(dayObj.date, dayObj.isCurrentMonth) ? styles.selected : ''}
                  ${isToday(dayObj.date, dayObj.isCurrentMonth) ? styles.today : ''}
                `}
                onClick={() => handleDateClick(dayObj.date, dayObj.isCurrentMonth)}
              >
                {dayObj.date}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCalendar;