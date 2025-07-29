'use client';

import React from 'react';
import styles from './MakeReservation.module.css';
import SelectService from './SelectService/SelectService';
import ReservationInformation from './ReservationInformation/ReservationInformation';
import SelectDateTimeDesktop from './desktop/SelectDateTime/SelectDateTimeDesktop';
import ServiceInfoDesktop from './desktop/ServiceInfo/ServiceInfoDesktop';
import PromotionDiscount from './desktop/PromotionDiscount/PromotionDiscount';

type Props = {
  isMobile: boolean;
  onNext?: () => void;
};

const MakeReservation: React.FC<Props> = ({ isMobile, onNext }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>예약하기</h1>
      <div className={styles.contentGrid}>
        <div className={styles.leftColumn}>
          <SelectService onNext={onNext} />
          {!isMobile && <SelectDateTimeDesktop />}
          {!isMobile && <ServiceInfoDesktop />}
          {!isMobile && <PromotionDiscount />}
        </div>
        <div className={styles.rightColumnSticky}>
          {!isMobile && <ReservationInformation />}
        </div>
      </div>

      {!isMobile && (
        <div className={styles.bottomBarContainer}>
          <div className={styles.bottomBar}>
            <p className={styles.bottomText}>
              약관 및 주문 내용을 확인했으며, 정보 제공 등에 동의합니다.
            </p>
            <button className={styles.reserveButton}>예약하기</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MakeReservation;
