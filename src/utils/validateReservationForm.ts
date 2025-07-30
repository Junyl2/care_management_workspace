import { ReservationFormState } from '@/store/features/reservationFormSlice';

export const validateReservationForm = (
  form: ReservationFormState
): { valid: boolean; message: string } => {
  const requiredFields = [
    { field: form.guardianName, label: '보호자 이름' },
    { field: form.guardianPhone, label: '보호자 연락처' },
    { field: form.userName, label: '사용자 이름' },
    { field: form.userPhone, label: '사용자 연락처' },
    { field: form.serviceDate, label: '서비스 날짜' },
    { field: form.serviceTime, label: '서비스 시간' },
    { field: form.address, label: '주소' },
  ];

  for (const item of requiredFields) {
    if (!item.field || item.field.trim() === '') {
      return { valid: false, message: `${item.label}을(를) 입력해주세요.` };
    }
  }

  // Hospital accompaniment-specific validations
  if (form.serviceName === '병원 동행') {
    if (!form.hospitalName.trim()) {
      return { valid: false, message: '병원명을 입력해주세요.' };
    }
    if (!form.department.trim()) {
      return { valid: false, message: '진료과를 입력해주세요.' };
    }
    if (!form.appointmentDate.trim()) {
      return { valid: false, message: '예약 날짜를 입력해주세요.' };
    }
    if (!form.appointmentTime.trim()) {
      return { valid: false, message: '예약 시간을 입력해주세요.' };
    }
  }

  return { valid: true, message: '' };
};
