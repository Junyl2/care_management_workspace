'use client';

import HeroWrapper from '../../../sections/hero/HeroWrapper';
import styles from './HospitalSection.module.css';
import { Button } from '@components/ui';
import Link from 'next/link';

const HospitalSection = () => {
  return (
    <HeroWrapper
      backgroundImage="/assets/images/services/hospital.png"
      className={styles.customHomeHero}
      noOverlay
    >
      <div className={styles.content}>
        <h1 className={styles.title}>병원 동행</h1>
        <p className={styles.subtitle}>
          퇴원 후 건강 관리에서 병원 동행까지 함께 합니다.
        </p>
        <div className={styles.buttons}>
          <Link href="/services/hospital-accompaniment">
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

export default HospitalSection;
