'use client';

import React, { useEffect } from 'react';
import styles from './ConfirmationMobile.module.css';
import { FiCheckCircle } from 'react-icons/fi';

interface Props {
  onReset: () => void;
}

const ConfirmationMobile: React.FC<Props> = ({ onReset }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.iconWrapper}>
        <FiCheckCircle size={72} className={styles.icon} />
      </div>
      <h2 className={styles.title}>예약이 완료되었습니다!</h2>
      <p className={styles.description}>
        담당자가 곧 연락을 드릴 예정입니다. 이용해주셔서 감사합니다.
      </p>
      <button className={styles.backButton} onClick={onReset}>
        홈으로 돌아가기
      </button>
    </div>
  );
};

export default ConfirmationMobile;
