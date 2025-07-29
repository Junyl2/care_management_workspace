import React from 'react';
import styles from './PromotionDiscount.module.css';

const PromotionDiscount = () => {
  return (
    <div className={styles.wrapper}>
      <div className="flex flex-col gap-2">
        <h2 className={styles.title}>프로모션 할인</h2>
        <p className={styles.note}>
          * 카카오채널 추가 및 리뷰 작성 후 고객센터로 문의해주세요. (중복할인
          불가)
        </p>
      </div>

      <div className={styles.radioGroup}>
        <label className={styles.radioItem}>
          <input
            type="radio"
            name="promotionDiscount"
            value="5"
            className={styles.radioInput}
          />
          5% 할인 (카카오채널 추가)
        </label>
        <label className={styles.radioItem}>
          <input
            type="radio"
            name="promotionDiscount"
            value="10"
            className={styles.radioInput}
          />
          10% 할인 (리뷰이벤트)
        </label>
      </div>
    </div>
  );
};

export default PromotionDiscount;
