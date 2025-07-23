'use client';
import React from 'react';
import styles from './About.module.css';
import { Card, Button } from '@/components/ui';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Text } from '@components/ui';
export const About = () => {
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
    <section className="container">
      <div className={styles.flexCenter}>
        <div
          className={`${styles.aboutContainer} grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8`}
        >
          <Card
            variant="clean"
            className={`${styles.maxHeight} space-y-6`}
            radius="no-radius"
            padding="none"
          >
            <Card.Header className="space-y-4">
              <Text as="p" variant="body" className="primaryColor">
                회사 소개
              </Text>
              <Card.Title className={styles.cardTitle}>
                당신의 집에서 가장 가까운 돌봄
              </Card.Title>
            </Card.Header>
            <Card.Content className={styles.content}>
              <Card.Text className={styles.cardBody}>
                우리는 돌봄인력 부족이라는 사회적 문제를 해결하여 어르신이 살던
                곳에서 존엄한 노후를 보내실 수 있도록 돕습니다. 이것이 우리가
                추구하는입니다.
              </Card.Text>
              <div className={styles.signatureContainer}>
                <Card.Text className={styles.text}>
                  돌봄대장 대표 윤나래
                </Card.Text>
                <Image
                  src="/assets/images/signature.png"
                  alt="signature"
                  height={isMobileScreen ? 87 : isTabletScreen ? 135 : 136}
                  width={isMobileScreen ? 87 : isTabletScreen ? 135 : 136}
                  className={styles.signature}
                />
              </div>
            </Card.Content>
            <Card.Action className={styles.hideMobile}>
              <Link href="/services">
                <Button
                  variant="primary"
                  size="md"
                  radius="full"
                  fullWidth={false}
                  width="200px"
                  className={styles.hideMobile}
                >
                  회사소개
                </Button>
              </Link>
            </Card.Action>
          </Card>
          <div className="flex flex-col  items-center justify-center space-y-8 ">
            <div className={styles.imageWrapper}></div>
            <Link href="/services">
              <Button
                variant="primary"
                size="md"
                radius="full"
                fullWidth={false}
                width="200px"
                className={styles.buttonMobile}
              >
                회사소개
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
