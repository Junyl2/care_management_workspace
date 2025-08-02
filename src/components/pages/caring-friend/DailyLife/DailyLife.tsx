'use client';

import styles from './DailyLife.module.css';
import caring from '../styles.module.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function DailyLife() {
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
      <div className={`container ${styles.container}`}>
        <h1 className={caring.mainHeader}>
          {' '}
          돌봄친구와 함께하는 81세 할아버지 일상{' '}
        </h1>
        <div className={styles.subContainer}>
          {/* first card */}
          <div className={styles.firstCard}>
            <Image
              src={
                isMobileScreen
                  ? '/assets/images/caring/caring-friend/daily-life/mobile-grandpa1.png'
                  : isTabletScreen
                    ? '/assets/images/caring/caring-friend/daily-life/tablet-grandpa-1.png'
                    : '/assets/images/caring/caring-friend/daily-life/grandpa1.png'
              }
              alt="Grandpa"
              height={isMobileScreen ? 160 : isTabletScreen ? 181 : 250}
              width={isMobileScreen ? 126 : isTabletScreen ? 181 : 250}
              className="object-contain"
            />
            <div className={styles.content}>
              <h2 className={styles.label}> 사고 당시</h2>
              <p>
                일반상태: 81세, 독거 6년 <br />
                주요질병: 영양부족, 저혈당 쇼크
                <br />
                사고발생: 낙상에 의한 뇌출혈
              </p>
            </div>
            {/* absolute arrow indicator */}
            <div className={styles.absoluteArrow}>
              <Image
                src="/assets/images/caring/caring-friend/daily-life/curve-arrow.png"
                alt="Next arrow"
                height={58}
                width={50}
                className="object-contain"
              />
            </div>
          </div>
          {/* second card */}
          <div className={styles.secondCard}>
            <Image
              src={
                isMobileScreen
                  ? '/assets/images/caring/caring-friend/daily-life/mobile-grandpa2.png'
                  : isTabletScreen
                    ? '/assets/images/caring/caring-friend/daily-life/tablet-grandpa-2.png'
                    : '/assets/images/caring/caring-friend/daily-life/grandpa2.png'
              }
              alt="Grandpa"
              height={isMobileScreen ? 160 : isTabletScreen ? 181 : 250}
              width={isMobileScreen ? 126 : isTabletScreen ? 363 : 500}
              className="object-contain"
            />
          </div>
          {/* third card */}
          <div className={styles.thirdCard}>
            <Image
              src={
                isMobileScreen
                  ? '/assets/images/caring/caring-friend/daily-life/mobile-grandpa3.png'
                  : isTabletScreen
                    ? '/assets/images/caring/caring-friend/daily-life/tablet-grandpa-3.png'
                    : '/assets/images/caring/caring-friend/daily-life/grandpa3.png'
              }
              alt="Grandpa"
              height={isMobileScreen ? 160 : isTabletScreen ? 181 : 250}
              width={isMobileScreen ? 126 : isTabletScreen ? 478 : 658}
              className="object-contain"
            />
          </div>
        </div>
        <div className={styles.thirdContainer}> bottom card 2</div>
      </div>
    </section>
  );
}
