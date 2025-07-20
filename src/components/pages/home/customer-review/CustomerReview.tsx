import styles from './CustomerReview.module.css';
import { Card, Button, Text } from '@/components/ui';
import { Review } from '@/types';

export const CustomerReview = () => {
  const reviewList: Review[] = [
    {
      services: '병원동행 서비스',
      variant: 'hospital',
      profileImg: 'https://randomuser.me/api/portraits/women/1.jpg',
      name: '최*민',
      ratings: '⭐️⭐️⭐️⭐️⭐️ 5.0',
      details: '(어르신, 70대, 경기도, 🙋‍)',
      commentTitle: '마음의 짐을 덜어주는 서비스라 꼭 추천하고 싶어요.',
      commentDescription:
        '예약부터 이동, 설명까지 모두 함께해주셔서 부모님도 저도 안심이 됐어요. 덕분에 멀리 떨어져 있어도 마음이 한결 가벼웠습니다.',
    },
    {
      services: '식사도움 서비스',
      variant: 'meal',
      profileImg: 'https://randomuser.me/api/portraits/men/2.jpg',
      name: '김*수',
      ratings: '⭐️⭐️⭐️⭐️⭐️ 5.0',
      details: '(어르신, 80대, 서울, 👴)',
      commentTitle: '정성껏 도와주셔서 식사가 즐거워졌어요.',
      commentDescription:
        '편식도 많으셨는데 다양하게 챙겨주셔서 좋아하세요. 감사해요!',
    },
    {
      services: '운동도움 서비스',
      variant: 'exercise',
      profileImg: 'https://randomuser.me/api/portraits/women/3.jpg',
      name: '박*영',
      ratings: '⭐️⭐️⭐️⭐️⭐️ 5.0',
      details: '(어르신, 60대, 부산, 🙆‍♀️)',
      commentTitle: '체력도 회복되고 웃음도 많아졌어요!',
      commentDescription: '운동을 도와주니 활력이 생기셨어요. 적극 추천합니다.',
    },
    {
      services: '목욕도움 서비스',
      variant: 'bath',
      profileImg: 'https://randomuser.me/api/portraits/men/4.jpg',
      name: '이*준',
      ratings: '⭐️⭐️⭐️⭐️⭐️ 5.0',
      details: '(어르신, 90대, 대전, 🛁)',
      commentTitle: '청결하게 도와주셔서 안심됩니다.',
      commentDescription:
        '위험한 부분까지 세심하게 챙겨주셔서 너무 감사합니다.',
    },
    {
      services: '가사도움 서비스',
      variant: 'housekeeping',
      profileImg: 'https://randomuser.me/api/portraits/women/5.jpg',
      name: '정*자',
      ratings: '⭐️⭐️⭐️⭐️⭐️ 5.0',
      details: '(어르신, 70대, 인천, 👵)',
      commentTitle: '집이 늘 깨끗하니 마음도 편안해져요.',
      commentDescription:
        '매번 정성스럽게 정리해주셔서 감동입니다. 믿고 맡기고 있어요.',
    },
  ];

  return (
    <section className={styles.reviewWrapper}>
      <div className="container flex flex-col items-center justify-center ">
        <div className="flex items-center justify-center flex-col gap-4">
          <Text variant="body" as="p" className={styles.primayColor}>
            고객 후기
          </Text>
          <Text variant="subHeading" as="h2">
            어르신의 일상에 꼭 맞는 서비스
          </Text>
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
        </div>

        <div
          className={`${styles.cardContainer} grid sm:grid-cols-1 md:grid-cols-3 gap-6`}
        >
          {reviewList.map((list, index) => (
            <Card key={index} variant="default" className={styles.cardWrapper}>
              <Button variant={list.variant} size="sm" radius="full">
                {list.services}
              </Button>
              <Card.Header>
                <div>
                  <div className={styles.profileWrapper}>
                    <img
                      src={list.profileImg}
                      alt={list.name}
                      className={styles.profileImg}
                    />
                    {list.name} {list.ratings}
                  </div>
                </div>
              </Card.Header>
              <Card.Text>{list.details}</Card.Text>

              <Card.Content>
                <Card.Text> {list.commentTitle}</Card.Text>
                <Card.Text> {list.commentDescription}</Card.Text>
              </Card.Content>
            </Card>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Button
            variant="primary"
            size="md"
            width="310px"
            radius="full"
            className={styles.mdHidden}
          >
            더 많은 후기 보기
          </Button>
        </div>
      </div>
    </section>
  );
};
