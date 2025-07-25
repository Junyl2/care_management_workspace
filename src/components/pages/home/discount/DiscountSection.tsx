'use client';

import React, { useEffect, useState } from 'react';
import styles from './DiscountSection.module.css';
import Image from 'next/image';
import {
  Text,
  Card,
  Button,
  AlertOneModal,
  AlertTwoModal,
} from '@components/ui';

export const DiscountSection = () => {
  const [isSmallestScreen, setIsSmallestScreen] = useState<boolean>(false);
  const [isMobileScreen, setIsMobileScreen] = useState<boolean>(false);
  const [isTabletScreen, setIsTabletScreen] = useState<boolean>(false);

  const [showAlertOne, setShowAlertOne] = useState<boolean>(false);
  const [showAlertTwo, setShowAlertTwo] = useState<boolean>(false);

  useEffect(() => {
    const checkScreen = () => {
      const width = window.innerWidth;
      setIsSmallestScreen(width < 368);
      setIsMobileScreen(width < 768);
      setIsTabletScreen(width >= 768 && width <= 1024);
    };

    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const discountList = [
    {
      iconLabel: '정기 결제 할인',
      discountRate: '20% 할인',
      payment: '3시간 x 20회 정기결제이벤트',
      buttonText: '예약하기',
    },
    {
      iconLabel: '정기 결제 할인',
      discountRate: '15% 할인',
      payment: '3시간 x 20회 정기결제이벤트',
      buttonText: '예약하기',
    },
    {
      iconLabel: '정기 결제 할인',
      discountRate: '10% 할인',
      payment: '3시간 x 20회 정기결제이벤트',
      buttonText: '예약하기',
    },
    {
      iconLabel: '정기 결제 할인',
      discountRate: '5% 할인',
      payment: '3시간 x 20회 정기결제이벤트',
      buttonText: '예약하기',
    },
  ];

  const handleButtonClick = (discount: string) => {
    if (discount === '20% 할인' || discount === '15% 할인') {
      setShowAlertOne(true);
    } else if (discount === '10% 할인' || discount === '5% 할인') {
      setShowAlertTwo(true);
    }
  };

  return (
    <div className={styles.containerBg}>
      <div className={styles.container}>
        <div className={styles.discountContainer}>
          {!isMobileScreen && (
            <Image
              src="/assets/images/gift.png"
              alt="gift icon"
              width={100}
              height={100}
            />
          )}
          <Text as="p" variant="body" className={styles.headerText}>
            할인받고 예약하기
          </Text>
          <Text variant="subHeading" as="h2" className={styles.discount}>
            지금 신청 시 최대{' '}
            <span className={styles.highlight}>25% 할인!</span>
          </Text>
        </div>

        {/* Desktop discount cards */}
        {!isMobileScreen && (
          <div className={styles.cardContainer}>
            {discountList.map((list, index) => (
              <Card key={index} className={styles.cardBackground}>
                <div className={styles.cardHeader}>
                  <Image
                    src="/assets/images/discounticon.png"
                    alt="discounts icon"
                    height={79}
                    width={81}
                    className="object-contain"
                  />
                  <Card.Text className={styles.label}>
                    {list.iconLabel}
                  </Card.Text>
                </div>

                <Card.Title className={styles.textColor}>
                  {list.discountRate}
                </Card.Title>

                <div className={styles.payment}>
                  <Card.Text className={styles.paymentColor}>
                    {list.payment}
                  </Card.Text>
                </div>

                <Card.Action>
                  <Button
                    variant="primary"
                    size={isMobileScreen ? 'sm' : isTabletScreen ? 'sm' : 'lg'}
                    radius="full"
                    fullWidth
                    className={styles.buttonText}
                    onClick={() => handleButtonClick(list.discountRate)}
                  >
                    {list.buttonText}
                  </Button>
                </Card.Action>
              </Card>
            ))}
          </div>
        )}

        {/* Mobile discount cards */}
        {isMobileScreen && (
          <div className="grid grid-cols-1 gap-4">
            {discountList.map((list, index) => (
              <Card key={index} className={styles.cardBackgroundMobile}>
                <Card.Content className="flex items-center justify-between p-6">
                  <div className={styles.discountMobile}>
                    <Image
                      src="/assets/images/discounticon.png"
                      alt="discounts icon"
                      height={isSmallestScreen ? 34 : 49}
                      width={68}
                      className={styles.icon}
                    />
                    <Card.Title className={styles.textColorMobile}>
                      {list.discountRate}
                    </Card.Title>
                  </div>

                  <div className={styles.paymentTextMobile}>
                    <Card.Text className={styles.paymentColorMobile}>
                      {list.payment}
                    </Card.Text>
                  </div>
                </Card.Content>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Alert Modals */}
      <AlertOneModal
        open={showAlertOne}
        onClose={() => setShowAlertOne(false)}
      />
      <AlertTwoModal
        open={showAlertTwo}
        onClose={() => setShowAlertTwo(false)}
      />
    </div>
  );
};
