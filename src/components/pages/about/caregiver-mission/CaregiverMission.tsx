import React from 'react';
import styles from './CaregiverMission.module.css';
import about from '../About.module.css';

export const CaregiverMission = () => {
  return (
    <main className={`container ${styles.container}`}>
      <section className={styles.headingContainer}>
        <div className="flex flex-col text-center gap-2">
          <h3 className={about.heading}>돌봄대장 미션</h3>
          <h1 className={about.subHeading}>우리는 왜 시작했을까?</h1>
        </div>
        <div>
          <p className={about.description}>
            도움이 꼭 필요했던 그 순간, 아무도 곁에 없었습니다. 그래서 우리가
            시작했습니다. 우리는 돌봄인력 부족이라는 사회적 문제를 해결하여,
            어르신이 살던 곳에서 마지막까지 존엄한 삶을 이어가실 수 있도록
            돕습니다. 이것이 우리가 추구하는 Aging in Place입니다.
          </p>
        </div>
      </section>
    </main>
  );
};
