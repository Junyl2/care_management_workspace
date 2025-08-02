'use client';

import styles from './EasyBooking.module.css';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui';
import Link from 'next/link';

export default function EasyBooking() {
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

  const talkCards = [
    {
      label: (
        <>
          [Web 발신] <br />
          [돌봄대장 / 도착예정]
        </>
      ),
      details: (
        <>
          현재 고객님 댁으로 이동 중입니다. <br />
          ➊ 성함: 홍길동 님 <br /> ➋ 서비스: 병원동행서비스 <br /> ➌ 도착 예정
          시간: 08:50~09:00 <br />➍ 동행자: 이건강 님) 010-7790-2905
        </>
      ),
      estimate: '※ 교통 상황에 따라 도착 예상 시간이 변경될 수 있습니다.',
      message: (
        <>
          감사합니다. <br />
          살던 곳에서, 편리한 노후 돌봄대장
        </>
      ),
    },
    {
      label: (
        <>
          [Web 발신] <br />
          [돌봄대장 / 서비스 시작]
        </>
      ),
      details: (
        <>
          현재 고객님 댁으로 이동 <br />
          ➊ 성함: 홍길동 님 <br /> ➋ 서비스 시작: 1-3 (금) 09:30 <br /> ➌
          출발지: 자택 <br /> ➍ 도착지: 병원 <br /> ➎ 동행자: 이건강
          010-7790-2905
        </>
      ),
      estimate: '',
      message: (
        <>
          감사합니다. <br />
          살던 곳에서, 편리한 노후 돌봄대장
        </>
      ),
    },
    {
      label: (
        <>
          [Web 발신] <br />
          [돌봄대장 / 서비스 종료]
        </>
      ),
      details: (
        <>
          ➊ 성함: 홍길동 님 <br /> ➋ 서비스 종료: 1-3 (금) 12:30 <br /> ➌
          동행자: 자택 <br /> ➍ 동행자: 이건강 010-7790-2905
        </>
      ),
      estimate: '',
      message: (
        <>
          감사합니다. <br />
          살던 곳에서, 편리한 노후 돌봄대장
        </>
      ),
    },
    {
      label: (
        <>
          [Web 발신] <br />
          [돌봄대장 / 서비스 완료 안내]
        </>
      ),
      details: (
        <>
          <span>
            안녕하세요 돌봄대장입니다. <br />
            홍길동 님 병원동행 서비스가 완료되었습니다.
          </span>{' '}
          <br />
          ➊ 일시: 2025년 1월 3일 <br /> ➋ 접수: 09시 30분 <br />➌ 종료: 12시
          30분 <br />• 보호자님 요청에 따라 오후 진료로 예약해드렸습니다.
        </>
      ),
      estimate: (
        <>
          돌봄대장을 믿고 이용해 주셔서 고맙습니다. <br /> 더 나은 서비스 제공을
          위해 노력하겠습니다.
        </>
      ),
      message: (
        <>
          감사합니다. <br />
          살던 곳에서, 편리한 노후 돌봄대장
        </>
      ),
    },
  ];
  return (
    <main className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <div className={styles.mainHeader}>
            {isMobileScreen && (
              <div className={styles.mobileLogo}>
                <Image
                  src="/assets/images/how-to-use/booking/mobile-booking.png"
                  alt="Easy Booking"
                  height={56}
                  width={67}
                  className="object-contain"
                />
              </div>
            )}
            <h1>간단한 예약, 빠른 피드백</h1>
            <p>
              예약 · 결제 · 상담까지 단 10분! br 서비스 시작부터 종료까지,{' '}
              <br />
              실시간 알림으로 안심하세요.
            </p>
          </div>
          {!isMobileScreen && (
            <div className={styles.headerLabel}>
              <div>예약</div>
              <div>결제</div>
              <div>상담</div>
            </div>
          )}
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.grid}>
            {talkCards.map((list, index) => (
              <div key={index} className={styles.cards}>
                <div className={styles.cardHeader}>
                  <p className={styles.label}>{list.label}</p>
                </div>
                <div>
                  <p className={styles.details}>{list.details}</p>
                </div>
                <span className={styles.estimate}>{list.estimate}</span>
                <p className={styles.message}>{list.message}</p>
                <div className={styles.talkWrapper}>
                  <Image
                    src="/assets/images/how-to-use/talk.png"
                    alt="Talk To Us"
                    height={isMobileScreen ? 25 : isTabletScreen ? 36 : 50}
                    width={isMobileScreen ? 25 : isTabletScreen ? 36 : 50}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.reservation}>
          <Link href="/make-reservation">
            <Button
              variant="primary"
              size={isMobileScreen ? 'sm' : 'md'}
              radius="full"
              fullWidth={false}
              className={styles.reservationButton}
            >
              바로 예약하기
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
