'use client';

import { useState, useEffect } from 'react';
import styles from './Instructions.module.css';

export default function Instructions() {
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

  const imageSize = {
    width: isMobileScreen ? 18 : isTabletScreen ? 24 : 30,
    height: isMobileScreen ? 18 : isTabletScreen ? 24 : 30,
  };

  const instructions = [
    {
      label: '이용 시간',
      description: (
        <>
          <strong> 기본 2시간부터 이용 가능 </strong> 하며, 이후s{' '}
          <strong> 30분 단위로 연장 가능</strong> 합니다.,
        </>
      ),

      note: (
        <>
          <span className={styles.highlight}>
            {' '}
            '이용 가능 시간: 오전 7시 ~ 오후 8시
          </span>{' '}
          <br />
          *평일·주말 모두 예약가능합니다.',
        </>
      ),
    },
    {
      label: '이용 가능 고객',
      description: (
        <>
          <strong>• 기본요금: 2시간 40,000원 </strong>
          <br />
          • 이후 30분당 10,000원 추가
          <br />• 재료비/폐기물 처리비용 등은 실제 사용분만 별도 청구됩니다.
        </>
      ),
      note: (
        <>
          <span className={styles.highlight}>
            *월 10회·20회 이용 시 할인 이벤트 진행 중
          </span>
        </>
      ),
    },
    {
      label: '비용 안내',
      description: (
        <>
          청년, 장애인, 유아, 노인을 포함한 <strong> 전 연령 누구나 이</strong>
          용 가능합니다. 다만,{' '}
          <strong> 거동이 불편하거나 건강상 특별한 도움이 필요한 경우 </strong>{' '}
          안전을 위해 <strong>사전 상담을 통해 서비스 가능 여부를 확인 </strong>{' '}
          해드립니다.
        </>
      ),
      note: '*월 10회·20회 이용 시 할인 이벤트 진행 중',
    },
    {
      label: '매칭 소요 시간',
      description: (
        <>
          <strong>• 상담 완료 후 2~3일 내 돌봄친구 매칭 가능</strong>
          <br />• 지역 및 서비스 조건에 따라<strong> 당일 매칭 </strong> 도
          가능하며, 매칭 완료 후 유선으로 확정 안내드립니다.
        </>
      ),
    },
  ];

  return (
    <main className={`container ${styles.container}`}>
      <h1 className={styles.mainTitle}>이용 안내</h1>
      <div className={styles.grid}>
        {instructions.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.header}>
              <img
                src={`/assets/images/how-to-use/${index + 1}.png`}
                alt={item.label}
                width={imageSize.width}
                height={imageSize.height}
                className="object-contain"
              />
              <h2 className={styles.label}>{item.label}</h2>
            </div>
            <div className={styles.divider} />
            <p className={styles.description}>{item.description}</p>
            {item.note && <p className={styles.note}>{item.note}</p>}
          </div>
        ))}
      </div>
    </main>
  );
}
