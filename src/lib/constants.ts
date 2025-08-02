import { Service, Links } from '@/types';
import { PAGE_URL } from '@/constants/pageUrl';

export const navLinks: Links[] = [
  { name: '홈', path: PAGE_URL.CLIENT.HOME },
  { name: '회사소개', path: PAGE_URL.CLIENT.ABOUT_US },
  { name: '돌봄친구', path: PAGE_URL.CLIENT.CARING_FRIEND },
  { name: '고객후기', path: PAGE_URL.CLIENT.CUSTOMER_REVIEWS },
  { name: '이용방법', path: PAGE_URL.CLIENT.HOW_TO_USE },
  { name: '예약하기', path: PAGE_URL.CLIENT.MAKE_RESERVATION },
  /*  { name: 'Reservation Confirmation', path: '/reservation-confirmation' }, */
];

export const service: Service = {
  name: '서비스',
  path: PAGE_URL.CLIENT.SERVICES,
};

export const serviceLinks: Links[] = [
  { name: '병원 동행', path: PAGE_URL.CLIENT.HOSPITAL_ACCOMPANIMENT },
  { name: '식사 도움', path: PAGE_URL.CLIENT.HELP_WITH_MEAL },
  { name: '가사 도움', path: PAGE_URL.CLIENT.HOUSEWORK_HELP },
  { name: '운동 도움', path: PAGE_URL.CLIENT.EXERCISE_HELP },
  { name: '목욕 도움', path: PAGE_URL.CLIENT.BATH_HELP },
];

export const adminLinks: Links[] = [
  { name: '예약 관리', path: PAGE_URL.ADMIN.RESERVATION_MANAGEMENT },
  { name: '리뷰 관리', path: PAGE_URL.ADMIN.REVIEW_MANAGEMENT },
  { name: '기사 관리', path: PAGE_URL.ADMIN.ARTICLE_MANAGEMENT },
];
