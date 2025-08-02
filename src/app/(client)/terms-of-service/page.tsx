import React from 'react';
import styles from './page.module.css';

export default function Page() {
  const list1 = [
    `“이용자”란 이 약관에 따라 회사가 제공하는 서비스를 이용하는 회원 및 비회원을 말합니다.`,
    `“회원”이란 플랫폼에 개인정보를 제공하여 회원 등록을 한 자로, 회사의 서비스를 지속적으로 이용할 수 있는 자를 말합니다.`,
    `“돌봄친구”란 회사가 계약을 통해 매칭한 돌봄 제공자(간병인, 요양보호사 등)를 말합니다.`,
    `“서비스”란 회사가 제공하는 병원동행, 식사보조, 운동지원, 가사도움 등 생활 돌봄 관련 서비스를 의미합니다.`,
  ];

  const list2 = [
    `이 약관은 플랫폼에 게시함으로써 효력을 발생합니다.`,
    `회사는 관련 법령을 위반하지 않는 범위에서 이 약관을 개정할 수 있으며, 개정 시 사전 공지합니다.`,
  ];

  const list3 = [
    `회원가입은 이용자가 회사가 정한 절차에 따라 가입 신청을 하고, 회사가 이를 승낙함으로써 성립됩니다.`,
    `보호자 또는 가족이 고령 이용자를 대신하여 가입할 수 있으며, 이 경우 보호자는 해당 이용자에 대한 법적 책임을 가집니다.`,
  ];

  const list4 = [
    `병원동행 지원`,
    `식사 및 복약 보조`,
    `가사 및 위생 돌봄`,
    `운동 및 산책 동행`,
  ];
  return (
    <div className={styles.page}>
      <div className={styles.bannerContainer}>
        <p className={styles.bannerText}>이용약관</p>
      </div>
      <div className={styles.contentContainer}>
        <p style={{ fontWeight: '500' }}>돌봄대장 이용약관</p>
        <br />
        <p className={styles.contentText}>
          제1조 (목적)
          <br />이 약관은 돌봄대장(이하 “회사”)이 운영하는 웹사이트 및 모바일
          앱(이하 “플랫폼”)을 통해 제공하는 각종 돌봄 서비스(병원동행, 식사도움,
          목욕도움 등)의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및
          책임사항을 규정함을 목적으로 합니다.
        </p>
        <p className={styles.contentText}>제2조 (정의)</p>
        <ul style={{ listStyle: 'none' }}>
          {list1.map((item, index) => (
            <li key={index} className={styles.contentText}>
              {index + 1}. {item}
            </li>
          ))}
        </ul>
        <p className={styles.contentText}>제3조 (약관의 효력 및 변경)</p>
        <ul style={{ listStyle: 'none' }}>
          {list2.map((item, index) => (
            <li key={index} className={styles.contentText}>
              {index + 1}. {item}
            </li>
          ))}
        </ul>
        <p className={styles.contentText}>제4조 (회원가입)</p>
        <ul style={{ listStyle: 'none' }}>
          {list3.map((item, index) => (
            <li key={index} className={styles.contentText}>
              {index + 1}. {item}
            </li>
          ))}
        </ul>
        <p className={styles.contentText}>제5조 (서비스 제공 및 변경)</p>
        <p className={styles.contentText}>
          1. 회사는 이용자에게 아래와 같은 서비스를 제공합니다.
        </p>
        <ul style={{ paddingLeft: '3rem' }}>
          {list4.map((item, index) => (
            <li key={index} className={styles.contentText}>
              {item}
            </li>
          ))}
        </ul>
        <p className={styles.contentText}>
          2. 서비스 내용은 회사 사정에 따라 변경될 수 있으며, 이 경우 사전
          고지합니다.
        </p>
        <p className={styles.contentText}>제6조 (서비스 예약 및 결제)</p>
        <p className={styles.contentText}>
          1. 이용자는 플랫폼을 통해 희망 일정 및 돌봄 서비스를 예약할 수 있으며,
          예약 시 결제가 진행됩니다.
        </p>
        <p className={styles.contentText}>
          2. 회사는 외부 결제 시스템을 이용하며, 결제 내역은 이용자 계정에서
          확인할 수 있습니다.
        </p>
        <p className={styles.contentText}>제7조 (이용자의 의무)</p>
        <p className={styles.contentText}>
          1. 이용자는 실제 정보에 기반하여 신청해야 하며, 허위 정보 제공 시
          서비스가 제한될 수 있습니다.
        </p>
        <p className={styles.contentText}>
          2. 타인의 개인정보를 무단으로 사용하거나 서비스를 악용해서는 안
          됩니다.
        </p>
        <p className={styles.contentText}>제8조 (취소 및 환불)</p>
        <p className={styles.contentText}>
          1. 예약 취소는 서비스 예정일 기준 최소 24시간 이전까지 가능합니다.
        </p>
        <p className={styles.contentText}>
          2. 당일 취소 또는 돌봄 시작 이후에는 환불이 제한됩니다. 단, 불가피한
          사정이 인정될 경우 회사가 예외를 둘 수 있습니다.
        </p>
        <p className={styles.contentText}>제9조 (회사의 면책)</p>
        <p className={styles.contentText}>
          1. 회사는 천재지변, 통신 장애 등 불가항력 사유로 인한 서비스 중단에
          대해 책임지지 않습니다.
        </p>
        <p className={styles.contentText}>
          2. 돌봄친구의 고의·과실로 인한 피해는 관련 법령 및 책임보험에 따라
          처리됩니다.
        </p>
        <p className={styles.contentText}>제10조 (분쟁 해결)</p>
        <p className={styles.contentText}>
          1. 회사와 이용자 간 분쟁은 상호 협의를 통해 해결합니다.
        </p>
        <p className={styles.contentText}>
          2. 협의가 어려운 경우 민사소송법상 관할 법원에 제소할 수 있습니다.
        </p>

        <br />
        <br />
        <p className={styles.contentText}>
          부칙
          <br />이 약관은 2025년 6월 25일부터 시행합니다.
        </p>
      </div>
    </div>
  );
}
