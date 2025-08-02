'use client';
import React from 'react';
import styles from './StarRating.module.css';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  step: number;
  showNumber: boolean;
  variant?: string;
  clickable?: boolean;
  setStep?: (step: number) => void;
}
const StarRating = ({
  step = 0,
  showNumber = false,
  variant = '',
  clickable = false,
  setStep,
}: StarRatingProps) => {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className={cn(styles.starContainer)}>
      {stars.map((num) => (
        <div
          key={num}
          onClick={() =>
            clickable ? (num === step ? setStep?.(0) : setStep?.(num)) : null
          }
          className={
            clickable
              ? styles.starButton
              : styles.starButton + ' ' + styles.disabled
          }
        >
          <svg
            key={num}
            xmlns="http://www.w3.org/2000/svg"
            className={
              variant === 'formStyle'
                ? styles.starFormStyle
                : styles.starDefault
            }
            viewBox="0 0 24 24"
            fill={num <= step ? '#FFD400' : '#DBDDDF'}
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            />
          </svg>
        </div>
      ))}
      {showNumber && <span className={styles.ratingNumber}>{step}</span>}
    </div>
  );
};

export default StarRating;
