'use client';

import React from 'react';
import styles from './MakeReservation.module.css';
import SelectService from './SelectService/SelectService';
import ReservationInformation from './ReservationInformation/ReservationInformation';
import SelectDateTimeDesktop from './desktop/SelectDateTime/SelectDateTimeDesktop';
import ServiceInfoDesktop from './desktop/ServiceInfo/ServiceInfoDesktop';
import PromotionDiscount from './desktop/PromotionDiscount/PromotionDiscount';
import CostDetailsDesktop from './desktop/CostDetailsDesktop/CostDetailsDesktop';
import { useAppSelector } from '@/store/hooks';

const MakeReservation: React.FC = () => {
  const { serviceName, serviceDate, serviceTime } = useAppSelector(
    (state) => state.reservationForm
  );

  const isFormValid = serviceName && serviceDate && serviceTime;

  /*  const serviceName = useAppSelector(
    (state) => state.reservationForm.serviceName
  ); */

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>예약하기</h1>
      <div className={styles.contentGrid}>
        <div className={styles.leftColumn}>
          <SelectService />
          <SelectDateTimeDesktop />
          <PromotionDiscount />
          <ServiceInfoDesktop />
          {isFormValid && <CostDetailsDesktop serviceName={serviceName} />}
        </div>

        <div className={styles.rightColumnSticky}>
          <ReservationInformation />
        </div>
      </div>

      <div className={styles.bottomBarContainer}>
        <div className={styles.bottomBar}>
          <p className={styles.bottomText}>
            약관 및 주문 내용을 확인했으며, 정보 제공 등에 동의합니다.
          </p>
          <button className={styles.reserveButton}>예약하기</button>
        </div>
      </div>
    </div>
  );
};

export default MakeReservation;
