import React from 'react';
import styles from './page.module.css';

export default function Page() {
  const list1 = [
    `필수 항목: 이름, 생년월일, 성별, 연락처(전화번호, 이메일), 주소, 서비스 이용 기록, 결제 정보`,
    `선택 항목: 보호자 정보, 건강 상태 및 돌봄 요청 사항, 선호 서비스 유형 등`,
    `자동 수집: IP 주소, 쿠키, 방문 일시, 이용 기록, 기기 정보 등 수집 방법: 웹사이트 및 앱 회원가입, 서비스 신청서 작성, 상담 신청, 전화 상담, 자동 수집 도구 등`,
  ];

  const list2 = [
    ` 돌봄 서비스(병원동행, 식사도움, 운동도움, 목욕도움, 가사도움 등) 제공 및 관리`,
    `서비스 예약, 스케줄 관리 및 상담`,
    `서비스 이용에 따른 민원처리 및 고객 응대`,
    `신규 서비스 개발 및 맞춤형 서비스 제공`,
    `법령상 의무 이행 및 분쟁 대응`,
  ];

  const list3 = [
    `회원 탈퇴 시까지 보관하며, 탈퇴 후 지체 없이 파기합니다.`,
    `관련 법령에 따라 일정 기간 보관이 필요한 경우 아래와 같이 보관합니다.`,
  ];

  const list4 = [
    ` 계약 또는 청약철회에 관한 기록: 5년`,
    `소비자 불만 또는 분쟁처리에 관한 기록: 3년`,
    `전자금융 거래에 관한 기록: 5년`,
  ];
  const list5 = [
    `문자 및 알림 발송: 문자메시지 발송 대행사`,
    `결제 처리: PG사(전자결제 대행사) ※ 위탁 계약 시 개인정보보호 관련 법규를 준수하도록 관리·감독합니다.`,
  ];

  const list6 = [
    `파기 절차: 보유 기간 종료 시 또는 처리 목적 달성 시 지체 없이 파기`,
    `파기 방법: 전자파일은 복구 불가능한 기술적 방법으로 삭제, 출력물은 분쇄 또는 소각`,
  ];

  const list7 = [
    `개인정보 열람, 정정, 삭제, 처리정지 요구 가능`,
    `만 14세 미만 아동의 경우, 법정대리인을 통해 권리 행사 가능`,
  ];

  const list8 = [
    `쿠키 등 자동 수집 장치를 통해 이용자 맞춤형 서비스를 제공할 수 있음`,
    `이용자는 웹브라우저 설정을 통해 쿠키 저장 거부 가능`,
  ];

  const list9 = [
    `개인정보 보호책임자: 윤나래`,
    `이메일: hello@hjcommunity.com`,
    `고객센터: 1588-2905 (평일 10:00~18:00)`,
  ];

  const list10 = [
    `본 개인정보 처리방침은 2025년 6월 25일부터 적용됩니다.`,
    `내용 추가, 삭제, 수정이 있을 경우 개정 최소 7일 전 홈페이지를 통해 고지합니다.`,
  ];
  return (
    <div className={styles.page}>
      <div className={styles.bannerContainer}>
        <p className={styles.bannerText}>개인정보 처리방침</p>
      </div>
      <div className={styles.contentContainer}>
        <p style={{ fontWeight: '500' }}>개인정보 처리방침</p>
        <br />
        <p className={styles.contentText}>
          돌봄대장(이하 &quot;회사&quot;)은 개인정보보호법 등 관련 법령상의
          개인정보 보호 규정을 준수하며, 이용자의 개인정보를 보호하기 위해
          최선을 다하고 있습니다. 본 개인정보 처리방침은 회사가 제공하는
          돌봄대장 웹사이트 및 모바일 서비스를 이용하는 이용자(이하
          &quot;이용자&quot;)의 개인정보를 어떤 방식으로 수집, 이용, 보관,
          파기하는지에 대해 설명합니다.
        </p>
        <p className={styles.contentText}>
          1. 수집하는 개인정보 항목 및 수집 방법 회사는 서비스 제공을 위해
          다음과 같은 개인정보를 수집합니다.
        </p>
        <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
          {list1.map((item, index) => (
            <li key={index} className={styles.contentText}>
              {item}
            </li>
          ))}
        </ul>
        <p className={styles.contentText}>
          2. 개인정보 수집 및 이용 목적 회사는 수집한 개인정보를 다음의 목적을
          위해 이용합니다.
        </p>
        <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
          {list2.map((item, index) => (
            <li key={index} className={styles.contentText}>
              {item}
            </li>
          ))}
        </ul>
        <p className={styles.contentText}>3. 개인정보의 보유 및 이용 기간</p>
        <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
          {list3.map((item, index) => (
            <li key={index} className={styles.contentText}>
              {item}
            </li>
          ))}
        </ul>

        <ul style={{ listStyle: 'disc', paddingLeft: '40px' }}>
          {list4.map((item, index) => (
            <li key={index} className={styles.contentText}>
              {item}
            </li>
          ))}
        </ul>

        <p className={styles.contentText}>
          4. 개인정보의 제3자 제공 회사는 이용자의 동의 없이 개인정보를 외부에
          제공하지 않으며, 제공이 필요한 경우 사전 동의를 구합니다.
        </p>
        <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
          <li className={styles.contentText}>
            {`예시) 요양보호사 센터 또는 제휴 간병인 플랫폼에 서비스 연계를 위해
            필요한 최소한의 정보 제공`}
          </li>
        </ul>
        <p className={styles.contentText}>
          5. 개인정보 처리 위탁 회사는 원활한 서비스 제공을 위해 다음과 같이
          개인정보 처리 업무를 외부 업체에 위탁할 수 있습니다.
        </p>
        <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
          {list5.map((item, index) => (
            <li key={index} className={styles.contentText}>
              {item}
            </li>
          ))}
        </ul>
        <p className={styles.contentText}>6. 개인정보의 파기 절차 및 방법 </p>
        <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
          {list6.map((item, index) => (
            <li key={index} className={styles.contentText}>
              {item}
            </li>
          ))}
        </ul>
        <p className={styles.contentText}>
          7. 이용자 및 법정대리인의 권리와 그 행사 방법
        </p>
        <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
          {list7.map((item, index) => (
            <li key={index} className={styles.contentText}>
              {item}
            </li>
          ))}
        </ul>
        <p className={styles.contentText}>
          8. 개인정보 자동 수집 장치의 설치·운영 및 거부
        </p>
        <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
          {list8.map((item, index) => (
            <li key={index} className={styles.contentText}>
              {item}
            </li>
          ))}
        </ul>
        <p className={styles.contentText}>9. 개인정보 보호책임자 및 문의처</p>
        <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
          {list9.map((item, index) => (
            <li key={index} className={styles.contentText}>
              {item}
            </li>
          ))}
        </ul>
        <p className={styles.contentText}>10. 고지의 의무</p>
        <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
          {list10.map((item, index) => (
            <li key={index} className={styles.contentText}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
