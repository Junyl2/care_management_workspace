'use client';

import { Text, Button, Card } from '@components/ui';
import styles from './Caring.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';
export const Caring = () => {
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

  interface Qualifications {
    title?: string;
    position?: string;
    image?: string;
  }

  const qualificationList: Qualifications[] = [
    {
      title: '자격증',
      position: '요양보호사/간병인',
      image: '/assets/images/caring/qual1.png',
    },
    {
      title: '건강검진',
      position: '전염성 질환 무',
      image: '/asstes/images/caring/qual2.png',
    },
    {
      title: '신원확인',
      position: '본인 인증 완료',
      image: '/assets/images/caring/qual3.png',
    },
  ];

  const employeeProfile: Qualifications[] = [
    {
      image: '/assets/images/caring',
    },
    {
      image: '/assets/images/caring',
    },
    {
      image: '/assets/images/caring',
    },
    {
      image: '/assets/images/caring',
    },
    {
      image: '/assets/images/caring',
    },
  ];

  return (
    <section className={`container ${styles.mainContainer}`}>
      <div className={`container ${styles.heading}`}>
        <div>
          <Text variant="body" as="p" className={styles.primaryColor}>
            돌봄 친구
          </Text>

          <Text variant="subHeading" as="h2">
            당신의 집에서 가장 가까운 돌봄 친구가 찾아갑니다
          </Text>
        </div>

        <div className="container flex items-center justify-center space-x-4">
          <Button variant="primary" radius="full" width="240px">
            더 알아보기
          </Button>
          <Button variant="secondary" radius="full" width="240px">
            예약하기
          </Button>
        </div>
      </div>

      <div className="container flex items-center flex-col justify-center gap-4">
        <div className={styles.subHeading}>
          <Text variant="subHeading" as="h3">
            케어 안심 센터
          </Text>
          <Text variant="subHeading" as="h3" className={styles.subTitle}>
            연중무휴 24시간 상담
          </Text>
        </div>

        <Text variant="subHeading" as="h2" className={styles.contact}>
          1588-2905
        </Text>
      </div>

      <div className=" flex items-center justify-center gap-4">
        {qualificationList.map((list, index) => (
          <Card key={list.title} className={styles.cardWrapper}>
            <Image
              src={`/assets/images/caring/qual${index + 1}.png`}
              alt={list.title ?? 'qualification'}
              height={isMobileScreen ? 32 : isTabletScreen ? 50 : 60}
              width={isMobileScreen ? 32 : isTabletScreen ? 50 : 66}
              className={styles.image}
            />
            <div className="flex flex-col gap-2">
              <Card.Title className={styles.cardTitle}>{list.title}</Card.Title>
              <Card.Text className={styles.cardText}>{list.position}</Card.Text>
            </div>
          </Card>
        ))}
      </div>

      {/* employee */}
      {!isMobileScreen && (
        <div className="grid grid-cols-5 gap-4">
          {employeeProfile.map((list, index) => (
            <div className={styles.imageWrapper} key={index}>
              <Image
                src={`${list.image}/${index + 1}.png`}
                alt="Employee"
                fill
                /*   width={126}
            height={171} */
                className={styles.employeeProfile}
              />
            </div>
          ))}
        </div>
      )}

      {isMobileScreen && (
        <div className={styles.container}>
          {/* First row: 2 centered employee images */}
          <div className={styles.firstRow}>
            {employeeProfile.slice(0, 2).map((list, index) => (
              <div className={styles.imageWrapper} key={index}>
                <Image
                  src={`${list.image}/${index + 1}.png`}
                  alt="Employee"
                  fill
                  className={styles.employeeProfile}
                />
              </div>
            ))}
          </div>

          {/* Second row: 3 full-width employee images */}
          <div className={styles.secondRow}>
            {employeeProfile.slice(2, 5).map((list, index) => (
              <div className={styles.imageWrapper} key={index + 2}>
                <Image
                  src={`${list.image}/${index + 3}.png`}
                  alt="Employee"
                  fill
                  className={styles.employeeProfile}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
