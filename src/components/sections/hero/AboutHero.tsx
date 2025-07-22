'use client';

import HeroWrapper from './HeroWrapper';
import styles from './AboutHero.module.css';
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
      backgroundImage="/assets/images/banners/about-hero.png"
      className={styles.customAboutHero}
    >
      <div className={styles.content}>
        <Image
          src="/assets/images/about/brand.png"
          alt="Brand Name"
          height={isMobileScreen ? 73 : 147}
          width={isMobileScreen ? 77 : 154}
          className="object-contain"
        />
        <h1 className={styles.title}>회사소개</h1>
        <p className={styles.subtitle}>
          도움이 필요한 순간, 사람을 연결합니다.
        </p>
      </div>
    </HeroWrapper>
  );
};

export default AboutHero;
