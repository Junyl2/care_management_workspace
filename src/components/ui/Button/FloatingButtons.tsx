'use client';

import { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { openHelpModal } from '@/store/features/uiSlice';
import styles from './FloatingButtons.module.css';

export const FloatingButtons = () => {
  const [visible, setVisible] = useState(false);
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
    const handleScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={styles.floatingContainer}>
      <button
        className={`${styles.floatingBtn} ${visible ? styles.shiftLeft : ''}`}
        onClick={() => dispatch(openHelpModal())}
      >
        <Image
          src="/assets/images/floating-image.png"
          alt="Profile"
          width={isMobileScreen ? 26 : isTabletScreen ? 38 : 52}
          height={isMobileScreen ? 26 : isTabletScreen ? 38 : 52}
          className={styles.profileImage}
        />
      </button>

      <button
        className={`${styles.floatingBtn} ${styles.floatingArrow} ${visible ? styles.visible : ''}`}
        onClick={scrollToTop}
      >
        <FiArrowUp size={isMobileScreen ? 20 : isTabletScreen ? 26 : 28} />
      </button>
    </div>
  );
};
