'use client';

import HeroWrapper from '../../../sections/hero/HeroWrapper';
import styles from './BathSection.module.css';
import { Button } from '@components/ui';
import Link from 'next/link';

const BathSection = () => {
  return (
    <HeroWrapper
      backgroundImage="/assets/images/services/bath.png"
      className={styles.customHomeHero}
      noOverlay
    >
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <h1 className={styles.title}>목욕 도움</h1>
          <p className={styles.subtitle}>목욕! 깨끗한 건강의 시작입니다.</p>
          <div className={styles.buttons}>
            <Link href="/services/bath-help">
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

export default BathSection;
