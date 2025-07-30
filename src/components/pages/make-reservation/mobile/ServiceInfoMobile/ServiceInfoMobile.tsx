'use client';

import React from 'react';
import styles from './ServiceInfoMobile.module.css';
import { FiChevronLeft } from 'react-icons/fi';
import { CiSearch } from 'react-icons/ci';

import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import MobileReservationDrawer from '../MobileReservationDrawer/MobileReservationDrawer';
import { SearchAddress } from '@/components/ui/Modal/SearchAddress';
import { setField } from '@/store/features/reservationFormSlice';
import { SERVICE_NAMES } from '@/lib/constants';

import RequestHospitalAccompaniment from '../services/HospitalAccompaniment/RequestHospitalAccompaniment';
interface Props {
  onBack: () => void;
  onNext: () => void;
}

const ServiceInfoMobile: React.FC<Props> = ({ onBack, onNext }) => {
  const dispatch = useAppDispatch();

  const form = useAppSelector((state) => state.reservationForm);

  const [showAddressModal, setShowAddressModal] = useState(false);

  const handleAddressSelect = (selected: string) => {
    handleChange('address', selected);
  };

  const handleChange = (field: string, value: string) => {
    dispatch(setField({ field: field as any, value }));
  };

  const renderLabel = (label: string, value: string) => (
    <label>
      {label}
      {value.trim() === '' && (
        <span className={styles.labelRequiredAsterisk}>*</span>
      )}
    </label>
  );

  console.log('Current Form State:', form);

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
            {renderLabel('보호자 성함', form.guardianName)}
            <input
              type="text"
              placeholder="홍길동"
              value={form.guardianName}
              onChange={(e) => handleChange('guardianName', e.target.value)}
            />
          </div>
          <div className={styles.inputGroup}>
            {renderLabel('보호자 연락처', form.guardianPhone)}
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
            {renderLabel('이용자 성함', form.userName)}
            <input
              type="text"
              placeholder="홍길동"
              value={form.userName}
              onChange={(e) => handleChange('userName', e.target.value)}
            />
          </div>
          <div className={styles.inputGroup}>
            {renderLabel('이용자 연락처', form.userPhone)}
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
            {renderLabel('상세 주소 입력', form.address)}
            <div className={styles.searchContainer}>
              <input
                type="text"
                placeholder="주소를 입력하세요."
                value={form.address}
                onClick={() => setShowAddressModal(true)}
                onChange={(e) => handleChange('address', e.target.value)}
              />
              <button type="button" onClick={() => setShowAddressModal(true)}>
                <CiSearch
                  className={styles.searchIcon}
                  color="white"
                  size={22}
                />
              </button>
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

      <div>
        {form.serviceName === SERVICE_NAMES.HOSPITAL_ACCOMPANIMENT && (
          <RequestHospitalAccompaniment />
        )}
      </div>

      {/* Modal */}
      <SearchAddress
        open={showAddressModal}
        onClose={() => setShowAddressModal(false)}
        onSelectAddress={handleAddressSelect}
      />

      {/* Bottom Bar */}
      <div>
        <MobileReservationDrawer />
      </div>
    </div>
  );
};

export default ServiceInfoMobile;
