'use client';

import { BaseModal } from './BaseModal';
import styles from './AlertTwoModal.module.css';

interface AlertTwoModalProps {
  open: boolean;
  onClose: () => void;
}

export const AlertTwoModal = ({ open, onClose }: AlertTwoModalProps) => {
  return (
    <BaseModal open={open} onClose={onClose} title="할인 이벤트 안내">
      <p className={styles.description}>
        이벤트 참여 시, 할인된 금액으로 예상 결제 금액이 우선 예약되며, 상담사
        확인 후 최종 결제 금액이 안내됩니다.
      </p>
      <p className={styles.note}>
        *상담사 안내 후 최종 결제 링크를 전송 드립니다.
      </p>
      <button className={styles.confirmBtn} onClick={onClose}>
        확인
      </button>
    </BaseModal>
  );
};
