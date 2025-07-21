'use client';
import Image from 'next/image';
import styles from './Footer.module.css';
import Link from 'next/link';

const linkList = [
  {
    listName: '이용약관',
    link: '',
  },
  {
    listName: '개인정보 처리방침',
    link: '',
  },
  {
    listName: '재가노인복지센터',
    link: '',
  },
];

export const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className="container flex flex-col gap-4 px-6 py-8">
        <div className={styles.wrapper}>
          <div className={styles.contentWrapper}>
            <Image
              src="/images/footerlogo.png"
              alt="footer logo"
              height={70}
              width={200}
            />
            <div className={styles.iconWrapper}>
              <p>
                돌봄대장재가노인복지센터 | 서울시 강남구 돌봄로 123 | 대표
                홍길동 | 사업자번호 123-45-67890
              </p>
              <div className="flex gap-3 mt-4">
                <Image
                  src="/images/talk.png"
                  alt="Talk Icon"
                  height={30}
                  width={30}
                />
                <Image
                  src="/images/social2.png"
                  alt="Social Icon"
                  height={30}
                  width={30}
                />
                <Image
                  src="/images/blog.png"
                  alt="Blog Icon"
                  height={30}
                  width={30}
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
                    <Link href={list.link}>{list.listName}</Link>
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
