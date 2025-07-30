'use client';

import React, { useState } from 'react';
import styles from './ServiceInfoDesktop.module.css';
import { CiSearch } from 'react-icons/ci';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setField } from '@/store/features/reservationFormSlice';
import { SearchAddress } from '@/components/ui/Modal/SearchAddress';

// Import constants and conditional service components
import { SERVICE_NAMES } from '@/lib/constants';
import RequestHospitalAccompaniment from '../../mobile/services/HospitalAccompaniment/RequestHospitalAccompaniment';

const ServiceInfoDesktop: React.FC = () => {
  const dispatch = useAppDispatch();
  const values = useAppSelector((state) => state.reservationForm);

  const [showAddressModal, setShowAddressModal] = useState(false);

  const handleChange = (field: keyof typeof values, value: string) => {
    dispatch(setField({ field, value }));
  };

  const handleAddressSelect = (selected: string) => {
    handleChange('address', selected);
  };

  const isEmpty = (val: string | undefined) => !val?.trim();

  return (
    <>
      <div className={styles.wrapper}>
        <h2 className={styles.header}>서비스 정보</h2>

        <div className={styles.formGrid}>
          <div className={styles.formGroup}>
            <label>
              보호자 성함
              {isEmpty(values.guardianName) && (
                <span className={styles.required}> *</span>
              )}
            </label>
            <input
              type="text"
              placeholder="홍길동"
              value={values.guardianName}
              onChange={(e) => handleChange('guardianName', e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label>
              보호자 연락처
              {isEmpty(values.guardianPhone) && (
                <span className={styles.required}> *</span>
              )}
            </label>
            <input
              type="text"
              placeholder="01012345678"
              value={values.guardianPhone}
              onChange={(e) => handleChange('guardianPhone', e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label>
              이용자 성함
              {isEmpty(values.userName) && (
                <span className={styles.required}> *</span>
              )}
            </label>
            <input
              type="text"
              placeholder="홍길동"
              value={values.userName}
              onChange={(e) => handleChange('userName', e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label>
              이용자 연락처
              {isEmpty(values.userPhone) && (
                <span className={styles.required}> *</span>
              )}
            </label>
            <input
              type="text"
              placeholder="01012345678"
              value={values.userPhone}
              onChange={(e) => handleChange('userPhone', e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label>
              서비스 날짜
              {isEmpty(values.serviceDate) && (
                <span className={styles.required}> *</span>
              )}
            </label>
            <input
              type="text"
              placeholder="2025년 6월 30일"
              value={values.serviceDate}
              onChange={(e) => handleChange('serviceDate', e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label>
              서비스 시간
              {isEmpty(values.serviceTime) && (
                <span className={styles.required}> *</span>
              )}
            </label>
            <input
              type="text"
              placeholder="08:00 ~ 11:00, 3시간"
              value={values.serviceTime}
              onChange={(e) => handleChange('serviceTime', e.target.value)}
            />
          </div>
        </div>

        <div className={styles.addressSection}>
          <div className={styles.formGroup}>
            <label>
              자택 주소
              {isEmpty(values.address) && (
                <span className={styles.required}> *</span>
              )}
            </label>
            <div className={styles.searchContainer}>
              <input
                type="text"
                placeholder="주소를 입력하세요."
                value={values.address}
                readOnly
                onClick={() => setShowAddressModal(true)}
              />
              <button type="button" onClick={() => setShowAddressModal(true)}>
                <CiSearch className={styles.searchIcon} color="white" />
              </button>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label>상세 주소 입력</label>
            <input
              type="text"
              placeholder="상세 주소 입력"
              value={values.addressDetail}
              onChange={(e) => handleChange('addressDetail', e.target.value)}
            />
          </div>
        </div>

        {/* Conditional service-specific component */}
        {values.serviceName === SERVICE_NAMES.HOSPITAL_ACCOMPANIMENT && (
          <div className={styles.serviceComponent}>
            <RequestHospitalAccompaniment />
          </div>
        )}
      </div>

      {/* Modal */}
      <SearchAddress
        open={showAddressModal}
        onClose={() => setShowAddressModal(false)}
        onSelectAddress={handleAddressSelect}
      />
    </>
  );
};

export default ServiceInfoDesktop;
