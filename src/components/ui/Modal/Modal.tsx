import React, { useEffect } from 'react';
import styles from './NewModal.module.css';
import CloseIcon from '../../../../public/assets/icons/close_icon.svg';
import Image from 'next/image';
const Modal = ({
  isOpen,
  onClose,
  children,
  showCloseButton = true,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  showCloseButton: boolean;
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: Event) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={() => handleOverlayClick}>
      <div className={styles.modal}>
        {showCloseButton && (
          <button
            className={styles.closeButton}
            onClick={onClose}
            onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
              (e.target as HTMLButtonElement).style.backgroundColor = '#f3f4f6';
              (e.target as HTMLButtonElement).style.color = '#000';
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
              (e.target as HTMLButtonElement).style.backgroundColor =
                'transparent';
              (e.target as HTMLButtonElement).style.color = '#666';
            }}
          >
            <Image src={CloseIcon} alt="close" width={17} height={17} />
          </button>
        )}
        {children}
      </div>
    </div>
  );
};

export default Modal;
