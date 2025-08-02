'use client';

import HeroWrapper from './HeroWrapper';
import styles from './HowToUseHero.module.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const AboutHero = () => {
  const [isMobileScreen, setIsMobileScreen] = useState<boolean>(false);
  const [isTabletScreen, setIsTabletScreen] = useState<boolean>(false);

  useEffect(() => {
    const checkScreen = () => {
      const width = window.innerWidth;
      setIsMobileScreen(width < 768);
      setIsTabletScreen(width >= 768 && width <= 1024);
    };

    checkScreen();

    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);
  return (
    <HeroWrapper
      noOverlay
      backgroundImage={
        isMobileScreen
          ? '/assets/images/how-to-use/mobile-hero.png'
          : isTabletScreen
            ? '/assets/images/how-to-use/tablet-hero.png'
            : '/assets/images/how-to-use/hero.png'
      }
      className={styles.customAboutHero}
    >
      <div className={` container ${styles.content}`}>
        <h1 className={styles.title}>이용 방법</h1>
        <p className={styles.subtitle}>
          원하는 일정과 상황에 맞춰 {isMobileScreen && <br />}
          돌봄친구를 연결해 드립니다.
        </p>
      </div>
    </HeroWrapper>
  );
};

export default AboutHero;
