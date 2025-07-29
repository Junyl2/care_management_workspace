'use client';

import React from 'react';
import { BaseModal } from './BaseModal';
import styles from './SeasonTickets.module.css';

interface SeasonTicketsProps {
  open: boolean;
  onClose: () => void;
}

const SeasonTickets: React.FC<SeasonTicketsProps> = ({ open, onClose }) => {
  return (
    <BaseModal open={open} onClose={onClose}>
      <div className={styles.container}>
        <h2 className={styles.title}>정기권 구매 안내</h2>

        <p className={styles.paragraph}>
          정기권 구매 시 결제 후 상담사가 5분 이내로
          <span>전화 연결하여 서비스 사용을 안내해드립니다.</span>
        </p>

        <p className={styles.notice}>
          *추후 정기권 이용 시 중증의 경우 비용이 추가될 수 있습니다.
        </p>

        <button className={styles.confirmBtn} onClick={onClose}>
          확인
        </button>
      </div>
    </BaseModal>
  );
};

export default SeasonTickets;
