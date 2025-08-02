import ReviewCard from '@/components/pages/customer-reviews/ReviewCard';
import React from 'react';
import styles from './ReviewGridSection.module.css';

export default function ReviewGridSection() {
  return (
    <div className={styles.grid}>
      {Array.from({ length: 10 }).map((_, index) => (
        <ReviewCard
          key={index}
          serviceType="운동도움"
          user="김철수"
          rating={5}
          age={70}
          location="부산"
          contentTop="병원동행 서비스 만족도 높음"
          contentBottom="병원동행 서비스 만족도 높음"
          gender="male"
        />
      ))}
    </div>
  );
}
