'use client';

import HeroWrapper from '../../../sections/hero/HeroWrapper';
import styles from './HelpMeal.module.css';
import { Button } from '@components/ui';
import Link from 'next/link';

const HealMealSection = () => {
  return (
    <HeroWrapper
      backgroundImage="/assets/images/services/help-meal.png"
      className={styles.customHomeHero}
      noOverlay
    >
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <h1 className={styles.title}>식사 도움</h1>
          <p className={styles.subtitle}>식사와 복약을 함께 챙깁니다.</p>
          <div className={styles.buttons}>
            <Link href="/services/help">
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

export default HealMealSection;
