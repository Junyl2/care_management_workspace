'use client';

import React from 'react';
import styles from './ProblemSolving.module.css';
import about from '../About.module.css';
import { Card } from '@/components/ui';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export const ProblemSolving = () => {
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

  const details = [
    {
      image: '/assets/images/about/icons/check.png',
      title: '노노케어',
      description:
        '건강한 시니어가 이웃 어르신을 돌보는 대한노인회 기반의 시니어-시니어 돌봄 구조',
      height: isMobileScreen ? 44 : isTabletScreen ? 80 : 107,
      width: isMobileScreen ? 46 : isTabletScreen ? 83 : 112,
    },
    {
      image: '/assets/images/about/icons/Locations.png',
      title: '지역 돌봄센터 연계',
      description:
        '전국 80여 개 돌봄기관과 협력하여 지역 기반 매칭 시스템 구축',
      width: isMobileScreen ? 39 : isTabletScreen ? 64 : 86,
      height: isMobileScreen ? 48 : isTabletScreen ? 80 : 107,
    },
    {
      image: '/assets/images/about/icons/pp.png',
      title: '중장년 돌봄전담 일자리',
      description:
        '40~50대 중장년층을 돌봄친구로 채용하고 정규직 기반 일자리 구조 운영',
      width: isMobileScreen ? 39 : isTabletScreen ? 80 : 124,
      height: isMobileScreen ? 41 : isTabletScreen ? 80 : 109,
    },
    {
      image: '/assets/images/about/icons/Arrow.png',
      title: '다문화·외국인 돌봄인력 대비',
      description:
        '미래를 위한 교육 시스템을 선제적으로 마련하여 지속 가능한 인력 확보 체계 구축 중',
      width: isMobileScreen ? 43 : isTabletScreen ? 81 : 109,
      height: isMobileScreen ? 44 : isTabletScreen ? 81 : 110,
    },
  ];
  return (
    <main className="flex flex-col items-center justify-center">
      <section className={styles.container}>
        <div className={`container  ${styles.heading}`}>
          <h3 className={about.heading}>문제 해결</h3>
          <h2 className={about.subHeading}>
            사람과 지역을 연결하는 돌봄 네트워크 구축을 통해 풀어갑니다.
          </h2>
        </div>
        <div
          className={`grid md:grid-cols-4 lg:grid-cols-4 gap-2 grid-cols-1 ${styles.spacing}`}
        >
          {details.map((list, index) => (
            <Card key={index} className={styles.cardContainer}>
              <div>
                <Image
                  src={list.image}
                  alt={list.title}
                  height={list.height}
                  width={list.width}
                  className={
                    isMobileScreen ? 'object-contain' : 'object-contain'
                  }
                />
              </div>
              <div className={styles.descriptionWrapper}>
                <Card.Title className={styles.title}>{list.title}</Card.Title>
                <Card.Text className={styles.description}>
                  {list.description}
                </Card.Text>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
};
