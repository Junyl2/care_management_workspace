'use client';

import styles from './CareTeam.module.css';
import about from '../About.module.css';
import Image from 'next/image';
import { Card } from '@components/ui';

import { useState, useEffect } from 'react';

export const CareTeam = () => {
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

  const employeeList = [
    {
      position: '대표',
      name: '윤나래',
      department: '전략 / 운영 총괄',
      expertise: '브랜드 리더십 & 사회적 연계',
      image: '/assets/images/about/people/representative1.png',
      width: isMobileScreen ? 85 : isTabletScreen ? 170 : 170,
      height: isMobileScreen ? 90 : isTabletScreen ? 174 : 174,
    },
    {
      position: '팀장',
      name: '이의준',
      department: '장기요양 서비스',
      expertise: '현장 실무, 제도 기반 실무 운용',
      image: '/assets/images/about/people/ceo.png',
      width: isMobileScreen ? 85 : isTabletScreen ? 170 : 170,
      height: isMobileScreen ? 90 : isTabletScreen ? 174 : 174,
    },
    {
      position: '팀장',
      name: '김정현',
      department: '상담 & 교육',
      expertise: '서비스 상담, 요양보호사 교육',
      image: '/assets/images/about/people/team-leader-1.png',
      width: isMobileScreen ? 85 : isTabletScreen ? 170 : 170,
      height: isMobileScreen ? 90 : isTabletScreen ? 174 : 174,
    },
    {
      position: '팀장',
      name: '남택민',
      department: '돌봄친구 운영',
      expertise: '현장 매칭, 인력 관리, 피드백 시스템',
      image: '/assets/images/about/people/team-leader-2.png',
      width: isMobileScreen ? 85 : isTabletScreen ? 170 : 170,
      height: isMobileScreen ? 90 : isTabletScreen ? 174 : 174,
    },
    {
      position: '팀장',
      name: '이수현',
      department: '노년학 연구',
      expertise: '노년학 기반 프로그램 설계',
      image: '/assets/images/about/people/empty-profile.png',
      width: isMobileScreen ? 85 : isTabletScreen ? 170 : 170,
      height: isMobileScreen ? 90 : isTabletScreen ? 174 : 174,
    },
    {
      position: '팀장',
      name: '유재순',
      department: '방문간호',
      expertise: '간호 돌봄 영역 설계 및 운영',
      image: '/assets/images/about/people/empty-profile.png',
      width: isMobileScreen ? 85 : isTabletScreen ? 170 : 170,
      height: isMobileScreen ? 90 : isTabletScreen ? 174 : 174,
    },
    {
      position: '팀장',
      name: '유호준',
      department: '현장 서비스',
      expertise: '실시간 현장 응대 및 CS',
      image: '/assets/images/about/people/empty-profile.png',
      width: isMobileScreen ? 85 : isTabletScreen ? 170 : 170,
      height: isMobileScreen ? 90 : isTabletScreen ? 174 : 174,
    },
    {
      position: '팀장',
      name: '성슬기',
      department: '프로덕트 디자인',
      expertise: 'UI/UX, 콘텐츠, 브랜드 디자인',
      image: '/assets/images/about/people/empty-profile.png',
      width: isMobileScreen ? 85 : isTabletScreen ? 170 : 170,
      height: isMobileScreen ? 90 : isTabletScreen ? 174 : 174,
    },
  ];

  return (
    <main className={styles.mainContainer}>
      <section className={`container ${styles.sectionContainer}`}>
        <div className={styles.headingContainer}>
          <div className={styles.headerContent}>
            <h3 className={about.heading}>돌봄대장 팀소개</h3>
            <h1 className={about.subHeading}>돌봄대장을 만드는 사람들</h1>
          </div>
          <p className={about.description}>
            “돌봄 현장을 잘 아는 사람들이 함께 만든 팀입니다. 우리의 길을
            함께해주는 팀원 한 사람 한사람에게, 진심으로 고맙다는 말을
            전합니다.”
          </p>
        </div>
        <div className={`grid grid-cols-2 ${styles.cardContainer}`}>
          {employeeList.map((list) => (
            <Card
              variant="clean"
              key={list.name}
              className={styles.cardWrapper}
            >
              <figure className={styles.cardContent}>
                <Image
                  src={list.image}
                  alt={`${list.name} - ${list.position}`}
                  height={list.height}
                  width={list.width}
                  className={styles.image}
                />
                <figcaption className={styles.figcaption}>
                  <h3
                    className={styles.position}
                    style={{
                      color: list.position === '대표' ? '#9747FF' : 'inherit',
                    }}
                  >
                    {list.position}
                  </h3>

                  <h4 className={styles.name}>{list.name}</h4>
                  <p className={styles.department}>{list.department}</p>
                  <p className={styles.expertise}>{list.expertise}</p>
                </figcaption>
              </figure>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
};
