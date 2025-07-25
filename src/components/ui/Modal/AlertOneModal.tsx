'use client';

import { BaseModal } from './BaseModal';
import styles from './AlertOneModal.module.css';

interface AlertOneModalProps {
  open: boolean;
  onClose: () => void;
}

export const AlertOneModal = ({ open, onClose }: AlertOneModalProps) => {
  return (
    <BaseModal open={open} onClose={onClose} title="정기권 구매 안내">
      <p className={styles.description}>
        정기권 구매 시 결제 후 상담사가 5분 이내로 <br />
        전화 연결하여 서비스 사용을 안내해드립니다.
      </p>
      <p className={styles.note}>
        *추후 정기권 이용 시 중증의 경우 비용이 추가될 수 있습니다.
      </p>
      <button className={styles.confirmBtn} onClick={onClose}>
        확인
      </button>
    </BaseModal>
  );
};
