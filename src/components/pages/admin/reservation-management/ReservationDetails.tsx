import React from 'react'
import styles from './ReservationDetails.module.css'

interface ReservationRecord {
    id?: number;
    serviceType?: string;
    serviceDate?: string;
    serviceTime?: string;
    helperName?: string;
    clientContact?: string;
    discount?: string;
    amount?: string;
}

interface ReservationDetailsProps {
    record?: ReservationRecord;
}

const ReservationDetails: React.FC<ReservationDetailsProps> = ({ record }) => {
    return (
        //TODO: To change the content depending on their ServiceType
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>병원 동행 요청 사항</h1>
            </div>
            <div className={styles.details}>
                <div className={styles.detailsRow}>
                    <div className={styles.detailsItem}>
                        <h2>이용자 성함</h2>
                        <p>홍길동</p>
                    </div>
                    <div className={styles.detailsItem}>
                        <h2>이용자 연락처</h2>
                        <p>010-000-0000</p>
                    </div>
                    <div className={styles.detailsItem}>
                        <h2>자택 주소</h2>
                        <p>서울시 중구 동대문구 휘경동 123, 503호</p>
                    </div>
                </div>
                <div className={styles.detailsRow}>
                    <div className={styles.detailsItem}>
                        <h2>병원 이름</h2>
                        <p>홍길동</p>
                    </div>
                    <div className={styles.detailsItem}>
                        <h2>진료과</h2>
                        <p>내과</p>
                    </div>
                    <div className={styles.detailsItem}>
                        <h2>진료 일시</h2>
                        <p>2025년 6월 30일</p>
                    </div>
                    <div className={styles.detailsItem}>
                        <h2>진료 날씨</h2>
                        <p>11:00 ~ 13:00</p>
                    </div>
                </div>
                <div className={styles.detailsRow}>
                    <div className={styles.detailsItem}>
                        <h2>중증 가산 여부</h2>
                        <p>해당 있음</p>
                    </div>
                    <div className={styles.detailsItem}>
                        <h2>중증 여부 입력</h2>
                        <p>복잡한 병원 내 동선</p>
                    </div>
                    <div className={styles.detailsItem}>
                        <h2>중증 직접 입력</h2>
                        <p>복잡한 병원 내 동선 주의 부탁 드립니다. </p>
                    </div>
                </div>
                <div className={styles.detailsRow}>
                    <div className={styles.detailsItem}>
                        <h2>기타 추가 요청 사항</h2>
                        <p>사용자가 작성한 내용이 들어갑니다. 작성한 내용이 없다면 표기하지 않습니다. <br />
                        사용자가 작성한 내용이 들어갑니다. 작성한 내용이 없다면 표기하지 않습니다.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReservationDetails