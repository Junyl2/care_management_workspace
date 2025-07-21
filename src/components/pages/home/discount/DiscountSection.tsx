'use client';

import React from 'react';
import styles from './DiscountSection.module.css';
import Image from 'next/image';
import { Text, Card, Button } from '@components/ui';
import { useEffect, useState } from 'react';

export const DiscountSection = () => {
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobileOpen(window.innerWidth < 768);
    };

    checkScreen();

    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  interface Discount {
    icon?: string;
    iconLabel?: string;
    discountRate?: string;
    payment?: string;
    buttonText?: string;
  }
  const discountList: Discount[] = [
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

  return (
    <div className={styles.containerBg}>
      <div className="container flex flex-col gap-8">
        <div className="flex items-center justify-center flex-col gap-4 pb-6 text-center">
          <Image
            src="/images/gift.png"
            alt="gift icon"
            width={100}
            height={100}
          />
          <Text as="p" variant="body">
            할인받고 예약하기
          </Text>
          <Text variant="subHeading" as="h2">
            지금 신청 시 최대 25% 할인!
          </Text>
        </div>
        {/* desktop discount cards */}
        {!isMobileOpen && (
          <div className="container flex items-center justify-center gap-4 ">
            {discountList.map((list, index) => (
              <Card key={index} className={styles.cardBackground}>
                <div className={styles.contentWrapper}>
                  <Card.Header>
                    <Image
                      src="/images/discounticon.png"
                      alt="discounts icon"
                      height={49}
                      width={73}
                    />
                    <Card.Text> {list.iconLabel}</Card.Text>
                  </Card.Header>
                  <Card.Content>
                    <Card.Title className={styles.textColor}>
                      {list.discountRate}
                    </Card.Title>
                    <Card.Text className={styles.paymentColor}>
                      {list.payment}
                    </Card.Text>
                  </Card.Content>
                  <Card.Action>
                    <Button
                      variant="primary"
                      size="md"
                      radius="full"
                      className={styles.buttonText}
                    >
                      {list.buttonText}
                    </Button>
                  </Card.Action>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* mobile discount cards */}
        {isMobileOpen && (
          <div className="grid grid-cols-1 gap-4">
            {discountList.map((list, index) => (
              <Card key={index} className={styles.cardBackgroundMobile}>
                <Card.Content className="flex items-center justify-between p-6">
                  <div className={styles.discountMobile}>
                    <Image
                      src="/images/discounticon.png"
                      alt="discounts icon"
                      height={49}
                      width={73}
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
    </div>
  );
};
