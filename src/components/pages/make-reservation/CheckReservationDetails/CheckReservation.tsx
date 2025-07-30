'use client';

import React from 'react';
import styles from './CheckReservation.module.css';
import { FiChevronLeft } from 'react-icons/fi';

interface CheckReservationProps {
  onBack: () => void;
}

const CheckReservation: React.FC<CheckReservationProps> = ({ onBack }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button className={styles.backButton} onClick={onBack}>
          <FiChevronLeft size={34} className={styles.arrowLeft} />
        </button>
        <div className={styles.headerTitle}>
          <h2>예약하기</h2>
          <p>서비스 정보 입력</p>
        </div>
      </div>

      <section className={styles.section}>
        <h3>서비스 내용</h3>
        <div className={styles.row}>
          <p>이용 서비스:</p>
          <span>병원동행</span>
        </div>
        <div className={styles.row}>
          <p>서비스 날짜:</p>
          <span>2025년 7월 12일</span>
        </div>
        <div className={styles.row}>
          <p>서비스 이용 시간:</p>
          <span>11:00~13:30, 2시간 30분</span>
        </div>
      </section>

      <section className={styles.section}>
        <h3>이용자 및 보호자 정보</h3>
        <div className={styles.row}>
          <p>이용자 성함 및 연락처:</p>
          <span>홍길동, 010-0000-0000</span>
        </div>
        <div className={styles.row}>
          <p>보호자 성함 및 연락처:</p>
          <span>홍길동, 010-0000-0000</span>
        </div>
        <div className={styles.row}>
          <p>자택 주소:</p>
          <span>서울특별시 동대문구 망우로16길 20, 201호</span>
        </div>
      </section>

      <section className={styles.section}>
        <h3>서비스 요청 사항</h3>
        <div className={styles.row}>
          <p>서비스 요청 사항:</p>
          <span>병원이름, 진료과, 2025.00.00 15:00</span>
        </div>
        <div className={styles.row}>
          <p>중증 여부:</p>
          <span>중증 해당, 의료기기 필수, 직접 입력한 내용</span>
        </div>
        <div className={styles.row}>
          <p>추가 요청 사항:</p>
          <span>
            기저귀 착용, 기타 추가 요청 사항, 기타 추가 요청 사항 입력이
            들어갑니다.
          </span>
        </div>
      </section>

      <section className={styles.section}>
        <h3>예약 금액</h3>
        <div className={styles.row}>
          <p>예약 금액:</p>
          <span>50,000원</span>
        </div>
        <div className={styles.row}>
          <p>할인:</p>
          <span>리뷰이벤트 5%할인 -5,000원</span>
        </div>
      </section>

      <section className={styles.section}>
        <h3>수정하기</h3>
        <div className={styles.row}>
          <p>결제 금액:</p>
          <span>45,000원</span>
        </div>
        <p className={styles.infoText}>
          예약 후 5분 이내에 전문 상담사가 아래 번호로 연락드려 맞춤형 돌봄을
          안내합니다. 상담 후 매칭이 확정되면 이용자 연락처로 결제 링크를
          보내드리며, 결제 완료 시 예약이 확정됩니다.
        </p>
        <div className={styles.contact}>
          <p>대표 번호: 1588-2905</p>
          <p>상담 전용: 010-7301-8284</p>
        </div>
      </section>
    </div>
  );
};

export default CheckReservation;
