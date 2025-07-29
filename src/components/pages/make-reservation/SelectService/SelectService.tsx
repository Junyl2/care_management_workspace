'use client';

import styles from './SelectService.module.css';
import { useState, useEffect } from 'react';
import { BottomBarBase } from '@/components/ui';
import { toast } from 'react-hot-toast';
import SeasonTickets from '@/components/ui/Modal/SeasonTickets';
const SERVICE_OPTIONS = [
  '병원동행',
  '식사 도움',
  '운동 도움',
  '목욕 도움',
  '가사 도움',
];

const SUBSCRIPTION_OPTIONS = ['60시간 정기권 구매', '30시간 정기권 구매'];

type Props = {
  onNext?: () => void;
};

const SelectService: React.FC<Props> = ({ onNext }) => {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [activeSubscription, setActiveSubscription] = useState<string | null>(
    null
  );
  const [showSeasonTicketModal, setShowSeasonTicketModal] = useState(false); // ✅ New state
  const [isMobileScreen, setIsMobileScreen] = useState<boolean>(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobileScreen(window.innerWidth <= 768);
    };

    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const handleContinue = () => {
    if (!activeService) {
      toast.error('서비스를 선택해주세요.');
      return;
    }

    toast.success(`'${activeService}' 서비스가 선택되었습니다.`);
    if (onNext) {
      onNext();
    }
  };

  const handleSubscriptionClick = (option: string) => {
    setActiveSubscription(option);
    setShowSeasonTicketModal(true); //  Open modal
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          {/* 서비스 선택 */}
          <section className={`${styles.section} ${styles.mobileContainer1}`}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.title}>서비스 선택</h2>
              <p className={styles.subtitle}>
                서비스는 중복 선택이 가능합니다.
              </p>
            </div>
            <div className={styles.buttonGrid}>
              {SERVICE_OPTIONS.map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`${styles.optionButton} ${
                    activeService === option ? styles.active : ''
                  }`}
                  onClick={() => setActiveService(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </section>

          {/* 정기권 구매 */}
          <section className={`${styles.section} ${styles.mobileContainer2}`}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.title}>정기권 구매</h2>
              <p className={`${styles.subtitle} ${styles.subscriptionNote}`}>
                정기권 구매 시 상담사가 전화 연결하여 서비스 사용을
                안내해드립니다.
              </p>
            </div>
            <div className={styles.buttonGrid}>
              {SUBSCRIPTION_OPTIONS.map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`${styles.optionButton} ${
                    activeSubscription === option ? styles.active : ''
                  }`}
                  onClick={() => handleSubscriptionClick(option)} // Show modal on click
                >
                  {option}
                </button>
              ))}
            </div>
          </section>
        </div>

        {isMobileScreen && (
          <BottomBarBase>
            <button
              className={`${styles.button} ${
                activeService ? styles.primary : styles.secondary
              }`}
              disabled={!activeService}
              onClick={handleContinue}
            >
              계속하기
            </button>
          </BottomBarBase>
        )}
      </div>

      {/* Render SeasonTickets modal */}
      <SeasonTickets
        open={showSeasonTicketModal}
        onClose={() => setShowSeasonTicketModal(false)}
      />
    </>
  );
};

export default SelectService;
