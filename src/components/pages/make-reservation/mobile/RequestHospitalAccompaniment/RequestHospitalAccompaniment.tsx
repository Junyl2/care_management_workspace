'use client';

import styles from './RequestHospitalAccompaniment.module.css';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setField } from '@/store/features/reservationFormSlice';
import { FiCalendar, FiClock, FiChevronDown } from 'react-icons/fi';
import { useState } from 'react';
import CalendarDrawer from '@/components/ui/BottomDrawer/CalendarDrawer';
import TimePickerDrawer from '@/components/ui/BottomDrawer/TimePickerDrawer';

const RequestHospitalAccompaniment = () => {
  const dispatch = useAppDispatch();
  const form = useAppSelector((state) => state.reservationForm);

  const [showCalendar, setShowCalendar] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleChange = (field: keyof typeof form, value: string) => {
    dispatch(setField({ field, value }));
  };

  const isFilled = (value: string) => value && value.trim() !== '';

  const handleCheckboxChange = (item: string, checked: boolean) => {
    const updatedList = checked
      ? [...(form.additionalRequests || []), item]
      : (form.additionalRequests || []).filter((i) => i !== item);
    handleChange('additionalRequests', updatedList.join(','));
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeader}>병원 동행 요청 사항</h1>
      <p className={styles.subHeader}>
        병원 동행 시 필요한 정보들을 작성해 주세요.
      </p>

      <div className={styles.formGroup}>
        <label>
          병원 이름
          {!isFilled(form.hospitalName) && (
            <span className={styles.required}>*</span>
          )}
        </label>
        <input
          type="text"
          className={styles.textInput}
          placeholder="예) 서울 성심 병원"
          value={form.hospitalName || ''}
          onChange={(e) => handleChange('hospitalName', e.target.value)}
        />

        <label>
          진료과
          {!isFilled(form.department) && (
            <span className={styles.required}>*</span>
          )}
        </label>
        <input
          type="text"
          className={styles.textInput}
          placeholder="정형외과"
          value={form.department || ''}
          onChange={(e) => handleChange('department', e.target.value)}
        />

        <label>
          진료날짜
          {!isFilled(form.appointmentDate) && (
            <span className={styles.required}>*</span>
          )}
        </label>
        <div
          className={styles.iconInputWrapper}
          onClick={() => setShowCalendar(true)}
        >
          <input
            type="text"
            className={styles.textInput}
            placeholder="2025.00.00"
            value={form.appointmentDate || ''}
            readOnly
          />
          <FiCalendar className={styles.inputIcon} />
        </div>

        <label>
          진료시간
          {!isFilled(form.appointmentTime) && (
            <span className={styles.required}>*</span>
          )}
        </label>
        <div
          className={styles.iconInputWrapper}
          onClick={() => setShowTimePicker(true)}
        >
          <input
            type="text"
            className={styles.textInput}
            placeholder="00:00"
            value={form.appointmentTime || ''}
            readOnly
          />
          <FiClock className={styles.inputIcon} />
        </div>
      </div>

      <div className={styles.formGroup}>
        <h3 className={styles.sectionTitle}>중증 가산 여부</h3>
        <p className={styles.sectionSubTitle}>
          *중증 가산 시간당 (5,000원 추가)
        </p>
        <div className={styles.toggleGroup}>
          {['해당 없음', '중증 해당'].map((option) => (
            <button
              key={option}
              type="button"
              className={
                form.severity === option
                  ? styles.toggleActive
                  : styles.toggleButton
              }
              onClick={() => handleChange('severity', option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.formGroup}>
        <h3 className={styles.sectionTitle}>추가 요청 사항 (복수 선택 가능)</h3>
        {[
          '이동 시 차량 동행 원함',
          '거동 불가',
          '휠체어 이동 필요',
          '기저귀 착용',
          '보호자 동행',
          '검사 있음',
          '서류 발급',
        ].map((item) => (
          <label key={item} className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={form.additionalRequests?.includes(item) || false}
              onChange={(e) => handleCheckboxChange(item, e.target.checked)}
            />
            {item}
          </label>
        ))}
      </div>

      <div className={styles.formGroup}>
        <h3 className={styles.sectionTitle}>기타 추가 요청 사항</h3>
        <textarea
          className={styles.textInput}
          placeholder="직접 입력"
          value={form.etc || ''}
          onChange={(e) => handleChange('etc', e.target.value)}
        />
      </div>

      <div className={styles.paymentNotice}>
        결제 시 비용 추가 되는 내용 안내
        <FiChevronDown className={styles.paymentIcon} />
      </div>

      <CalendarDrawer
        isVisible={showCalendar}
        onClose={() => setShowCalendar(false)}
        onSelectDate={(date) => handleChange('appointmentDate', date)}
      />

      <TimePickerDrawer
        isVisible={showTimePicker}
        onClose={() => setShowTimePicker(false)}
        onSelectTime={(time) => handleChange('appointmentTime', time)}
      />
    </div>
  );
};

export default RequestHospitalAccompaniment;
