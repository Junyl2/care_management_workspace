'use client';
import React, { useState, useEffect, useRef } from 'react';
import styles from './MobileReservationDrawer.module.css';
import ReservationInformation from '../../ReservationInformation/ReservationInformation';
import { BottomBarBase } from '@/components/ui';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

const MobileReservationDrawer: React.FC = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        setShowDrawer(false);
      }
    };

    if (showDrawer) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden'; // prevent background scroll
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [showDrawer]);

  return (
    <>
      {/* Sliding drawer with arrow */}
      <div
        ref={drawerRef}
        className={`${styles.drawerContainer} ${showDrawer ? styles.open : ''}`}
      >
        <div
          className={styles.arrowWrapper}
          onClick={() => setShowDrawer(false)}
        >
          <FiChevronDown className={styles.arrowDown} size={24} />
        </div>
        <ReservationInformation />
      </div>

      {/* Bottom bar fixed at bottom */}
      <BottomBarBase>
        <div
          className={styles.paymentInfoRow}
          onClick={() => setShowDrawer((prev) => !prev)}
        >
          <div className={styles.arrowStatic}>
            {!showDrawer && (
              <FiChevronUp size={20} className={styles.arrowIcon} />
            )}
          </div>
          {!showDrawer && <span>결제 내역 확인</span>}
          <button className={styles.button}>예약하기</button>
        </div>
      </BottomBarBase>
    </>
  );
};

export default MobileReservationDrawer;
