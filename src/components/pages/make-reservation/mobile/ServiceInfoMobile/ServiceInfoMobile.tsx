'use client';

import React from 'react';
import styles from './ServiceInfoMobile.module.css';
import { FiChevronLeft } from 'react-icons/fi';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import MobileReservationDrawer from '../MobileReservationDrawer/MobileReservationDrawer';

interface Props {
  onBack: () => void;
  onNext: () => void;
}

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
      {/* Header */}
      <div className={styles.header}>
        <button className={styles.backButton} onClick={onBack}>
          <FiChevronLeft size={34} className={styles.arrowLeft} />
        </button>
        <div className={styles.headerTitle}>
          <h2>예약하기</h2>
          <p>서비스 정보 입력</p>
        </div>
      </div>

      {/* Content */}
      <div className={styles.contentWrapper}>
        <div className={styles.subheading}>보호자 정보</div>
        <div className={styles.formGroup}>
          <div className={styles.inputGroup}>
            <label>보호자 성함 *</label>
            <input
              type="text"
              placeholder="홍길동"
              value={form.guardianName}
              onChange={(e) => handleChange('guardianName', e.target.value)}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>보호자 연락처 *</label>
            <input
              type="text"
              placeholder="01012345678"
              value={form.guardianPhone}
              onChange={(e) => handleChange('guardianPhone', e.target.value)}
            />
          </div>
        </div>

        <div className={styles.formGroup}>
          <div className={styles.inputGroup}>
            <label>이용자 성함 *</label>
            <input
              type="text"
              placeholder="홍길동"
              value={form.userName}
              onChange={(e) => handleChange('userName', e.target.value)}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>이용자 연락처 *</label>
            <input
              type="text"
              placeholder="01012345678"
              value={form.userPhone}
              onChange={(e) => handleChange('userPhone', e.target.value)}
            />
          </div>
        </div>

        <div className={styles.formGroup}>
          <div className={styles.inputGroup}>
            <label>상세 주소 입력</label>
            <div>
              <input
                type="text"
                placeholder="주소를 입력하세요."
                value={form.address}
                onChange={(e) => handleChange('address', e.target.value)}
              />
              <button></button>
            </div>

            <input
              type="text"
              placeholder="상세 주소 입력"
              value={form.addressDetail}
              onChange={(e) => handleChange('addressDetail', e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div>
        <MobileReservationDrawer />
      </div>
    </div>
  );
};

export default ServiceInfoMobile;
