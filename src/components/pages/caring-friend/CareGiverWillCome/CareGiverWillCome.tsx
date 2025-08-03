'use client';

import styles from './CareGiverWillCome.module.css';
import caring from '../styles.module.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';
export default function CareGiverWillCome() {
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

  const people = [
    { ageGroup: '20대', job: '대학생', region: '지역: 서울' },
    { ageGroup: '40대', job: '요양보호사', region: '지역: 충남' },
    { ageGroup: '50대', job: '간호사', region: '지역: 전남' },
    { ageGroup: '30대', job: '사회복지사', region: '지역: 제주도' },
    { ageGroup: '60대', job: '요양보호사', region: ' 지역: 경기' },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.mainContainer}>
        <div className={styles.headerContainer}>
          <Image
            src="/assets/images/caring/caring-friend/care-giver-come/icons.png"
            height={isMobileScreen ? 47 : isTabletScreen ? 58 : 67}
            width={isMobileScreen ? 74 : isTabletScreen ? 85 : 107}
            alt="Clouds"
            className="object-contain"
          />
          <h2 className={caring.mainHeader}>
            전국 어디서든 가까운 {isMobileScreen && <br />} 돌봄친구가
            찾아갑니다.
          </h2>
        </div>

        <div className={styles.backgroundImage}></div>

        {!isMobileScreen && !isTabletScreen && (
          <div className={styles.photoGrid}></div>
        )}
        {!isMobileScreen && (
          <div
            className={`grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-4 ${styles.grid}`}
          >
            {people.map((list, index) => (
              <div key={index} className={styles.cards}>
                <Image
                  src="/assets/images/caring/caring-friend/care-giver-come/profile.png"
                  alt="Profile Picture"
                  height={isMobileScreen ? 30 : isTabletScreen ? 44 : 70}
                  width={isMobileScreen ? 30 : isTabletScreen ? 44 : 70}
                  className="object-contain"
                />
                <div className="flex flex-col items-start">
                  <h2>
                    {' '}
                    {list.ageGroup} {list.job}{' '}
                  </h2>
                  <p> {list.region}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {isMobileScreen && (
          <>
            {/* First Row: 2-column layout */}
            <div className={styles.twoColumnGrid}>
              {people.slice(0, 2).map((list, index) => (
                <div key={index} className={styles.cards}>
                  <Image
                    src="/assets/images/caring/caring-friend/care-giver-come/profile.png"
                    alt="Profile Picture"
                    height={isMobileScreen ? 30 : isTabletScreen ? 44 : 70}
                    width={isMobileScreen ? 30 : isTabletScreen ? 44 : 70}
                    className="object-contain"
                  />
                  <div className="flex flex-col items-center">
                    <h2>
                      {list.ageGroup} {list.job}
                    </h2>
                    <p>{list.region}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Second Row: 3-column layout */}
            <div className={styles.threeColumnGrid}>
              {people.slice(2, 5).map((list, index) => (
                <div key={index} className={styles.cards}>
                  <Image
                    src="/assets/images/caring/caring-friend/care-giver-come/profile.png"
                    alt="Profile Picture"
                    height={isMobileScreen ? 30 : isTabletScreen ? 44 : 70}
                    width={isMobileScreen ? 30 : isTabletScreen ? 44 : 70}
                    className="object-contain"
                  />
                  <div className="flex flex-col items-center ">
                    <h2>
                      {list.ageGroup} {list.job}
                    </h2>
                    <p>{list.region}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
