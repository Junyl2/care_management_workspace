'use client';
import styles from './News.module.css';
import about from '../About.module.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';

import { FiChevronRight } from 'react-icons/fi';

interface NewsItem {
  image: string;
  title: string;
  description: string;
  imageWidth: number;
  imageHeight: number;
}

export const News = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [isTabletScreen, setIsTabletScreen] = useState(false);

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

  const imageWidth = isMobileScreen ? 284 : isTabletScreen ? 425 : 585;
  const imageHeight = isMobileScreen ? 210 : isTabletScreen ? 290 : 400;

  const newsList: NewsItem[] = [
    {
      image: '/assets/images/about/news/news-featured.png',
      title: '데일리 경제',
      description:
        '형제커뮤니티 주식회사, 개인 맞춤형 노후지원서비스 ‘돌봄대장’ 앱 출시',
      imageWidth,
      imageHeight,
    },
    {
      image: '/assets/images/about/news/2.png',
      title: 'News',
      description: 'Coming Soon',
      imageWidth,
      imageHeight,
    },
    {
      image: '/assets/images/about/news/2.png',
      title: 'News',
      description: 'Coming Soon',
      imageWidth,
      imageHeight,
    },
    {
      image: '/assets/images/about/news/2.png',
      title: 'News',
      description: 'Coming Soon',
      imageWidth,
      imageHeight,
    },
  ];

  return (
    <main className={styles.mainContainer}>
      <section className={styles.sectionContainer}>
        <div className={styles.headingContainer}>
          <h3 className={about.heading}>돌봄대장 News</h3>
          <h1 className={about.subHeading}>돌봄대장의 소식을 전합니다.</h1>
        </div>
        <div className={styles.newsGrid}>
          {newsList.map((news, index) => (
            <article className={styles.newsCard} key={index}>
              <Image
                src={news.image}
                alt={news.title}
                width={news.imageWidth}
                height={news.imageHeight}
                className={styles.newsImage}
              />
              <div className={styles.context}>
                <h4 className={styles.title}>{news.title}</h4>
                <p className={styles.description}>{news.description}</p>
              </div>
            </article>
          ))}
        </div>
        <Link href="/news" className={styles.moreButton}>
          News 더보기 <FiChevronRight className={styles.icon} />
        </Link>
      </section>
    </main>
  );
};
