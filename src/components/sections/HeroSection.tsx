'use client';

import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <div className="container">
          <div className={styles.content}>
            <h1 className={styles.title}>살던 곳에서, 편리한 노후</h1>
            <p className={styles.subtitle}>
              집에서 생활하는 시니어에게 일상 생활에 필요한 모든 것을 연결해주는
              생활편의 서비스를 제공합니다.
            </p>
            <div className={styles.buttons}>
              <button className={styles.btnPrimary}>예약하기</button>
              <button className={styles.btnSecondary}>회사소개</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
