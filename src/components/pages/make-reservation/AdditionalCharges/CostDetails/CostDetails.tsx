import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchCostData } from '@/store/features/costSlice';
import styles from './CostDetails.module.css';
import { IoCheckmark } from 'react-icons/io5';

interface CostDetailsProps {
  serviceName: string;
}

const CostDetails: React.FC<CostDetailsProps> = ({ serviceName }) => {
  const dispatch = useAppDispatch();
  const {
    baseRate,
    nightSurcharge,
    lateNightSurcharge,
    severitySurcharge,
    hourlyRates,
    status,
    error,
  } = useAppSelector((state) => state.cost);

  // Fetch cost data when the component mounts
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCostData());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading cost data...</div>;
  }

  if (status === 'failed') {
    return <div>{error}</div>;
  }

  // Format values for display
  const formattedBaseRate = baseRate ? baseRate.toLocaleString() : 'N/A';
  const formattedSeveritySurcharge = severitySurcharge
    ? severitySurcharge.toLocaleString()
    : 'N/A';

  // Safely access hourly rates or default to 0 if unavailable
  const nightRate = hourlyRates['18:00-20:00'] || 0;
  const lateNightRate = hourlyRates['22:00-06:00'] || 0;

  // Calculate surcharge percentages
  const nightSurchargePercentage = nightSurcharge ? nightSurcharge * 100 : 0;
  const lateNightSurchargePercentage = lateNightSurcharge
    ? lateNightSurcharge * 100
    : 0;

  // Calculate total charges including surcharges
  const totalNightCharge = baseRate + nightRate + (severitySurcharge || 0);
  const totalLateNightCharge = lateNightRate * 2 + (severitySurcharge || 0);

  const renderSeverityCriteria = (criteria: string[]) => {
    return criteria.map((criterion, index) => (
      <li key={index}>
        <IoCheckmark /> {criterion}
      </li>
    ));
  };

  const renderCostSection = (
    title: string,
    surchargePercentage: number,
    rate: number,
    totalCharge: number,
    example: string
  ) => {
    return (
      <div className={styles.section}>
        <h3 className={styles.surchargeTitle}>{title}</h3>
        <ul className={styles.bulletList}>
          <li>{example}</li>
          <li>시급: {rate ? rate.toLocaleString() : 'N/A'}원</li>
          <li>합계: {totalCharge.toLocaleString()}원</li>
          <li>할증 비율: {surchargePercentage}%</li>
        </ul>
      </div>
    );
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.mainHeader}>
        {serviceName} 결제 시 비용 추가 안내
      </h2>

      <div className={styles.section}>
        <p className={styles.costDescription}>
          기본 요금: {formattedBaseRate}원
        </p>
        <p className={styles.costDescription}>중증가산 시간당 5,000원 추가</p>
      </div>

      {renderCostSection(
        '야간 (18:00~20:00) 20% 할증',
        nightSurchargePercentage,
        nightRate,
        totalNightCharge,
        `예) 고객이 17:00~19:00 서비스 선택하면 17:00~18:00는 비용 ${formattedBaseRate}원, 19:00~20:00는 ${nightRate.toLocaleString()}원`
      )}

      {renderCostSection(
        '심야 (22:00~06:00) 30% 할증',
        lateNightSurchargePercentage,
        lateNightRate,
        totalLateNightCharge,
        `예) 고객이 05:00~09:00 서비스 선택하면 05:00~06:00는 비용 ${lateNightRate.toLocaleString()}원, 06:00~09:00는 ${lateNightRate.toLocaleString()}원`
      )}

      <div className={styles.section}>
        <h3 className={styles.severityTitle}>중증 가산 기준 설정안</h3>
        <ul className={styles.checkList}>
          {renderSeverityCriteria([
            '휠체어 또는 침대 생활',
            '1인 이동 불가능 (도움 없이 침대 → 차 이동 불가)',
            '인지 저하로 낯선 장소/사람에 거부 반응 심함',
            '산소통, 인공도뇨, 장루 등의 의료기기 필수',
            '복잡한 병원 내 동선 (검사/접수 다수 이동)',
          ])}
        </ul>
      </div>
    </div>
  );
};

export default CostDetails;
