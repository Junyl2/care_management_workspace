'use client';

import styles from './DataProves.module.css';
import caring from '../styles.module.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function DataProves() {
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

  const counselingFields = [
    {
      title: '감정 웰빙',
      label: 'Emotional Health',
      list: (
        <>
          스트레스
          <br />
          걱정
          <br />
          우울증
          <br />
          번아웃
          <br />
          트라우마
        </>
      ),
    },
    {
      title: '전문성 웰빙',
      label: 'Professional Health',
      list: (
        <>
          생산성
          <br />
          경영
          <br />
          리더십
          <br />
          경력
          <br />
          발전
        </>
      ),
    },
    {
      title: '친목 웰빙',
      label: 'Social Health',
      list: (
        <>
          관계형성 <br />
          커뮤니티
          <br />
          우정
          <br />
          이혼/이별
          <br />
          소속감/공감
        </>
      ),
    },
    {
      title: '신체 웰빙',
      label: 'Physical Health',
      list: (
        <>
          다이어트 <br />
          신체활동
          <br />
          숙면
          <br />
          약물복용
          <br />
          질병관리
        </>
      ),
    },
    {
      title: '금융 웰빙',
      label: 'Financial Health',
      list: (
        <>
          금전목표
          <br />
          예산확정
          <br />
          절약
          <br />
          부채
          <br />
          투자
        </>
      ),
    },
  ];

  const listLogo = [
    {
      src: '/assets/images/caring/caring-friend/data-proves/1.png',
      alt: '병원동행',
    },
    {
      src: '/assets/images/caring/caring-friend/data-proves/2.png',
      alt: '식사도움',
    },
    {
      src: '/assets/images/caring/caring-friend/data-proves/3.png',
      alt: '가사도움',
    },
    {
      src: '/assets/images/caring/caring-friend/data-proves/4.png',
      alt: '운동도움',
    },
    {
      src: '/assets/images/caring/caring-friend/data-proves/5.png',
      alt: '목욕도움',
    },
  ];

  const topItems = counselingFields.slice(0, 2);
  const bottomItems = counselingFields.slice(2, 5);
  const topLogos = listLogo.slice(0, 2);
  const bottomLogos = listLogo.slice(2, 5);

  return (
    <section className={styles.section}>
      <div className={styles.mainContainer}>
        <div className={styles.contentWrapper}>
          <div className="flex items-center flex-col gap-6">
            <Image
              src="/assets/images/caring/caring-friend/daily-life/circle.png"
              height={isMobileScreen ? 47 : isTabletScreen ? 58 : 67}
              width={isMobileScreen ? 74 : isTabletScreen ? 85 : 107}
              alt="Clouds"
              className="object-contain"
            />
            <h1 className={caring.mainHeader}>
              하루 3시간이 만든 변화,
              {isMobileScreen && <br />} 데이터로 증명합니다.
            </h1>
            <p className={styles.subHeader}>
              건강 관리를 위한 5가지 카테고리를 중심으로 개인별 니즈를 진단하고
              케어 옵션을 제공합니다.
            </p>
          </div>
          <div className={styles.context}>
            {/* top content */}
            <div className={styles.top}>
              <div className={styles.left}>
                <h1> 정신건강 및 전문성 위한 주요 상담분야</h1>
              </div>

              {/* desktop grid */}
              {!isMobileScreen && (
                <div className={styles.grid}>
                  {counselingFields.map((field, index) => (
                    <div key={index} className={styles.field}>
                      <h2 className={styles.title}>{field.title}</h2>
                      <p className={styles.label}>{field.label}</p>
                      <p className={styles.list}>{field.list}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* mobile grid */}
              {isMobileScreen && (
                <div className={styles.mobileGrid}>
                  <div className={styles.grid1}>
                    {topItems.map((field, index) => (
                      <div key={index} className={styles.mobileField}>
                        <h2 className={styles.title}>{field.title}</h2>
                        <p className={styles.label}>{field.label}</p>
                        <p className={styles.list}>{field.list}</p>
                      </div>
                    ))}
                  </div>
                  <div className={styles.grid2}>
                    {bottomItems.map((field, index) => (
                      <div key={index} className={styles.mobileField}>
                        <h2 className={styles.title}>{field.title}</h2>
                        <p className={styles.label}>{field.label}</p>
                        <p className={styles.list}>{field.list}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* bottom content */}
            <div className={styles.bottomContent}>
              <div className={styles.bottom}>
                <div className={styles.leftInBottom}>
                  <h1> 다양한 케어 옵션</h1>
                </div>

                {/* desktop grid */}
                {!isMobileScreen && (
                  <div className={`${styles.grid} ${styles.bottomGrid} `}>
                    {listLogo.map((logo, index) => (
                      <div key={index} className={styles.logo}>
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          height={
                            isMobileScreen ? 77 : isTabletScreen ? 74 : 98
                          }
                          width={isMobileScreen ? 77 : isTabletScreen ? 74 : 98}
                          className="object-contain"
                        />

                        <p className={styles.logoAlt}>{logo.alt}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* mobile grid */}
                {isMobileScreen && (
                  <div className={styles.mobileGrid}>
                    <div className={styles.mobileGrid1}>
                      {topLogos.map((logo, index) => (
                        <div key={index} className={styles.mobileLogo}>
                          <Image
                            src={logo.src}
                            alt={logo.alt}
                            height={75}
                            width={75}
                            className="object-contain"
                          />
                          <p className={styles.logoAlt}>{logo.alt}</p>
                        </div>
                      ))}
                    </div>
                    <div className={`${styles.grid2} ${styles.mobileGrid2}`}>
                      {bottomLogos.map((logo, index) => (
                        <div key={index} className={styles.mobileLogo}>
                          <Image
                            src={logo.src}
                            alt={logo.alt}
                            height={75}
                            width={75}
                            className="object-contain"
                          />
                          <p className={styles.logoAlt}>{logo.alt}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className={styles.bottom}>
                <div className={styles.leftInBottom}>
                  <h1> 유형별 서비스 제공</h1>
                </div>

                {/* desktop label image */}
                {(!isMobileScreen || isTabletScreen) && (
                  <div className={styles.labelImage}></div>
                )}
                {/* tablet label iamge */}
                {isTabletScreen && (
                  <div className={styles.tabletLabelImage}></div>
                )}
                {/* mobile label */}
                {isMobileScreen && (
                  <Image
                    src="/assets/images/caring/caring-friend/data-proves/mobile-label.png"
                    alt="Mobile Label"
                    width={333}
                    height={114}
                    className={styles.mobileLabelImage}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
