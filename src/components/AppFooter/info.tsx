import React from 'react';

import { ROLE } from '@/lib/auth/Authorization';
import { GrInstagram, GrTwitter } from 'react-icons/gr';

export interface FooterInfoObject {
  name: string;
  path?: string;
  children?: FooterInfoObject[];
  auth?: ROLE;
}

export interface SocialItem {
  name?: string;
  icon: React.ReactNode;
  path?: string;
}

export const footer_menu: FooterInfoObject[] = [
  {
    name: '모락',
    children: [
      { name: '모락 소개', path: '/about' },
      { name: '모락 서비스 방침', path: '/rule' },
    ],
  },
  {
    name: '서비스',
    children: [{ name: '장르 검색', path: '/customer' }],
  },
  {
    auth: 'USER',
    name: '프로필',
    children: [
      { name: '내 정보', path: '/profile' },
      { name: '최근 본 컨텐츠', path: '/profile/recent' },
      { name: '좋아요', path: '/profile/like' },
    ],
  },
];

export const footer_info: FooterInfoObject[] = [
  {
    name: '개인정보 처리방침',
    path: '/privacy',
  },
  {
    name: '이용약관',
    path: '/terms',
  },
  {
    name: '자주 묻는 질문',
    path: '/faq',
  },
];

export const social_info: SocialItem[] = [
  {
    name: 'twitter',
    icon: <GrTwitter size={30} />,
    path: 'https://twitter.com/molakcorp',
  },
  {
    name: 'instagram',
    icon: <GrInstagram size={30} />,
    path: 'https://www.instagram.com/molakcorp/',
  },
];

export const info_text: string[] = [
  '모락은 크리에이터의 권리를 가장 중요시합니다.',
  '저희 컨텐츠로 인해 어려움을 겪는 크리에이터가 있다면 언제든지 문의해주세요.',
  '소중한 컨텐츠를 제작해주시는 모든 웹드라마 크리에이터분들께 감사드립니다.',
];
