'use client';

import styles from './DailyLife.module.css';
import caring from '../styles.module.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

export default function DailyLife() {
  const [isMobileScreen, setIsMobileScreen] = useState<boolean>(false);
  const [isTabletScreen, setIsTabletScreen] = useState<boolean>(false);

  useEffect(() => {
    const checkScreen = () => {
      const width = window.innerWidth;
      setIsMobileScreen(width < 769);
      setIsTabletScreen(width >= 768 && width <= 1024);
    };

    checkScreen();

    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Image
            src="/assets/images/caring/caring-friend/daily-life/clouds.png"
            height={isMobileScreen ? 47 : isTabletScreen ? 58 : 67}
            width={isMobileScreen ? 74 : isTabletScreen ? 85 : 107}
            alt="Clouds"
            className="object-contain"
          />
          <h1 className={caring.mainHeader}>
            {' '}
            돌봄친구와 함께하는 81세 할아버지 일상{' '}
          </h1>
        </div>

        <div className={styles.subContainer}>
          {/* first card */}
          <div className={styles.firstCard}>
            <Image
              src={
                isMobileScreen
                  ? '/assets/images/caring/caring-friend/daily-life/mobile-grandpa1.png'
                  : isTabletScreen
                    ? '/assets/images/caring/caring-friend/daily-life/tablet-grandpa-1.png'
                    : '/assets/images/caring/caring-friend/daily-life/grandpa1.png'
              }
              alt="Grandpa"
              height={isMobileScreen ? 160 : isTabletScreen ? 181 : 250}
              width={isMobileScreen ? 126 : isTabletScreen ? 181 : 250}
              className="object-contain"
            />
            <div className={styles.content}>
              <h2 className={styles.label}> 사고 당시</h2>
              <p>
                일반상태: 81세, 독거 6년 <br />
                주요질병: 영양부족, 저혈당 쇼크
                <br />
                사고발생: 낙상에 의한 뇌출혈
              </p>
            </div>
            {/* absolute curve arrow indicator */}
            {!isMobileScreen && (
              <div className={styles.absoluteArrow}>
                <Image
                  src="/assets/images/caring/caring-friend/daily-life/curve-arrow.png"
                  alt="Next arrow"
                  height={isTabletScreen ? 36 : 50}
                  width={isTabletScreen ? 41 : 56}
                  className="object-contain"
                />
              </div>
            )}
            {isMobileScreen && (
              <div className={styles.mobileAbsoluteArrow}>
                <Image
                  src="/assets/images/caring/caring-friend/daily-life/curve-arrow.png"
                  alt="Next arrow"
                  height={35}
                  width={39}
                  className="object-contain"
                />
              </div>
            )}
          </div>
          {/* second card */}
          <div className={styles.secondCard}>
            <Image
              src={
                isMobileScreen
                  ? '/assets/images/caring/caring-friend/daily-life/mobile-grandpa2.png'
                  : isTabletScreen
                    ? '/assets/images/caring/caring-friend/daily-life/tablet-grandpa-2.png'
                    : '/assets/images/caring/caring-friend/daily-life/grandpa2.png'
              }
              alt="Grandpa"
              height={isMobileScreen ? 160 : isTabletScreen ? 181 : 250}
              width={isMobileScreen ? 126 : isTabletScreen ? 363 : 500}
              className="object-contain"
            />
            <div className={styles.content}>
              <h2 className={styles.label}>회복 중</h2>
              <p>
                휠체어 이동, 낙상 위험 높음 <br />
                입욕 어려움, 피부 간지럼 <br />
                체중 감소, 복약 누락
              </p>
            </div>
            {/* absolute curve arrow indicator */}
            {!isMobileScreen && (
              <div className={styles.absoluteArrow2}>
                <Image
                  src="/assets/images/caring/caring-friend/daily-life/curve-arrow.png"
                  alt="Next arrow"
                  height={isTabletScreen ? 36 : 50}
                  width={isTabletScreen ? 41 : 56}
                  className="object-contain"
                />
              </div>
            )}
            {isMobileScreen && (
              <div className={styles.mobileAbsoluteArrow2}>
                <Image
                  src="/assets/images/caring/caring-friend/daily-life/curve-arrow.png"
                  alt="Next arrow"
                  height={35}
                  width={39}
                  className="object-contain"
                />
              </div>
            )}
          </div>
          {/* third card */}
          <div className={styles.thirdCard}>
            <Image
              src={
                isMobileScreen
                  ? '/assets/images/caring/caring-friend/daily-life/mobile-grandpa3.png'
                  : isTabletScreen
                    ? '/assets/images/caring/caring-friend/daily-life/tablet-grandpa-3.png'
                    : '/assets/images/caring/caring-friend/daily-life/grandpa3.png'
              }
              alt="Grandpa"
              height={isMobileScreen ? 160 : isTabletScreen ? 181 : 250}
              width={isMobileScreen ? 126 : isTabletScreen ? 478 : 658}
              className={styles.thirdImage}
            />

            <div className={styles.content}>
              <h2 className={styles.label}>일상생활 돌봄 3개월 후</h2>
              <p>
                휠체어 이동, 낙상 위험 높음 <br />
                입욕 어려움, 피부 간지럼 <br />
                체중 감소, 복약 누락
              </p>
            </div>
          </div>
        </div>
        <div className={styles.thirdContainer}>
          <div className={styles.cardContainer}>
            <div className={styles.bottomContent}>
              <h2 className={styles.bottomLabel1}>우리의 접근 방식</h2>
              <p>
                돌봄은 ‘진단’부터 시작됩니다. <br />
                어르신의 상태를 이해하고, 하루 2~4시간 맞춤형 <br />
                프로그램을 설계합니다.
              </p>
              <p>
                {' '}
                <strong>
                  =&gt; 기초조사, 주요질병, 신체상태, 재활상태, 인지상태
                </strong>
              </p>
            </div>
            {!isMobileScreen && (
              <div className={styles.arrowDown}>
                <Image
                  src="/assets/images/caring/caring-friend/daily-life/right-arrow.png"
                  alt="Indicator"
                  height={84}
                  width={67}
                  className="object-contain"
                />
              </div>
            )}
            {isMobileScreen && (
              <div className={styles.mobileArrow}>
                <Image
                  src="/assets/images/caring/caring-friend/daily-life/arrow-down.png"
                  alt="Indicator"
                  height={56}
                  width={45}
                  className="object-contain"
                />
              </div>
            )}

            <div className={styles.bottomContent}>
              <h2 className={styles.bottomLabel2}>우리의 성과</h2>
              <p>
                돌봄은 단기적으로 끝나지 않습니다. <br />
                노인장기요양보험과 연계하여 정부지원을 통한 <br /> 장기적인 돌봄
                구조를 설계합니다.
                <br />
              </p>
              <p>
                <strong>=&gt; 정부지원 80~100%</strong>{' '}
              </p>
            </div>
          </div>
        </div>
        <Link href="/care-giver">
          <button className={styles.caregiverButton}>
            <p>
              돌봄대장 재가노인복지센터 바로가기 <FiArrowRight size={20} />
            </p>
          </button>
        </Link>
      </div>
    </section>
  );
}
