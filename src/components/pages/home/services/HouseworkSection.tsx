'use client';

import HeroWrapper from '../../../sections/hero/HeroWrapper';
import styles from './HouseworkSection.module.css';
import { Button } from '@components/ui';
import Link from 'next/link';

const HouseworkSection = () => {
  return (
    <HeroWrapper
      backgroundImage="/assets/images/services/housework.png"
      className={styles.customHomeHero}
      noOverlay
    >
      <div className={styles.content}>
        <h1 className={styles.title}>가사 도움</h1>
        <p className={styles.subtitle}>집안일, 돌봄대장이 도와드려요.</p>
        <div className={styles.buttons}>
          <Link href="/services/housework-help">
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
    </HeroWrapper>
  );
};

export default HouseworkSection;
