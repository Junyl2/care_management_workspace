'use client';

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { closeHelpModal } from '@/store/features/uiSlice';
import styles from './HelpModal.module.css';
import Image from 'next/image';
import { FiArrowRight, FiX } from 'react-icons/fi';

export const HelpModal = () => {
  const open = useSelector((state: RootState) => state.ui.helpModalOpen);
  const dispatch = useDispatch();

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

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className={styles.overlay} onClick={() => dispatch(closeHelpModal())}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.closeBtn}
          onClick={() => dispatch(closeHelpModal())}
        >
          <FiX size={20} />
        </button>

        <div className={styles.header}>
          <div className={styles.profileImage}>
            <Image
              src="/assets/images/floating-image.png"
              alt="Profile"
              width={isMobileScreen ? 0 : isTabletScreen ? 32 : 32}
              height={isMobileScreen ? 0 : isTabletScreen ? 40 : 40}
              className={styles.image}
            />
          </div>

          <h1 className="flex flex-col items-center justify-center">
            도움이 필요하신가요?
            <span>편한 방법으로 상담을 시작해 보세요.</span>
          </h1>
          <p className="flex flex-col items-center justify-center">
            24시간 운영 · 연중무휴
            <span>매일 00:00 ~ 24:00</span>
          </p>
        </div>

        <div className={styles.cards}>
          {/* Card 1 */}
          <div className={styles.card}>
            <h3>상담 번호 안내</h3>
            <p>돌봄대장 상담사가 친절히 상담해 드립니다.</p>
            <div className={styles.cardContent}>
              <p>
                <strong>대표 번호:</strong> 1588-2905
              </p>
              <p>
                <strong>상담 전용:</strong> 010-7301-8284
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className={styles.card}>
            <h3>카카오톡채널</h3>
            <p>카카오톡 채널에서 ‘돌봄대장’을 검색해 보세요.</p>
            <div className={styles.kakaoSearch}>
              <input
                type="text"
                value="돌봄대장"
                readOnly
                className={styles.searchInput}
              />
              <button className={styles.searchBtn}>Search</button>
            </div>
            <button className={styles.kakaoBtn}>
              카카오 채널 추가하기 <FiArrowRight />
            </button>
          </div>

          {/* Card 3 */}
          <div className={styles.card}>
            <h3>내방 상담</h3>
            <p>서울시 중구 수표로 10길 30, 삼풍빌딩 1층</p>
            <button className={styles.visitBtn}>내방 상담 예약</button>
          </div>
        </div>
      </div>
    </div>
  );
};
