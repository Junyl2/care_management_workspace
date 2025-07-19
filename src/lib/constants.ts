import { NavLink, ServiceLink, Service } from '@/types';

export const navLinks: NavLink[] = [
  { name: '홈', path: '/' },
  { name: '회사소개', path: '/about-us' },
  { name: '돌봄친구', path: '/caring-friend' },
  { name: '고객후기', path: '/customer-reviews' },
  { name: '이용방법', path: '/how-to-use' },
  { name: '예약하기', path: '/make-reservation' },
  /*  { name: 'Reservation Confirmation', path: '/reservation-confirmation' }, */
];

export const service: Service = {
  name: '서비스',
  path: '/services',
};

export const serviceLinks: ServiceLink[] = [
  { name: '병원 동행', path: '/services/hospital-accompaniment' },
  { name: '식사 도움', path: '/help-with-meal' },
  { name: '가사 도움', path: '/services/housework-help' },
  { name: '운동 도움', path: '/services/exercise-help' },
  { name: '목욕 도움', path: '/services/bath-help' },
];
