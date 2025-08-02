'use client';

import HeroWrapper from './HeroWrapper';
import styles from './CaringHero.module.css';
import { useState, useEffect } from 'react';

const AboutHero = () => {
  const [isMobileScreen, setIsMobileScreen] = useState<boolean>(false);
  const [isTabletScreen, setIsTabletScreen] = useState<boolean>(false);

  useEffect(() => {
    const checkScreen = () => {
      const width = window.innerWidth;
      setIsMobileScreen(width < 468);
      setIsTabletScreen(width >= 468 && width <= 1024);
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
          ? '/assets/images/caring/caring-friend/mobile.png'
          : isTabletScreen
            ? '/assets/images/caring/caring-friend/tablet.png'
            : '/assets/images/caring/caring-friend/desktop.png'
      }
      className={styles.customAboutHero}
    >
      <div className={` container ${styles.content}`}>
        {/*   <h1 className={styles.title}>돌봄친구</h1>
        <p className={styles.subtitle}>
          돌봄 공백 없이, 어르신의 일상에 꼭 맞는 <br />
          맞춤형 동반자를 연결합니다.
        </p> */}
      </div>
    </HeroWrapper>
  );
};

export default AboutHero;
