'use client';

import HeroWrapper from './HeroWrapper';
import styles from './AboutHero.module.css';

const AboutHero = () => {
  return (
    <HeroWrapper
      backgroundImage="/images/banners/home-hero.jpg"
      className={styles.customAboutHero}
    >
      <div className={styles.content}>
        <h1 className={styles.title}>살던 곳에서, 편리한 노후</h1>
        <p className={styles.subtitle}>
          집에서 생활하는 시니어에게 일상 생활에 필요한 모든 것을 연결해주는
          생활편의 서비스를 제공합니다.
        </p>
      </div>
    </HeroWrapper>
  );
};

export default AboutHero;
