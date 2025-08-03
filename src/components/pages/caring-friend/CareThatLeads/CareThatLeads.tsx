'use client';

import styles from './CareThatLeads.module.css';
import caring from '../styles.module.css';
import { Card, Button } from '@/components/ui';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Text } from '@components/ui';

export default function CareThatLeads() {
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
      <div className={styles.headerContainer}>
        <div className={styles.titleWrapper}>
          <Image
            src="/assets/images/caring/caring-friend/care-that-leads/care-leads.png"
            height={isMobileScreen ? 47 : isTabletScreen ? 58 : 67}
            width={isMobileScreen ? 74 : isTabletScreen ? 85 : 107}
            alt="Clouds"
            className="object-contain"
          />
          <h1 className={caring.mainHeader}>
            어르신의 회복을 이끄는 돌봄, <br />{' '}
            <span className={caring.highlight}> 돌봄친구와 </span>
            시작해보세요.
          </h1>
        </div>
        <Button
          variant="primary"
          size="sm"
          radius="full"
          fullWidth={false}
          width={isMobileScreen ? '200px' : isTabletScreen ? '240px' : '250px'}
          className={styles.hideMobile}
        >
          바로 예약하기
        </Button>
      </div>
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
                돌봄친구 인터뷰
              </Text>
            </Card.Header>
            <Card.Content className={styles.content}>
              <Card.Text className={styles.cardBody}>
                <strong>
                  {' '}
                  “어르신이 혼자 걷게 되는 날까지, {isMobileScreen && (
                    <br />
                  )}{' '}
                  매일 조금씩 함께 합니다.{' '}
                </strong>{' '}
                <br /> 매일 같은 시간, 익숙한 얼굴과 함께 조금씩, 천천히 몸을
                움직이는 시간. 어르신이 스스로 더 많이, 더 편하게 움직이실 수
                있도록 돌봄대장은 오늘도 곁에서 함께합니다.”
              </Card.Text>
              <div className={styles.signatureContainer}>
                <Card.Text className={styles.text}>
                  돌봄대장 대표 윤나래
                </Card.Text>
                <Image
                  src="/assets/images/caring/caring-friend/care-that-leads/signature.png"
                  alt="signature"
                  height={isMobileScreen ? 87 : isTabletScreen ? 135 : 136}
                  width={isMobileScreen ? 87 : isTabletScreen ? 135 : 136}
                  className={styles.signature}
                />
              </div>
            </Card.Content>
          </Card>
          <div className="flex flex-col  items-center justify-center space-y-8 ">
            <div className={styles.imageWrapper}></div>
          </div>
          {(isMobileScreen || isTabletScreen) && (
            /*  <Image
              src="/assets/images/caring/caring-friend/care-that-leads/photogrid.png"
              alt="Team"
              height={100}
              width={100}
            /> */
            <div className={styles.photoGridWrapper}>
              <div className={styles.photoGrid}></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
