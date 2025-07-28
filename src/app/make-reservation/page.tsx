'use client';

import { useEffect, useState } from 'react';
import styles from './style.module.css';
import MakeReservation from '@/components/pages/make-reservation/MakeReservation';
import SelectDateTimeMobile from '@/components/pages/make-reservation/SelectDateTimeMobile/SelectDateTimeMobile';

export default function MakeReservationPage() {
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [step, setStep] = useState<'select-service' | 'select-datetime'>(
    'select-service'
  );

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobileScreen(mobile);
      if (!mobile) {
        setStep('select-service'); // Reset step for desktop
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main className={`mainLayout ${styles.container}`}>
      {!isMobileScreen ? (
        <MakeReservation isMobile={false} />
      ) : step === 'select-service' ? (
        <MakeReservation
          isMobile={true}
          onNext={() => setStep('select-datetime')}
        />
      ) : (
        <SelectDateTimeMobile onBack={() => setStep('select-service')} />
      )}
    </main>
  );
}
