import { Content } from '../content/types/dto';
import { Feed } from '../feed/types/dto';
import { Discover } from '../find/types';
import { Intro } from './types/dto';

import { range } from '@/utils/range';

// temp mock data
export const intro1: Intro = {
  image: '/asset/images/molak_intro.png',
  text: '다양한 장르의\n웹드라마를 감상하세요',
  description: '모락에서 직접 선정한 장르별로 원하는 웹드라마를 시청하세요',
  button_text: 'MOLAK소개',
  link: '/about',
};

export const intro2: Intro = {
  image: '/asset/images/intro_1.png',
  text: '내가 드라마 속 주인공이 된다면? \n B현실 유튜버',
  item_id: '1',
  button_text: '보러가기',
};

export const intro3: Intro = {
  image: '/asset/images/intro_2.png',
  text: '좌충우돌 직장생활',
  item_id: '1',
  button_text: '보러가기',
};

export const introes: Intro[] = [intro1, intro2, intro3];

export const content: Content = {
  id: '1',
  title: '[일찐과 찐따 외전] 1000만원을 주는 5억년 버튼 ',
  description:
    '일찐과 찐따 외전 - 정말 버튼만 누르면 1000만원을 준다고? 그런데,,',
  provider: '하이틴 에이저 Hi-teenager', // 혹은 ProviderObject
  thumbnail: '/asset/images/thumb_temp.png',
};

export const contents: Content[] = range(15, () => content);

export const feeds: Feed[] = [
  { name: 'NEW! 신작 소식', id: '1', items_list: contents },
  { name: '핫한 로맨스 웹 드라마 모음.zip', id: '2', items_list: contents },
  {
    name: '배꼽조심! 시간 가는줄 모르는 코미디',
    id: '3',
    items_list: contents,
  },
];

export const discover: Discover = {
  genres: [
    '코미디',
    '로맨스',
    '드라마',
    '일상',
    '액션',
    '판타지',
    '스릴러',
    '시대물',
  ],
  tags: [
    '학원',
    '대학',
    '수위',
    '일진',
    '찐따',
    '연애',
    '공감',
    '복수',
    '친구',
    '감동',
    '직업',
  ],
  types: ['시리즈', '단편'],
};
