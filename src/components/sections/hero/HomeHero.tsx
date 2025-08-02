'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './HomeHero.module.css';
import HeroWrapper from './HeroWrapper';
import { Button } from '@components/ui';
import Link from 'next/link';

const slides = [
  {
    image: '/assets/images/banners/home-hero.jpg',
    title: '살던 곳에서, 편리한 노후',
    subtitle:
      '집에서 생활하는 시니어에게 일상 생활에 필요한 모든 것을 연결해주는 생활편의 서비스를 제공합니다.',
  },
  {
    image: '/assets/images/banners/home-hero2.png',
    title: '전국 어디서나, \n돌봄친구가 어르신 가정으로 찾아 갑니다',
    subtitle: '전국 돌봄네트워크로  2~3일 안에 빠르게 연결됩니다.',
  },
  {
    image: '/assets/images/banners/home-hero3.png',
    title: '퇴원 후 건강관리, \n일상으로의 \n복귀를 돕습니다',
    subtitle: '건강개선 프로그램 참여로 일상으로 복귀하세요.',
  },
];

const HomeHero = () => {
  return (
    <div className={styles.carouselWrapper}>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className={styles.swiperContainer}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <HeroWrapper
              backgroundImage={slide.image}
              className={styles.customHomeHero}
            >
              <div className={styles.content}>
                <h1 className={styles.title}>
                  {slide.title.split('\n').map((line, idx) => (
                    <span key={idx}>
                      {line}
                      <br />
                    </span>
                  ))}
                </h1>
                <p className={styles.subtitle}>{slide.subtitle}</p>
                <div className={styles.buttons}>
                  <Link href="/make-reservation" passHref>
                    <Button
                      variant="primary"
                      size="lg"
                      radius="full"
                      fullWidth={false}
                      className={styles.homeButtonWH}
                    >
                      예약하기
                    </Button>
                  </Link>

                  <Link href="/about-us" passHref>
                    <Button
                      variant="secondary"
                      size="lg"
                      radius="full"
                      fullWidth={false}
                      className={styles.homeButtonWH}
                    >
                      회사소개
                    </Button>
                  </Link>
                </div>
              </div>
            </HeroWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeHero;
