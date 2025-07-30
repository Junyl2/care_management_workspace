'use client';

import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchCostData } from '@/store/features/costSlice';
import styles from './CostDetailsDesktop.module.css';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

interface CostDetailsDesktopProps {
  serviceName: string;
}

const CostDetailsDesktop: React.FC<CostDetailsDesktopProps> = ({
  serviceName,
}) => {
  const dispatch = useAppDispatch();
  const {
    baseRate,
    nightSurcharge,
    lateNightSurcharge,
    severitySurcharge,
    hourlyRates,
    surchargeStatus,
    status,
    error,
  } = useAppSelector((state) => state.cost);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCostData());
    }
  }, [status, dispatch]);

  if (status === 'loading') return <div>비용 정보를 불러오는 중입니다...</div>;
  if (status === 'failed') return <div>{error}</div>;

  const formattedBase = baseRate.toLocaleString();
  const formattedSeverity = severitySurcharge.toLocaleString();
  const nightRate = hourlyRates['18:00-22:00'] || 0;
  const lateRate = hourlyRates['06:00-08:00'] || 0;

  const renderBadge = (label: string) => {
    if (label.includes('가능')) {
      return (
        <span className={styles.badgeWarning}>
          <FaExclamationCircle style={{ marginRight: 4 }} />
          {label}
        </span>
      );
    }
    return (
      <span className={styles.badge}>
        <FaCheckCircle style={{ marginRight: 4 }} />
        {label}
      </span>
    );
  };

  const severityCriteria = [
    '휠체어 또는 침대 생활',
    '1인 이동 불가능 (도움 없이 침대 → 차 이동 불가)',
    '인지 저하로 낯선 장소/사람에 거부 반응 심함',
    '산소통, 인공도뇨, 장루 등의 의료기기 필수',
    '복잡한 병원 내 동선 (검사/접수 다수 이동)',
  ];

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.mainHeader}>
        {serviceName} 결제 시 비용 추가 되는 내용
      </h2>

      <div className={styles.section}>
        <p className={styles.costDescription}>
          *중증가산 시간당 {formattedSeverity}원 추가
        </p>
      </div>

      <div className={styles.section}>
        <h3 className={styles.surchargeTitle}>아침 요금 안내</h3>
        <p className={styles.costDescription}>
          돌봄대장 서비스는 아침 시간(06:00~08:00) 이용 시, 기본 요금의{' '}
          {(lateNightSurcharge * 100).toFixed(0)}% 할증이 적용됩니다.
        </p>
        <ul className={styles.bulletList}>
          <li>기본 요금: 시간당 {formattedBase}원</li>
          <li>
            아침 요금: 시간당{' '}
            {(baseRate + baseRate * lateNightSurcharge).toLocaleString()}원
          </li>
          <li>
            ※ 예약 시간에 아침 시간 구간이 포함될 경우, 해당 시간은 자동으로
            할증이 적용되어 요금이 계산됩니다.
          </li>
        </ul>
      </div>

      <div className={styles.section}>
        <h3 className={styles.surchargeTitle}>야간 요금 안내</h3>
        <p className={styles.costDescription}>
          돌봄대장 서비스는 야간 시간(18:00~22:00) 이용 시, 기본 요금의{' '}
          {(nightSurcharge * 100).toFixed(0)}% 할증이 적용됩니다.
        </p>
        <ul className={styles.bulletList}>
          <li>기본 요금: 시간당 {formattedBase}원</li>
          <li>
            야간 요금: 시간당{' '}
            {(baseRate + baseRate * nightSurcharge).toLocaleString()}원
          </li>
          <li>
            ※ 예약 시간에 야간 구간이 포함될 경우, 해당 시간은 자동으로 할증이
            적용되어 요금이 계산됩니다.
          </li>
          <li>
            ※ 예: 17:00~19:00 이용 시 →<br />
            17:00~18:00(일반 {formattedBase}원) + 18:00~19:00(야간{' '}
            {nightRate.toLocaleString()}원) = 총{' '}
            {(baseRate + nightRate).toLocaleString()}원
          </li>
        </ul>
      </div>

      <div className={styles.section}>
        <h3 className={styles.severityTitle}>중증 가산 기준 설정안</h3>
        <ul className={styles.checkList}>
          {severityCriteria.map((description, index) => (
            <li key={index} className={styles.checkItem}>
              <span className={styles.description}>{description}</span>
              <span className={styles.status}>
                {renderBadge(surchargeStatus.severity)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CostDetailsDesktop;
