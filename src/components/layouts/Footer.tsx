'use client';
import Image from 'next/image';
import styles from './Footer.module.css';
import Link from 'next/link';
import { PAGE_URL } from '@/constants/pageUrl';
import { useState, useEffect } from 'react';

export const Footer = () => {
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

  const linkList = [
    {
      listName: '이용약관',
      link: '/terms-of-service',
    },
    {
      listName: '개인정보 처리방침',
      link: PAGE_URL.CLIENT.PRIVACY_POLICY, //page to be created
    },
    {
      listName: '재가노인복지센터',
      link: '', //page to be created
    },
  ];
  return (
    <footer className={styles.footerContainer}>
      <div className="container flex flex-col gap-4 px-6 py-8">
        <div className={styles.wrapper}>
          <div className={styles.contentWrapper}>
            <Image
              src="/assets/images/footerlogo.png"
              alt="footer logo"
              height={isMobileScreen ? 50 : 70}
              width={isMobileScreen ? 180 : 200}
              className="object-contain"
            />
            <div className={styles.iconWrapper}>
              <p>
                돌봄대장재가노인복지센터 | 서울시 강남구 돌봄로 123 | 대표
                홍길동 | 사업자번호 123-45-67890
              </p>
              <div className="flex gap-3 mt-4">
                <Image
                  src="/assets/images/talk.png"
                  alt="Talk Icon"
                  height={isMobileScreen ? 20 : isTabletScreen ? 24 : 30}
                  width={isMobileScreen ? 20 : isTabletScreen ? 24 : 30}
                  className="object-contain"
                />
                <Image
                  src="/assets/images/social2.png"
                  alt="Social Icon"
                  height={isMobileScreen ? 20 : isTabletScreen ? 24 : 30}
                  width={isMobileScreen ? 20 : isTabletScreen ? 24 : 30}
                  className="object-contain"
                />
                <Image
                  src="/assets/images/blog.png"
                  alt="Blog Icon"
                  height={isMobileScreen ? 20 : isTabletScreen ? 24 : 30}
                  width={isMobileScreen ? 20 : isTabletScreen ? 24 : 30}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div className={styles.listContainer}>
            <div>© 돌봄대장재가노인복지센터. All Rights Reserved.</div>
            <div className={styles.listItems}>
              {linkList.map((list, index) => (
                <p key={index}>
                  {list.link ? (
                    <Link className={styles.link} href={list.link}>
                      {list.listName}
                    </Link>
                  ) : (
                    list.listName
                  )}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
