'use client';

import CustomerReviewHeroSection from '@/components/sections/customer-review/CustomerReviewHeroSection';
import React, { useState } from 'react';
import styles from './page.module.css';
import ReviewForm from '@/components/pages/customer-reviews/write/ReviewForm';
import { reviewFormInput } from '@/types/reviews';

export default function WriteReviewPage() {
  const [reviewFormData, setReviewFormData] = useState<reviewFormInput>({
    rating: 0,
    author_name: '',
    service_used: '',
    review: '',
    review_images: [],
  });
  return (
    <main className={styles.page}>
      <CustomerReviewHeroSection />
      <div className={styles.titleContainer}>
        <p className={styles.title}>리뷰 작성</p>
        <p>
          고객님의 소중한 의견은 돌봄대장 서비스에 도움이 됩니다.
          <br />
          리뷰 작성 시 10% 할인 혜택도 함께 받아보세요.
        </p>
      </div>
      <ReviewForm
        reviewFormData={reviewFormData}
        setReviewFormData={setReviewFormData}
      />
    </main>
  );
}
