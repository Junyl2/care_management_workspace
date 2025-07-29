'use client';
import React, { useState } from 'react';
import styles from './ReservationInformation.module.css';
import { FiChevronUp, FiChevronDown, FiAlertCircle } from 'react-icons/fi';

// Types for reservation data
interface ReservationData {
  service: string;
  date: string;
  time: string;
  amount: number;
  discountLabel?: string;
  discountAmount?: number;
  total: number;
}

const ReservationInformation: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);

  // Placeholder reservation data (will be replaced by API response)
  const [reservation] = useState<ReservationData>({
    service: '병원동행',
    date: '2025년 7월 12일',
    time: '11:00~13:30, 2시간 30분',
    amount: 50000,
    discountLabel: '리뷰이벤트 5%할인',
    discountAmount: 5000,
    total: 45000,
  });

  return (
    <div className={styles.container}>
      {/* Toggle for mobile view */}
      <div
        className={styles.mobileToggle}
        onClick={() => setShowDetails((prev) => !prev)}
      >
        <span>결제 내역 확인</span>
        {showDetails ? <FiChevronUp /> : <FiChevronDown />}
      </div>

      <div
        className={`${styles.reservationContent} ${
          showDetails ? styles.show : ''
        }`}
      >
        <h2 className={styles.title}>예약 정보</h2>

        {/* Reservation details */}
        <section className={styles.section}>
          <div className={styles.row}>
            <span className={styles.label}>이용 서비스:</span>
            <span className={styles.value}>{reservation.service}</span>
          </div>
          <div className={styles.row}>
            <span className={styles.label}>날짜:</span>
            <span className={styles.value}>{reservation.date}</span>
          </div>
          <div className={styles.row}>
            <span className={styles.label}>시간:</span>
            <span className={styles.value}>{reservation.time}</span>
          </div>
          <div className={styles.row}>
            <span className={styles.label}>예약 금액:</span>
            <span className={styles.value}>
              {reservation.amount.toLocaleString()}원
            </span>
          </div>
          {reservation.discountLabel && (
            <div className={styles.row}>
              <span className={`${styles.label} ${styles.discountLabel}`}>
                할인:
              </span>

              <span className={styles.discountText}>
                {reservation.discountLabel}
                {reservation.discountAmount !== undefined && (
                  <span className={styles.discountAmount}>
                    -{reservation.discountAmount.toLocaleString()}원
                  </span>
                )}
              </span>
            </div>
          )}
        </section>

        <hr className={styles.divider} />

        {/* Total */}
        <div className={styles.totalRow}>
          <span className={styles.label}>결제 금액:</span>
          <span className={styles.totalAmount}>
            {reservation.total.toLocaleString()}원
          </span>
        </div>

        {/* Notice Section */}
        <section className={styles.section}>
          <div className={styles.notice}>
            <FiAlertCircle size={60} className={styles.noticeIcon} />
            <p className={styles.noticeText}>
              예약 후 5분 이내에 전문 상담사가 아래 번호로 연락드려 맞춤형
              돌봄을 안내합니다. 상담 후 매칭이 확정되면 이용자 연락처로 결제
              링크를 보내드리며, 결제 완료 시 예약이 확정됩니다.
            </p>
          </div>
          <div className={styles.contact}>
            <p>
              <strong>대표 번호:</strong> 1588-2905
            </p>
            <p>
              <strong>상담 전용:</strong> 010-7790-2905
            </p>
          </div>
        </section>

        {/* Reservation button (no action yet) */}
        {/* <button className={styles.reserveButton}>예약하기</button> */}
      </div>
    </div>
  );
};

export default ReservationInformation;
