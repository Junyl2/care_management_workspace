'use client';
import styles from './CustomerReview.module.css';
import { Card, Button, Text } from '@/components/ui';
import { Review, Gender } from '@/types';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export const CustomerReview = () => {
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
  const [isTabletScreen, setIsTabletScreen] = useState<boolean>(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkScreen = () => {
      const width = window.innerWidth;
      setIsMobileOpen(width < 768);
      setIsTabletScreen(width >= 768 && width <= 1024);
    };

    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  useEffect(() => {
    const scrollEl = scrollRef.current;

    if (isTabletScreen && scrollEl) {
      const timeout = setTimeout(() => {
        const cards = scrollEl.querySelectorAll('.tabletCard');
        if (cards.length < 2) return;

        const secondCard = cards[1] as HTMLElement;
        if (!secondCard) return;

        const cardLeft = secondCard.offsetLeft;
        const cardWidth = secondCard.offsetWidth;
        const containerWidth = scrollEl.clientWidth;

        const scrollLeft = cardLeft - (containerWidth / 2 - cardWidth / 2);

        scrollEl.scrollTo({
          left: scrollLeft,
          behavior: 'smooth',
        });
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [isTabletScreen]);

  const reviewList: Review[] = [
    {
      services: '병원동행 서비스',
      variant: 'hospital',
      profileImg: '/assets/images/pp.jpg',
      name: '최*민',
      ratings: '⭐️⭐️⭐️⭐️⭐️ 5.0',
      details: {
        age: '70대',
        region: '경기도',
        gender: 'F',
      },
      commentTitle: '마음의 짐을 덜어주는 서비스라 꼭 추천하고 싶어요.',
      commentDescription:
        '예약부터 이동, 설명까지 모두 함께해주셔서 부모님도 저도 안심이 됐어요. 덕분에 멀리 떨어져 있어도 마음이 한결 가벼웠습니다.',
    },
    {
      services: '식사도움 서비스',
      variant: 'meal',
      profileImg: '/assets/images/pp.jpg',
      name: '김*수',
      ratings: '⭐️⭐️⭐️⭐️⭐️ 5.0',
      details: {
        age: '80대',
        region: '서울',
        gender: 'M',
      },
      commentTitle: '정성껏 도와주셔서 식사가 즐거워졌어요.',
      commentDescription:
        '편식도 많으셨는데 다양하게 챙겨주셔서 좋아하세요. 감사해요!',
    },
    {
      services: '운동도움 서비스',
      variant: 'exercise',
      profileImg: '/assets/images/pp.jpg',
      name: '박*영',
      ratings: '⭐️⭐️⭐️⭐️⭐️ 5.0',
      details: {
        age: '60대',
        region: '부산',
        gender: 'F',
      },
      commentTitle: '체력도 회복되고 웃음도 많아졌어요!',
      commentDescription:
        '리뷰 내용이 들어갑니다. 리뷰 내용이 들어갑니다. 리뷰 내용이 들어갑니',
    },
    {
      services: '목욕도움 서비스',
      variant: 'bath',
      profileImg: '/assets/images/pp.jpg',
      name: '이*준',
      ratings: '⭐️⭐️⭐️⭐️⭐️ 5.0',
      details: {
        age: '90대',
        region: '대전',
        gender: 'M',
      },
      commentTitle: '청결하게 도와주셔서 안심됩니다.',
      commentDescription:
        '리뷰 내용이 들어갑니다. 리뷰 내용이 들어갑니다. 리뷰 내용이 들어갑니다. 리뷰 내용이 들어갑니다. 리뷰 내용이 들어갑니다. 리뷰 내용이 들어갑니다. 리뷰 내용이 들어갑니다. 리뷰 내용이 들어갑니.',
    },
    {
      services: '가사도움 서비스',
      variant: 'housekeeping',
      profileImg: '/assets/images/pp.jpg',
      name: '정*자',
      ratings: '⭐️⭐️⭐️⭐️⭐️ 5.0',
      details: {
        age: '70대',
        region: '인천',
        gender: 'F',
      },
      commentTitle: '집이 늘 깨끗하니 마음도 편안해져요.',
      commentDescription:
        '리뷰 내용이 들어갑니다. 리뷰 내용이 들어갑니다. 리뷰 내용이 들어갑니다. 리뷰 내용이 들어갑니다. 리뷰 내용이 들어갑니다. .',
    },
  ];

  const getGenderEmoji = (gender: Gender): string => {
    switch (gender) {
      case 'M':
        return '👴';
      case 'F':
        return '👵';
      default:
        return '';
    }
  };

  const formatDetails = (details: Review['details']) =>
    `(어르신, ${details.age}, ${details.region}, ${getGenderEmoji(details.gender)})`;

  return (
    <>
      <section className={styles.reviewWrapper}>
        <div className={styles.container}>
          <div className="flex items-center justify-center flex-col gap-4">
            <Text variant="body" as="p" className={styles.primayColor}>
              고객 후기
            </Text>
            <Text variant="subHeading" as="h2">
              어르신의 일상에 꼭 맞는 서비스
            </Text>
            {isTabletScreen && (
              <div className={styles.spaceY}>
                <Button
                  variant="primary"
                  size="md"
                  width="310px"
                  radius="full"
                  className={styles.lgHidden}
                >
                  더 많은 후기 보기
                </Button>
              </div>
            )}
          </div>

          {!isMobileOpen && (
            <div className={styles.cardContainer}>
              <div className={styles.firstRow}>
                {reviewList.slice(0, 2).map((list, index) => (
                  <Card
                    key={index}
                    variant="default"
                    className={styles.cardWrapper}
                  >
                    <Button variant={list.variant} size="sm" radius="full">
                      {list.services}
                    </Button>
                    <div className={styles.profileWrapper}>
                      <Image
                        src={list.profileImg}
                        alt={list.name}
                        className={styles.profileImg}
                        width={50}
                        height={50}
                      />
                      {list.name} <div>{list.ratings}</div>
                    </div>
                    <Text variant="body" as="p" className={styles.details}>
                      {formatDetails(list.details)}
                    </Text>
                    <Card.Text className={styles.title}>
                      {list.commentTitle}
                    </Card.Text>
                    <Card.Text className={styles.description}>
                      {list.commentDescription}
                    </Card.Text>
                  </Card>
                ))}
              </div>

              {!isTabletScreen && (
                <div className={styles.secondRow}>
                  {reviewList.slice(2, 5).map((list, index) => (
                    <Card
                      key={index + 2}
                      variant="default"
                      className={styles.cardWrapper}
                    >
                      <Button variant={list.variant} size="sm" radius="full">
                        {list.services}
                      </Button>
                      <div className={styles.profileWrapper}>
                        <Image
                          src={list.profileImg}
                          alt={list.name}
                          className={styles.profileImg}
                          width={50}
                          height={50}
                        />
                        {list.name}
                        <div>{list.ratings}</div>
                      </div>
                      <Text variant="body" as="p" className={styles.details}>
                        {formatDetails(list.details)}
                      </Text>
                      <Card.Text className={styles.title}>
                        {list.commentTitle}
                      </Card.Text>
                      <Card.Text className={styles.description}>
                        {list.commentDescription}
                      </Card.Text>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          )}
          {!isTabletScreen && (
            <div className={styles.spaceY}>
              <Button
                variant="primary"
                size="md"
                width="310px"
                radius="full"
                className={styles.lgHidden}
              >
                더 많은 후기 보기
              </Button>
            </div>
          )}

          {/*  {!isMobileOpen && (
            <div className="flex items-center justify-center">
              <Button
                variant="primary"
                size="md"
                width="200px"
                radius="full"
                className={styles.mdHidden}
              >
                더 많은 후기 보기
              </Button>
            </div>
          )} */}
        </div>
      </section>

      {/* scrollable cards */}
      <div className={styles.scrollabeCards}>
        {isTabletScreen && (
          <div className={styles.tabletScrollWrapper}>
            <div className={styles.tabletScroll} ref={scrollRef}>
              {reviewList.slice(2, 5).map((list, index) => (
                <Card
                  key={index}
                  variant="default"
                  className={styles.tabletCard}
                >
                  <Button
                    variant={list.variant}
                    size="sm"
                    radius="full"
                    width="125px"
                    className={styles.buttonSize}
                  >
                    {list.services}
                  </Button>
                  <div>
                    <div className={styles.profileWrapper}>
                      <Image
                        src={list.profileImg}
                        alt={list.name}
                        className={styles.profileImg}
                        width={50}
                        height={50}
                      />
                      {list.name} <div>{list.ratings}</div>
                    </div>
                  </div>
                  <Text variant="body" as="p" className={styles.details}>
                    {formatDetails(list.details)}
                  </Text>
                  <Card.Text className={styles.title}>
                    {list.commentTitle}
                  </Card.Text>
                  <Card.Text className={styles.description}>
                    {list.commentDescription}
                  </Card.Text>
                </Card>
              ))}
            </div>
          </div>
        )}

        {isMobileOpen && (
          <div className={`${styles.mobileScroll}`}>
            {reviewList.map((list, index) => (
              <Card key={index} variant="default" className={styles.mobileCard}>
                <Button
                  variant={list.variant}
                  size="sm"
                  radius="full"
                  width="125px"
                  className={styles.buttonSize}
                >
                  {list.services}
                </Button>
                <div>
                  <div className={styles.profileWrapper}>
                    <Image
                      src={list.profileImg}
                      alt={list.name}
                      className={styles.profileImg}
                      width={50}
                      height={50}
                    />
                    {list.name} <div>{list.ratings}</div>
                  </div>
                </div>
                <Text variant="body" as="p" className={styles.details}>
                  {formatDetails(list.details)}
                </Text>
                <Card.Text className={styles.title}>
                  {list.commentTitle}
                </Card.Text>
                <Card.Text>{list.commentDescription}</Card.Text>
              </Card>
            ))}
          </div>
        )}
        {isMobileOpen && (
          <div className="flex items-center justify-center">
            <Button
              variant="primary"
              size="md"
              width="200px"
              radius="full"
              className={styles.mdHidden}
            >
              더 많은 후기 보기
            </Button>
          </div>
        )}
      </div>
    </>
  );
};
