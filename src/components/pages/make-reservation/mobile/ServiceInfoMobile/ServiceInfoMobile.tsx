'use client';

import React from 'react';
import styles from './ServiceInfoMobile.module.css';
import { FiChevronLeft } from 'react-icons/fi';
import { BottomBarBase } from '@/components/ui';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setField } from '@/store/features/reservationFormSlice';

interface Props {
  onBack: () => void;
  onNext: () => void;
}

const fields = [
  { label: '보호자 성함 *', name: 'guardianName', placeholder: '홍길동' },
  {
    label: '보호자 연락처 *',
    name: 'guardianPhone',
    placeholder: '01012345678',
  },
  { label: '이용자 성함 *', name: 'userName', placeholder: '홍길동' },
  { label: '이용자 연락처 *', name: 'userPhone', placeholder: '01012345678' },
  { label: '자택 주소 *', name: 'address', placeholder: '주소를 입력하세요.' },
  {
    label: '상세 주소 입력',
    name: 'addressDetail',
    placeholder: '상세 주소 입력',
  },
];

const ServiceInfoMobile: React.FC<Props> = ({ onBack, onNext }) => {
  const dispatch = useAppDispatch();
  const form = useAppSelector((state) => state.reservationForm);

  const handleChange = (field: string, value: string) => {
    dispatch(setField({ field: field as any, value }));
  };

  const isValid =
    form.guardianName &&
    form.guardianPhone &&
    form.userName &&
    form.userPhone &&
    form.address;

  return (
    <div className={styles.wrapper}>
      {/* 🔝 Header */}
      <div className={styles.header}>
        <button className={styles.backButton} onClick={onBack}>
          <FiChevronLeft size={34} className={styles.arrowLeft} />
        </button>
        <div className={styles.headerTitle}>
          <h2>예약하기</h2>
          <p>서비스 정보 입력</p>
        </div>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.subheading}>서비스 정보 입력</div>

        <div className={styles.formGroup}>
          {fields.map((field) => (
            <div className={styles.inputGroup} key={field.name}>
              <label>{field.label}</label>
              <input
                type="text"
                placeholder={field.placeholder}
                value={form[field.name as keyof typeof form]}
                onChange={(e) => handleChange(field.name, e.target.value)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <BottomBarBase>
        <button
          className={`${styles.button} ${isValid ? styles.primary : styles.secondary}`}
          disabled={!isValid}
          onClick={onNext}
        >
          예약 정보 확인하기
        </button>
      </BottomBarBase>
    </div>
  );
};

export default ServiceInfoMobile;
