'use client';

import HeroWrapper from '../../../sections/hero/HeroWrapper';
import styles from './ExerciseSection.module.css';
import { Button } from '@components/ui';
import Link from 'next/link';

const ExerciseSection = () => {
  return (
    <HeroWrapper
      backgroundImage="/assets/images/services/exercise.png"
      className={styles.customHomeHero}
      noOverlay
    >
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <h1 className={styles.title}>운동 도움</h1>
          <p className={styles.subtitle}>운동! 기력을 회복합니다.</p>
          <div className={styles.buttons}>
            <Link href="/services/exrcise-help">
              <Button
                variant="primary"
                size="lg"
                radius="full"
                fullWidth={false}
                className={styles.homeButtonWH}
              >
                더 알아보기
              </Button>
            </Link>
            <Link href="/make-reservation">
              <Button
                variant="secondary"
                size="lg"
                radius="full"
                fullWidth={false}
                className={styles.homeButtonWH}
              >
                예약하기
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </HeroWrapper>
  );
};

export default ExerciseSection;
