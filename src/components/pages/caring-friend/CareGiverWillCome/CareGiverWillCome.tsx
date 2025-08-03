'use client';

import styles from './CareGiverWillCome.module.css';
import caring from '../styles.module.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';
export default function CareGiverWillCome() {
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
    <section className={styles.section}>
      <div className={styles.mainContainer}>
        <div className={styles.headerContainer}>
          <Image
            src="/assets/images/caring/caring-friend/care-giver-come/icons.png"
            height={isMobileScreen ? 47 : isTabletScreen ? 58 : 67}
            width={isMobileScreen ? 74 : isTabletScreen ? 85 : 107}
            alt="Clouds"
            className="object-contain"
          />
          <h2 className={caring.mainHeader}>
            전국 어디서든 가까운 {isMobileScreen && <br />} 돌봄친구가
            찾아갑니다.
          </h2>
        </div>
      </div>
    </section>
  );
}
