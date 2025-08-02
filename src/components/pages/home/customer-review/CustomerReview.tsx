'use client';
import styles from './CustomerReview.module.css';
import { Card, Button, Text } from '@/components/ui';
import { Review, Gender } from '@/types';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';
import Link from 'next/link';

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
        if (cards.length === 0) return;

        const middleIndex = Math.floor(cards.length / 2);
        const middleCard = cards[middleIndex] as HTMLElement;
        if (!middleCard) return;

        const cardLeft = middleCard.offsetLeft;
        const cardWidth = middleCard.offsetWidth;
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

  const renderStars = (count: number) => {
    return Array.from({ length: count }, (_, i) => (
      <AiFillStar
        key={i}
        color="#FFD700"
        size={isMobileOpen ? 17 : isTabletScreen ? 20 : 22}
      />
    ));
  };

  const reviewList: Review[] = [
    {
      services: '병원동행 서비스',
      variant: 'hospital',
      profileImg: '/assets/images/pp.jpg',
      name: '최*민',
      ratings: 5,
      details: {
        age: '70대',
        region: '경기도',
        gender: 'F',
      },
      commentTitle: '마음의 짐을 덜어주는 서비스라 꼭 추천하고 싶어요.',
      commentDescription:
        '예약부터 이동, 설명까지 모두 함께해주셔서 부모님도 저도 안심이 됐어요. 덕분에 멀리 떨어져 있어도 마음이 한결 가벼웠습니다. 직접 챙겨드리지 못하는 상황이 늘 마음에 걸렸는데, 믿을 수 있는 분이 곁에 있어 주시니 든든했고, 부모님께서도 편안하게 진료를 받으실 수 있었어요.',
    },
    {
      services: '식사도움 서비스',
      variant: 'meal',
      profileImg: '/assets/images/pp.jpg',
      name: '김*수',
      ratings: 5,
      details: {
        age: '80대',
        region: '서울',
        gender: 'M',
      },
      commentTitle: '정성껏 도와주셔서 식사가 즐거워졌어요.',
      commentDescription:
        '식사 준비부터 설거지까지 깔끔히 해주셔서 부모님이 편하셨다고 하셨어요. 집밥처럼 정성 가득한 식사에 감사해요. 오랜만에 제대로 된 식사를 하셨다며 기분 좋은 하루를 보내셨다고 하네요. 이런 따뜻한 돌봄이 부모님께 큰 힘이 되는 것 같아 저도 감사한 마음입니다.',
    },
    {
      services: '운동도움 서비스',
      variant: 'exercise',
      profileImg: '/assets/images/pp.jpg',
      name: '박*영',
      ratings: 4,
      details: {
        age: '60대',
        region: '부산',
        gender: 'F',
      },
      commentTitle: '체력도 회복되고 웃음도 많아졌어요!',
      commentDescription:
        '부모님이 재미있게 운동하셨다고 하셔서 저도 기뻤어요. 혼자 할 때보다 안전하게 자세도 잡아주셨습니다. 운동이 어렵기만 했는데 이제는 기다려진다고 하시더라고요. 작은 변화지만 부모님께 큰 힘이 된 것 같아 감사한 마음입니다.',
    },
    {
      services: '목욕도움 서비스',
      variant: 'bath',
      profileImg: '/assets/images/pp.jpg',
      name: '이*준',
      ratings: 5,
      details: {
        age: '90대',
        region: '대전',
        gender: 'M',
      },
      commentTitle: '청결하게 도와주셔서 안심됩니다.',
      commentDescription:
        '부모님께서 무릎이 불편하셔서 청소가 힘드셨는데 덕분에 걱정이 덜 됐어요. 물건도 가지런히 정리해 주셔서 집이 한결 밝아졌습니다. 무엇보다 부모님이 너무 만족해하시고 안심하신 모습에 저도 마음이 놓였어요.꼼꼼하고 정성스러운 손길 덕분에 따뜻한 돌봄을 느낄 수 있었습니다.',
    },
    {
      services: '가사도움 서비스',
      variant: 'housekeeping',
      profileImg: '/assets/images/pp.jpg',
      name: '정*자',
      ratings: 5,
      details: {
        age: '70대',
        region: '인천',
        gender: 'F',
      },
      commentTitle: '집이 늘 깨끗하니 마음도 편안해져요.',
      commentDescription:
        '처음엔 쑥스러워하셨는데 편안하게 해주셔서 부모님도 만족하셨어요.물 온도도 딱 맞게 해주셨다고 하네요. 세심한 배려 덕분에 부담 없이 도움을 받을 수 있었던 것 같아요. 다음에도 꼭 같은 선생님께 부탁드리고 싶다고 하셨어요.',
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
            <Text variant="subHeading" as="h2" className={styles.subHeading}>
              어르신의 일상에 꼭 맞는 서비스
            </Text>
            {isTabletScreen && (
              <div className={styles.spaceY}>
                <Link href="/customer-reviews">
                  <Button
                    variant="primary"
                    size="md"
                    width="310px"
                    radius="full"
                    className={styles.lgHidden}
                  >
                    더 많은 후기 보기
                  </Button>
                </Link>
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
                      {list.name}
                      <div className={styles.ratings}>
                        {renderStars(list.ratings)}
                        <span className={styles.ratingNumber}>
                          {Number.isInteger(list.ratings)
                            ? list.ratings
                            : list.ratings.toFixed(1)}
                        </span>
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
                        <div className={styles.ratings}>
                          {renderStars(list.ratings)}
                          <span className={styles.ratingNumber}>
                            {Number.isInteger(list.ratings)
                              ? list.ratings
                              : list.ratings.toFixed(1)}
                          </span>
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
              )}
            </div>
          )}

          {!isTabletScreen && (
            <div className={styles.spaceY}>
              <Link href="/customer-reviews">
                <Button
                  variant="primary"
                  size="md"
                  width="310px"
                  radius="full"
                  className={styles.lgHidden}
                >
                  더 많은 후기 보기
                </Button>
              </Link>
            </div>
          )}
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
                      {list.name}
                      <div className={styles.ratings}>
                        {renderStars(list.ratings)}
                        <span className={styles.ratingNumber}>
                          {Number.isInteger(list.ratings)
                            ? list.ratings
                            : list.ratings.toFixed(1)}
                        </span>
                      </div>
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
          <div className={styles.mobileScroll}>
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
                    {list.name}
                    <div className={styles.ratings}>
                      {renderStars(list.ratings)}
                      <span className={styles.ratingNumber}>
                        {Number.isInteger(list.ratings)
                          ? list.ratings
                          : list.ratings.toFixed(1)}
                      </span>
                    </div>
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
            <Link href="/customer-reviews">
              <Button
                variant="primary"
                size="md"
                width="200px"
                radius="full"
                className={styles.mdHidden}
              >
                더 많은 후기 보기
              </Button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};
