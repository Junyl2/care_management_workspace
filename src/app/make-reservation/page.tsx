'use client';

import { useEffect, useState } from 'react';
import styles from './style.module.css';
import MakeReservation from '@/components/pages/make-reservation/MakeReservation';
import SelectDateTimeMobile from '@/components/pages/make-reservation/mobile/SelectDateTimeMobile/SelectDateTimeMobile';
import ServiceInfoMobile from '@/components/pages/make-reservation/mobile/ServiceInfoMobile/ServiceInfoMobile';
import ConfirmationMobile from '@/components/pages/make-reservation/mobile/ConfirmationMobile/ConfirmationMobile';

type ReservationStep =
  | 'select-service'
  | 'select-datetime'
  | 'service-info'
  | 'check-reservation'
  | 'confirmation';

export default function MakeReservationPage() {
  const [isMobileScreen, setIsMobileScreen] = useState<boolean | null>(null);
  const [step, setStep] = useState<ReservationStep>('select-service');

  useEffect(() => {
    const checkScreenSize = () => {
      const isMobile = window.innerWidth <= 768;
      setIsMobileScreen(isMobile);
      if (!isMobile) setStep('select-service');
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    // Scroll to top whenever the step changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step]);

  if (isMobileScreen === null) return null;

  const renderContent = () => {
    if (!isMobileScreen) {
      return <MakeReservation isMobile={false} />;
    }

    switch (step) {
      case 'select-service':
        return (
          <MakeReservation
            isMobile={true}
            onNext={() => setStep('select-datetime')}
          />
        );
      case 'select-datetime':
        return (
          <SelectDateTimeMobile
            onBack={() => setStep('select-service')}
            onNext={() => setStep('service-info')}
          />
        );
      case 'service-info':
        return (
          <ServiceInfoMobile
            onBack={() => setStep('select-datetime')}
            onNext={() => setStep('check-reservation')}
          />
        );
      case 'check-reservation':
        return (
          <ServiceInfoMobile
            onBack={() => setStep('service-info')}
            onNext={() => setStep('confirmation')}
          />
        );
      case 'confirmation':
        return <ConfirmationMobile onReset={() => setStep('select-service')} />;
      default:
        return null;
    }
  };

  return (
    <main className={`mainLayout ${styles.container}`}>{renderContent()}</main>
  );
}
