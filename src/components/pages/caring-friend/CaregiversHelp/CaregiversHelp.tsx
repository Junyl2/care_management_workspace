'use client';

import styles from './CaregiversHelp.module.css';
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
      <div className={styles.titleWrapper}>
        <Image
          src="/assets/images/caring/caring-friend/Heart.png"
          height={isMobileScreen ? 47 : isTabletScreen ? 58 : 67}
          width={isMobileScreen ? 74 : isTabletScreen ? 85 : 107}
          alt="Clouds"
          className="object-contain"
        />
        <h1 className={caring.mainHeader}>
          어르신의 일상을 회복하는 <br />{' '}
          <span className={caring.highlight}> 돌봄친구의</span> 모습들
        </h1>
      </div>
      <div className={styles.backgroundImage}></div>

      {isMobileScreen && (
        <div className={styles.scrollWrapper}>
          <div className={styles.scrollTrack}>
            <Image
              src="/assets/images/caring/caring-friend/mobile-logos.png"
              alt="Scrolling Logos"
              width={400}
              height={50}
              className={styles.logoImage}
            />
            <Image
              src="/assets/images/caring/caring-friend/mobile-logos.png"
              alt="Scrolling Logos"
              width={400}
              height={50}
              className={styles.logoImage}
            />
          </div>
        </div>
      )}

      {isTabletScreen && (
        <div className={styles.scrollWrapper}>
          <div className={styles.scrollTrack}>
            <Image
              src="/assets/images/caring/caring-friend/tablet-logos.png"
              alt="Scrolling Logos"
              width={1000}
              height={93}
              className={styles.logoImage}
            />
            <Image
              src="/assets/images/caring/caring-friend/tablet-logos.png"
              alt="Scrolling Logos"
              width={1000}
              height={93}
              className={styles.logoImage}
            />
          </div>
        </div>
      )}

      {!isMobileScreen && !isTabletScreen && (
        <div className={styles.scrollWrapper}>
          <div className={styles.scrollTrack}>
            <Image
              src="/assets/images/caring/caring-friend/desktop-logos.png"
              alt="Scrolling Logos"
              width={2000}
              height={126}
              className={styles.logoImage}
            />
            <Image
              src="/assets/images/caring/caring-friend/desktop-logos.png"
              alt="Scrolling Logos"
              width={2000}
              height={126}
              className={styles.logoImage}
            />
          </div>
        </div>
      )}
    </section>
  );
}
