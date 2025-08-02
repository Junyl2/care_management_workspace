'use client';

import styles from './Policy.module.css';
import { useState, useEffect } from 'react';

export default function Policy() {
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
  return (
    <main className={styles.mainContainer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.policyWrapper}>
          <div>
            <h2>환불 규정</h2>
            <p>
              <strong> • 서비스 예정일 기준 3일 전 취소: </strong> 취소 수수료
              1,000원 <br />
              <strong>• 2일 전 취소: </strong> 10% 차감 <br />
              <strong> • 1일 전 취소:</strong> 30% 차감 <br />
              <strong> • 당일 취소: </strong> 50% 차감 <br />
              <strong> • 파견 후 취소:</strong>
              100% 차감
            </p>
          </div>
          {(isMobileScreen || isTabletScreen) && (
            <div>
              <h2>이용 규정</h2>
              <p>
                <strong>서비스 예정일 기준 3일 전 취소:</strong> • 취소 수수료
                1,000원 <br />
                <strong>• 2일 전 취소:</strong> 10% 차감 <br />
                <strong>• 1일 전 취소:</strong> 30% 차감 <br />
                <strong>• 당일 취소:</strong> 50% 차감 <br />
                <strong>• 파견 후 취소:</strong> 100% 차감
              </p>
            </div>
          )}
          {!isMobileScreen && !isTabletScreen && (
            <div>
              <h2>이용 규정</h2>
              <p>
                ① 돌봄친구는 의료행위를 하지 않으며, 응급 시 119 또는 보호자에게
                즉시 연락드립니다. <br /> ② 서비스는 사전 예약된 범위 내에서만
                제공되며, 금전 대여나 심부름 등은 포함되지 않습니다.
                <br /> ③ 돌봄대장은 안전하고 믿을 수 있는 서비스를 위해 최선을
                다하고 있습니다. 다만, 현장 상황에 따라 예상치 못한 돌발 상황이
                발생할 수 있으며, 이 경우 보호자와 긴밀히 소통하여 신속히
                대응합니다. 또한, 서비스 특성상 일부 상황에 대해서는 책임 범위가
                제한될 수 있습니다.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
