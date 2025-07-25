'use client';

import { useEffect } from 'react';
import { FiX } from 'react-icons/fi';
import styles from './AlertOneModal.module.css';

interface AlertOneModalProps {
  open: boolean;
  onClose: () => void;
}

export const AlertOneModal = ({ open, onClose }: AlertOneModalProps) => {
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
        {/* Close Button */}
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close"
        >
          <FiX size={22} />
        </button>

        {/* Modal Content */}
        <h2 className={styles.title}>정기권 구매 안내</h2>
        <p className={styles.description}>
          정기권 구매 시 결제 후 상담사가 5분 이내로 <br />
          전화 연결하여 서비스 사용을 안내해드립니다.
        </p>
        <p className={styles.note}>
          *추후 정기권 이용 시 중증의 경우 비용이 추가될 수 있습니다.
        </p>

        {/* Confirm Button */}
        <button className={styles.confirmBtn} onClick={onClose}>
          확인
        </button>
      </div>
    </div>
  );
};
