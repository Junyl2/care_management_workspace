'use client';

import styles from './UsageProcedure.module.css';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function UsageProcedure() {
  const [isMobileScreen, setIsMobileScreen] = useState<boolean>(false);
  const [isTabletScreen, setIsTabletScreen] = useState<boolean>(false);

  useEffect(() => {
    const checkScreen = () => {
      const width = window.innerWidth;
      setIsMobileScreen(width < 768);
      setIsTabletScreen(width >= 768 && width <= 1024);
    };

    checkScreen();

    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);
  const usage = [
    {
      label: '1. 서비스 예약',
      description: '홈페이지 또는 카카오톡을 통해 원하는 서비스 선택 후 예약',
    },
    {
      label: '2. 고객 정보 기입',
      description: '이용자 정보, 주소, 요청사항 등을 간단히 작성',
    },
    {
      label: '3. 전화 상담',
      description: '전문 상담원이 유선으로 서비스 내용 확인 및 조율',
    },
    {
      label: '4. 돌봄친구 매칭',
      description: '고객 상황에 맞는 돌봄친구를 빠르게 연결해 드립니다.',
    },
    {
      label: '5. 결제 링크 발송',
      description: (
        <>
          '매칭 완료 후 결제 링크 전송 <br /> (토스페이먼츠)'
        </>
      ),
    },
    {
      label: '6. 예약 확정',
      description: '결제 완료 시 서비스 예약 최종 확정',
    },
  ];

  return (
    <main className={styles.mainContainer}>
      <div className="container">
        <h1 className={styles.title}>이용절차</h1>
        {isMobileScreen && (
          <div className={styles.grid}>
            {usage.map((step, index) => (
              <div key={index} className={styles.wrapper}>
                <div className={styles.card}>
                  <div
                    className={
                      isMobileScreen
                        ? styles.mobileLayout
                        : styles.desktopLayout
                    }
                  >
                    {isMobileScreen && (
                      <Image
                        src={`/assets/images/how-to-use/usage/${index + 1}.png`}
                        alt={`Step ${index + 1}`}
                        width={61}
                        height={65}
                        className={styles.image}
                      />
                    )}
                    <div className={styles.textContent}>
                      <span className={styles.label}>{step.label}</span>
                      <p className={styles.description}>{step.description}</p>
                    </div>
                    {!isMobileScreen && (
                      <Image
                        src={`/assets/images/how-to-use/usage/${index + 1}.png`}
                        alt={`Step ${index + 1}`}
                        width={isTabletScreen ? 56 : 75}
                        height={isTabletScreen ? 60 : 80}
                        className={styles.image}
                      />
                    )}
                  </div>
                </div>
                {isMobileScreen && index < usage.length - 1 && (
                  <div className={styles.arrowWrapper}>
                    <Image
                      src="/assets/images/how-to-use/usage/arrow-down.png"
                      alt="Next Step"
                      height={30}
                      width={30}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* tablet and desktop */}
        {!isMobileScreen && (
          <div className={styles.grid}>
            {/* card 1 */}
            <div className={styles.card}>
              <div
                className={
                  isMobileScreen ? styles.mobileLayout : styles.desktopLayout
                }
              >
                <div className={styles.textContent}>
                  <span className={styles.label}>1. 서비스 예약</span>
                  <p className={styles.description}>
                    홈페이지 또는 카카오톡을 통해 원하는 서비스 선택 후 예약
                  </p>
                </div>
                <Image
                  src={`/assets/images/how-to-use/usage/1.png`}
                  alt={`Step 1`}
                  width={isTabletScreen ? 56 : 75}
                  height={isTabletScreen ? 60 : 80}
                  className={styles.image}
                />
              </div>
              <div className={styles.rightArrowWrapper}>
                <Image
                  src="/assets/images/how-to-use/usage/right-arrow.png"
                  alt="Next Step"
                  height={30}
                  width={30}
                />
              </div>
            </div>
            {/* card 2 */}
            <div className={styles.card}>
              <div
                className={
                  isMobileScreen ? styles.mobileLayout : styles.desktopLayout
                }
              >
                <div className={styles.textContent}>
                  <span className={styles.label}>2. 고객 정보 기입</span>
                  <p className={styles.description}>
                    이용자 정보, 주소, 요청사항 등을 간단히 작성
                  </p>
                </div>
                <Image
                  src={`/assets/images/how-to-use/usage/2.png`}
                  alt={`Step 2`}
                  width={isTabletScreen ? 56 : 75}
                  height={isTabletScreen ? 60 : 80}
                  className={styles.image}
                />
              </div>
              <div className={styles.rightArrowWrapper}>
                <Image
                  src="/assets/images/how-to-use/usage/right-arrow.png"
                  alt="Next Step"
                  height={30}
                  width={30}
                />
              </div>
            </div>
            {/* card 3 */}
            <div className={styles.card}>
              <div
                className={
                  isMobileScreen ? styles.mobileLayout : styles.desktopLayout
                }
              >
                <div className={styles.textContent}>
                  <span className={styles.label}>3. 전화 상담</span>
                  <p className={styles.description}>
                    전문 상담원이 유선으로 서비스 내용 확인 및 조율
                  </p>
                </div>
                <Image
                  src={`/assets/images/how-to-use/usage/3.png`}
                  alt={`Step 3`}
                  width={isTabletScreen ? 56 : 75}
                  height={isTabletScreen ? 60 : 80}
                  className={styles.image}
                />
              </div>{' '}
            </div>
            {/* card 4 */}
            <div className={styles.card}>
              <div
                className={
                  isMobileScreen ? styles.mobileLayout : styles.desktopLayout
                }
              >
                <div className={styles.textContent}>
                  <span className={styles.label}>4. 돌봄친구 매칭</span>
                  <p className={styles.description}>
                    고객 상황에 맞는 돌봄친구를 빠르게 연결해 드립니다.
                  </p>
                </div>
                <Image
                  src={`/assets/images/how-to-use/usage/4.png`}
                  alt={`Step 4`}
                  width={isTabletScreen ? 56 : 75}
                  height={isTabletScreen ? 60 : 80}
                  className={styles.image}
                />
              </div>
              <div className={styles.rightArrowWrapper}>
                <Image
                  src="/assets/images/how-to-use/usage/right-arrow.png"
                  alt="Next Step"
                  height={30}
                  width={30}
                />
              </div>
            </div>
            {/* card 5*/}
            <div className={styles.card}>
              <div
                className={
                  isMobileScreen ? styles.mobileLayout : styles.desktopLayout
                }
              >
                <div className={styles.textContent}>
                  <span className={styles.label}>5. 결제 링크 발송</span>
                  <p className={styles.description}>
                    '매칭 완료 후 결제 링크 전송 <br /> (토스페이먼츠)
                  </p>
                </div>
                <Image
                  src={`/assets/images/how-to-use/usage/5.png`}
                  alt={`Step 5`}
                  width={isTabletScreen ? 56 : 75}
                  height={isTabletScreen ? 60 : 80}
                  className={styles.image}
                />
              </div>
              <div className={styles.rightArrowWrapper}>
                <Image
                  src="/assets/images/how-to-use/usage/right-arrow.png"
                  alt="Next Step"
                  height={30}
                  width={30}
                />
              </div>
            </div>
            {/* card 6 */}
            <div className={styles.card}>
              <div
                className={
                  isMobileScreen ? styles.mobileLayout : styles.desktopLayout
                }
              >
                <div className={styles.textContent}>
                  <span className={styles.label}>6. 예약 확정</span>
                  <p className={styles.description}>
                    결제 완료 시 서비스 예약 최종 확정
                  </p>
                </div>
                <Image
                  src={`/assets/images/how-to-use/usage/6.png`}
                  alt={`Step 6`}
                  width={isTabletScreen ? 56 : 75}
                  height={isTabletScreen ? 60 : 80}
                  className={styles.image}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
