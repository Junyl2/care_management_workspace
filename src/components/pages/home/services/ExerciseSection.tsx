'use client';

import HeroWrapper from '../../../sections/hero/HeroWrapper';
import styles from './ExerciseSection.module.css';
import { Button } from '@components/ui';

const ExerciseSection = () => {
  return (
    <HeroWrapper
      backgroundImage="/images/services/exercise.png"
      className={styles.customHomeHero}
    >
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <h1 className={styles.title}>살던 곳에서, 편리한 노후</h1>
          <p className={styles.subtitle}>
            집에서 생활하는 시니어에게 일상 생활에 필요한 모든 것을 연결해주는
            생활편의 서비스를 제공합니다.
          </p>
          <div className={styles.buttons}>
            <Button
              variant="primary"
              size="md"
              radius="full"
              fullWidth={false}
              className={styles.homeButtonWH}
            >
              예약하기
            </Button>
            <Button
              variant="secondary"
              size="md"
              radius="full"
              fullWidth={false}
              className={styles.homeButtonWH}
            >
              회사소개
            </Button>
          </div>
        </div>
      </div>
    </HeroWrapper>
  );
};

export default ExerciseSection;
