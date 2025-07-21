'use client';
import React from 'react';
import { Button } from '@/components/ui';
import styles from './CaregiverSection.module.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export const CaregiverSection = () => {
  const [isMobileScreen, setIsMobileScreen] = useState<boolean>(false);
  const [isTabletScreen, setIsTabletScreen] = useState<boolean>(false);

  useEffect(() => {
    const checkScreen = () => {
      const width = window.innerWidth;
      setIsMobileScreen(width < 768);
      setIsTabletScreen(width >= 768 && width <= 1200);
    };

    checkScreen();

    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  return (
    <div className={`container ${styles.caregiverContainer}`}>
      <div className={styles.headingWrapper}>
        <h1 className={styles.caregiverHeader}>
          특허받은 독자 기술로 구현된 돌봄 서비스,
          <span>
            신뢰브랜드 1위에 빛나는
            <span className={styles.span}>돌봄대장과</span>
            함께 하세요.
          </span>
        </h1>
      </div>
      <div className={styles.certificatesWrapper}>
        {/*  <div className={styles.certificate1}></div>
        <div className={styles.certificate2}></div> */}
        <Image
          src="/images/certificate1.png"
          alt="certificate"
          height={isMobileScreen ? 184 : isTabletScreen ? 400 : 614}
          width={isMobileScreen ? 130 : isTabletScreen ? 230 : 434}
        />
        <Image
          src="/images/certificate2.png"
          alt="certificate"
          height={isMobileScreen ? 184 : isTabletScreen ? 400 : 614}
          width={isMobileScreen ? 130 : isTabletScreen ? 230 : 434}
        />
        <Image
          src="/images/badge.png"
          alt="logo"
          height={isMobileScreen ? 51 : isTabletScreen ? 132 : 172}
          width={isMobileScreen ? 51 : isTabletScreen ? 132 : 172}
        />
      </div>

      <Button
        variant="primary"
        size={isMobileScreen ? 'sm' : 'md'}
        radius="full"
        width={isMobileScreen ? '140px' : '250px'}
      >
        회사 소개 보러가기
      </Button>
    </div>
  );
};
