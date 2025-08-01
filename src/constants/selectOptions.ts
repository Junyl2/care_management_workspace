import { type PickerOption } from '@/types/global';

export const SORTING_STATUS_OPTIONS: PickerOption[] = [
  { value: 'newest', label: '최신순' },
  { value: 'oldest', label: '오래된 순 정렬' },
];

export const SERVICE_TYPE_OPTIONS: PickerOption[] = [
  { value: 'all', label: '전체' },
  { value: 'hospitalRegistration', label: '병원동행' },
  { value: 'meal', label: '식사도움' },
  { value: 'housework', label: '가사도움' },
  { value: 'exercise', label: '운동도움' },
  { value: 'bath', label: '목욕도움' },
];