'use client';
import styles from './Journey.module.css';
import about from '../About.module.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Card } from '@/components/ui';

export const Journey = () => {
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

  const signList = [
    {
      label: '유아',
      width: isMobileScreen ? 46 : isTabletScreen ? 57 : 58.4,
      height: isMobileScreen ? 34 : isTabletScreen ? 43 : 44.4,
    },
    {
      label: '아동',
      width: isMobileScreen ? 60 : isTabletScreen ? 74 : 75.4,
      height: isMobileScreen ? 78 : isTabletScreen ? 96 : 97.48,
    },
    {
      label: '청소년기',
      width: isMobileScreen ? 70 : isTabletScreen ? 88 : 88.4,
      height: isMobileScreen ? 62 : isTabletScreen ? 78 : 78.48,
    },
    {
      label: '임산부',
      width: isMobileScreen ? 31 : isTabletScreen ? 39 : 39.4,
      height: isMobileScreen ? 76 : isTabletScreen ? 104 : 104.48,
    },
    {
      label: '장애인',
      width: isMobileScreen ? 52 : isTabletScreen ? 80 : 81,
      height: isMobileScreen ? 65 : isTabletScreen ? 80 : 81,
    },
    {
      label: '고령자',
      width: isMobileScreen ? 62 : isTabletScreen ? 78 : 79.2,
      height: isMobileScreen ? 68 : isTabletScreen ? 86 : 87.2,
    },
  ];
  return (
    <main className={styles.container}>
      <section className={styles.sectionContainer}>
        <div className={styles.headerWrapper}>
          <h3 className={about.heading}>목표</h3>
          <h1 className={about.subHeading}>
            유아부터 고령자까지, 삶을 잇는 통합 서비스를 실현합니다.
          </h1>
        </div>
        <div className={styles.mainContent}>
          <div className={styles.headerContent}>
            <Image
              src="/assets/images/about/icons/plus.png"
              alt="plus logo"
              width={isMobileScreen ? 165 : isTabletScreen ? 248 : 250}
              height={isMobileScreen ? 126 : isTabletScreen ? 190 : 192}
              className="object-cover"
            />
            <p>
              유아부터 고령자, 장애인까지 모두를 아우르는통합돌봄을 위한 동반자
              돌봄 서비스를 실현합니다.
            </p>
          </div>
          <div
            className={`grid grid-cols-3 md:grid-cols-6 ${styles.cardContainer}`}
          >
            {signList.map((list, index) => (
              <Card
                key={list.label}
                variant="clean"
                className={styles.cardWrapper}
              >
                <div className={styles.signImage}>
                  <Image
                    src={`/assets/images/about/icons/${index + 1}.png`}
                    alt={list.label}
                    width={list.width}
                    height={list.height}
                    className="object-contain"
                  />
                </div>
                <Card.Text>{list.label}</Card.Text>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
