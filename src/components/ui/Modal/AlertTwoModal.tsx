'use client';

import { useEffect } from 'react';
import { FiX } from 'react-icons/fi';
import styles from './AlertTwoModal.module.css';

interface AlertTwoModalProps {
  open: boolean;
  onClose: () => void;
}

export const AlertTwoModal = ({ open, onClose }: AlertTwoModalProps) => {
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          <FiX size={22} />
        </button>

        <h2 className={styles.title}>할인 이벤트 안내</h2>
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
      </div>
    </div>
  );
};
