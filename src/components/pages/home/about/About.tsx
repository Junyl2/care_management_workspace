import React from 'react';
import styles from './About.module.css';
import { Card, Button } from '@/components/ui';
/* import Image from 'next/image'; */

export const About = () => {
  return (
    <section className="container">
      <div className={styles.flexCenter}>
        <div
          className={`${styles.aboutContainer} grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8`}
        >
          <Card
            variant="clean"
            className={`${styles.maxWidth} space-y-6`}
            radius="no-radius"
            padding="none"
          >
            <Card.Header className="space-y-4">
              <Card.Text className={styles.aboutUs}>회사 소개</Card.Text>
              <Card.Title className={styles.cardTitle}>
                당신의 집에서 가장 가까운 돌봄
              </Card.Title>
            </Card.Header>
            <Card.Content>
              <Card.Text className={styles.cardBody}>
                우리는 돌봄인력 부족이라는 사회적 문제를 해결하여 어르신이 살던
                곳에서 존엄한 노후를 보내실 수 있도록 돕습니다. 이것이 우리가
                추구하는입니다.
              </Card.Text>
              <Card.Text className={styles.cardFooter}>
                돌봄대장 대표 윤나래
              </Card.Text>
            </Card.Content>
            <Card.Action className={styles.hideMobile}>
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
            </Card.Action>
          </Card>
          <div className="flex flex-col  items-center justify-center space-y-8 ">
            <div className={styles.imageWrapper}></div>
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
          </div>
        </div>
      </div>
    </section>
  );
};
