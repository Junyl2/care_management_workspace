'use client';

import { Text, Button, Card } from '@components/ui';
import styles from './Caring.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';
export const Caring = () => {
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobileOpen(window.innerWidth < 768);
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
      image: '/images/caring/qual1.png',
    },
    {
      title: '건강검진',
      position: '전염성 질환 무',
      image: '/images/caring/qual2.png',
    },
    {
      title: '신원확인',
      position: '본인 인증 완료',
      image: '/images/caring/qual3.png',
    },
  ];

  const employeeProfile: Qualifications[] = [
    {
      image: '/images/caring',
    },
    {
      image: '/images/caring',
    },
    {
      image: '/images/caring',
    },
    {
      image: '/images/caring',
    },
    {
      image: '/images/caring',
    },
  ];

  return (
    <section className="container flex flex-col items-center justify-center gap-8">
      <div className="container flex flex-col items-center justify-center gap-6">
        <Text variant="body" as="p" className={styles.primaryColor}>
          돌봄 친구
        </Text>

        <Text variant="subHeading" as="h2">
          당신의 집에서 가장 가까운 돌봄 친구가 찾아갑니다
        </Text>
        <div className="container flex items-center justify-center space-x-4">
          <Button variant="primary" radius="full" width="240px">
            더 알아보기
          </Button>
          <Button variant="secondary" radius="full" width="240px">
            예약하기
          </Button>
        </div>
      </div>

      <div className="container flex items-center flex-col justify-center">
        <Text variant="subHeading" as="h3">
          {' '}
          케어 안심 센터
        </Text>
        <Text variant="subHeading" as="h3" className={styles.subTitle}>
          {' '}
          연중무휴 24시간 상담
        </Text>
        <Text variant="subHeading" as="h2" className={styles.subHeading}>
          {' '}
          1588-2905
        </Text>
      </div>

      <div className=" flex items-center justify-center gap-4">
        {qualificationList.map((list, index) => (
          <Card key={list.title} className={styles.cardWrapper}>
            <Image
              src={`/images/caring/qual${index + 1}.png`}
              alt={list.title ?? 'qualification'}
              height={isMobileOpen ? 32 : 37}
              width={isMobileOpen ? 32 : 37}
              className={styles.image}
            />
            <Card.Content>
              <div className="flex flex-col">
                <Card.Title className={styles.cardTitle}>
                  {list.title}
                </Card.Title>
                <Card.Text className={styles.cardText}>
                  {list.position}
                </Card.Text>
              </div>
            </Card.Content>
          </Card>
        ))}
      </div>

      {/* employee */}
      <div className="container grid md:grid-cols-5 grid-cols-3 gap-4">
        {employeeProfile.map((list, index) => (
          <div className={styles.imageWrapper}>
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
    </section>
  );
};
