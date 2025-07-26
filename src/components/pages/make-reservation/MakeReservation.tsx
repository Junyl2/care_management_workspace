import React from 'react';
import styles from './MakeReservation.module.css';
import SelectService from './SelectService/SelectService';
import ReservationInformation from './ReservationInformation/ReservationInformation';

const MakeReservation: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.header}>예약하기</h1>
        <div className={styles.contentGrid}>
          <SelectService />
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
    </>
  );
};

export default MakeReservation;
