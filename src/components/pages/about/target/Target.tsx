import styles from './Target.module.css';
import { Card } from '@components/ui';
export const Target = () => {
  const yearLists = [
    {
      year: 2021,
      description: '돌봄대장 기획 시작 – “부모님을 위한 서비스”',
    },
    {
      year: 2022,
      description: '노노케어 실증 – 시니어가 시니어를 돕다',
    },
    {
      year: 2023,
      description: '돌봄친구 매칭 시스템 개발 및 시범 운영',
    },
    {
      year: 2024,
      description:
        '전국 17개 시도, 80개 돌봄네트워크 구축 / 특허 및 상표 등록 완료',
    },
    {
      year: 2025,
      description: '누적 이용자 6,000명 돌파 / 건강회복 기반 서비스 도입',
    },
  ];
  return (
    <div className={`container ${styles.mainContainer}`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h3 className="primary">우리의 여정</h3>
          <h1>
            돌봄대장은 특허 등록된 매칭 시스템과 상표권을 보유한 공식 돌봄
            브랜드입니다.
          </h1>
        </div>
        <div className={`grid grid-cols-1  ${styles.wrapper}`}>
          {yearLists.map((list) => (
            <Card key={list.year} className={styles.cardContainer}>
              <div>
                <Card.Text className={styles.year}>{list.year}</Card.Text>
              </div>
              <div>
                <Card.Text className={styles.description}>
                  {list.description}
                </Card.Text>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
