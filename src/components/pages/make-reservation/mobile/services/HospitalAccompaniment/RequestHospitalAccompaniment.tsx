'use client';

import styles from './RequestHospitalAccompaniment.module.css';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  setField,
  updateSeverityOption,
  updateCheckboxField,
} from '@/store/features/reservationFormSlice';
import { toggleCostBreakdown } from '@/store/features/uiSlice';
import {
  FiCalendar,
  FiClock,
  FiChevronDown,
  FiChevronUp,
} from 'react-icons/fi';
import { useState } from 'react';
import CalendarDrawer from '@/components/ui/BottomDrawer/CalendarDrawer';
import TimePickerDrawer from '@/components/ui/BottomDrawer/TimePickerDrawer';
import CostDetails from '../../../AdditionalCharges/CostDetails/CostDetails';

const RequestHospitalAccompaniment = () => {
  const dispatch = useAppDispatch();
  const form = useAppSelector((state) => state.reservationForm);
  const showCostDetails = useAppSelector((state) => state.ui.showCostDetails);

  const [showCalendar, setShowCalendar] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  // Handle form field changes
  const handleChange = (field: keyof typeof form, value: string | string[]) => {
    console.log(`Field: ${field}, New Value: ${value}`);
    dispatch(setField({ field, value }));
  };

  // Handle checkbox changes (for multiple selections)
  const handleCheckboxChange = (item: string, checked: boolean) => {
    const updatedList = checked
      ? [...(form.hospitalAccompanimentRequests || []), item]
      : (form.hospitalAccompanimentRequests || []).filter((i) => i !== item);
    dispatch(
      updateCheckboxField({
        field: 'hospitalAccompanimentRequests',
        value: updatedList,
      })
    );
  };

  // Handle severity checkbox changes (for multiple selections)
  const handleSeverityCheckboxChange = (item: string, checked: boolean) => {
    const updatedList = checked
      ? [...(form.hospitalSeverityConditions || []), item]
      : (form.hospitalSeverityConditions || []).filter((i) => i !== item);
    dispatch(
      updateCheckboxField({
        field: 'hospitalSeverityConditions',
        value: updatedList,
      })
    );
  };

  // Handle severity option change
  const handleSeverityOptionChange = (option: string) => {
    dispatch(updateSeverityOption({ severity: option }));
    console.log('SEVERITY OPTIONS:', option);
  };

  // Toggle cost breakdown visibility
  const handleToggleCostBreakdown = () => {
    dispatch(toggleCostBreakdown());
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeader}>병원 동행 요청 사항</h1>
      <p className={styles.subHeader}>
        병원 동행 시 필요한 정보들을 작성해 주세요.
      </p>

      {/* Hospital Name */}
      <div className={styles.formGroup}>
        <label className={styles.label}>
          병원 이름
          {!form.hospitalName && <span className={styles.required}>*</span>}
        </label>
        <input
          type="text"
          className={styles.textInput}
          placeholder="예) 서울 성심 병원"
          value={form.hospitalName || ''}
          onChange={(e) => handleChange('hospitalName', e.target.value)}
        />
      </div>

      {/* Department */}
      <div className={styles.formGroup}>
        <label className={styles.label}>
          진료과
          {!form.department && <span className={styles.required}>*</span>}
        </label>
        <input
          type="text"
          className={styles.textInput}
          placeholder="정형외과"
          value={form.department || ''}
          onChange={(e) => handleChange('department', e.target.value)}
        />
      </div>

      {/* Appointment Date */}
      <div className={styles.formGroup}>
        <label className={styles.label}>
          진료날짜
          {!form.appointmentDate && <span className={styles.required}>*</span>}
        </label>
        <div
          className={styles.iconInputWrapper}
          onClick={() => setShowCalendar(true)}
        >
          <input
            type="text"
            className={styles.textInput}
            placeholder="2025.00.00"
            value={form.appointmentDate || ''}
            readOnly
          />
          <FiCalendar className={styles.inputIcon} />
        </div>
      </div>

      {/* Appointment Time */}
      <div className={styles.formGroup}>
        <label className={styles.label}>
          진료시간
          {!form.appointmentTime && <span className={styles.required}>*</span>}
        </label>
        <div
          className={styles.iconInputWrapper}
          onClick={() => setShowTimePicker(true)}
        >
          <input
            type="text"
            className={styles.textInput}
            placeholder="00:00"
            value={form.appointmentTime || ''}
            readOnly
          />
          <FiClock className={styles.inputIcon} />
        </div>
      </div>

      {/* Severity Section */}
      <div className={styles.formGroup}>
        <h3 className={styles.sectionTitle}>중증 가산 여부</h3>
        <p className={styles.sectionSubTitle}>
          *중증 가산 시간당 (5,000원 추가)
        </p>
        <div className={styles.toggleGroup}>
          {['해당 없음', '중증 해당'].map((option) => (
            <button
              key={option}
              type="button"
              className={
                form.hospitalSeverityOption === option
                  ? styles.toggleActive
                  : styles.toggleButton
              }
              onClick={() => handleSeverityOptionChange(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Severity-related Fields when "중증 해당" is selected */}
      {form.hospitalSeverityOption === '중증 해당' && (
        <div className={styles.formGroup}>
          <h4 className={styles.sectionTitle}>중증 여부 입력</h4>
          <div className={styles.checkboxContainer}>
            {[
              '휠체어 또는 침대 생활',
              '1인 이동 불가능',
              '인지 저하, 거부 반응 심함',
              '의료기기 필수',
              '복잡한 병원 내 동선',
              '직접입력',
            ].map((item) => (
              <label key={item} className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={
                    form.hospitalSeverityConditions?.includes(item) || false
                  }
                  onChange={(e) =>
                    handleSeverityCheckboxChange(item, e.target.checked)
                  }
                />
                {item}
              </label>
            ))}
          </div>

          {/* Always show this textarea when "중증 해당" is selected */}
          <label className={styles.label}>중증 여부 입력 </label>
          <textarea
            className={styles.textArea}
            placeholder="직접 입력"
            value={form.hospitalSeverityManualEtc || ''}
            onChange={(e) =>
              handleChange('hospitalSeverityManualEtc', e.target.value)
            }
          />
        </div>
      )}

      {/* Additional Requests Section */}
      <div className={styles.formGroup}>
        <h3 className={styles.sectionTitle}>추가 요청 사항 (복수 선택 가능)</h3>
        <div className={styles.checkboxContainer}>
          {[
            '이동 시 차량 동행 원함',
            '거동 불가',
            '휠체어 이동 필요',
            '기저귀 착용',
            '보호자 동행',
            '검사 있음',
            '서류 발급',
          ].map((item) => (
            <label key={item} className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={
                  form.hospitalAccompanimentRequests?.includes(item) || false
                }
                onChange={(e) => handleCheckboxChange(item, e.target.checked)}
              />
              {item}
            </label>
          ))}
        </div>
      </div>

      {/* Additional Notes Textarea */}
      <div className={styles.formGroup}>
        <label className={styles.label}>기타 추가 요청 사항</label>
        <textarea
          className={styles.textArea}
          placeholder="직접 입력"
          value={form.hospitalAccompanimentEtc || ''}
          onChange={(e) =>
            handleChange('hospitalAccompanimentEtc', e.target.value)
          }
        />
      </div>

      {/* Payment Notice */}
      <div className={styles.paymentNotice} onClick={handleToggleCostBreakdown}>
        결제 시 비용 추가되는 내용 안내
        {showCostDetails ? (
          <FiChevronUp size={24} />
        ) : (
          <FiChevronDown size={24} />
        )}
      </div>

      {/* Show the cost breakdown details if toggled */}
      {showCostDetails && <CostDetails serviceName={form.serviceName} />}

      {/* Calendar Drawer */}
      <CalendarDrawer
        isVisible={showCalendar}
        onClose={() => setShowCalendar(false)}
        onSelectDate={(date) => handleChange('appointmentDate', date)}
      />

      {/* TimePicker Drawer */}
      <TimePickerDrawer
        isVisible={showTimePicker}
        onClose={() => setShowTimePicker(false)}
        onSelectTime={(time) => handleChange('appointmentTime', time)}
      />
    </div>
  );
};

export default RequestHospitalAccompaniment;
