import { Content, RecommendContent } from '../content/types/dto';
import { Feed, RecommendFeed } from '../feed/types/dto';
import { Discover } from '../find/types';
import { HotTag } from '../tags/types/dto';
import { Intro } from './types/dto';

import { range } from '@/utils/range';

// temp mock data
export const molak_intro: Intro = {
  image: '/asset/images/molak_intro.png',
  text: '모락을 소개합니다',
  description: '웹드라마 추천 서비스 ',
  button_text: '소개 보러가기',
  link: '/about',
};

export const search_intro: Intro = {
  image: '/asset/images/molak_intro.png',
  text: '모락에서 추천하는 웹드라마',
  description: '모락에서 선별한 웹드라마를 시청하세요',
  button_text: '바로찾기',
  link: '/find',
};

// export const intro2: Intro = {
//   image: '/asset/images/thumb_temp.png',
//   text: '5억년버튼 \n 버튼만 누르면 1000만원을 준다!',
//   item_id: '1',
//   button_text: '보러가기',
// };

// export const intro3: Intro = {
//   image: '/asset/images/intro_2.png',
//   text: '좌충우돌 직장생활',
//   item_id: '1',
//   button_text: '보러가기',
// };

export const introes: Intro[] = [molak_intro, search_intro];

export const content: Content = {
  id: '1',
  title: '브브여행사',
  description: '부산 취향 맞춤 여행, 고객만족 100% 전여친과 여행사를??',
  channel: { id: '1', channelName: '비짓 부산' },
  thumbnailUrl: '/asset/images/thumb_temp2.png',
  videoUrl: 'https://www.youtube.com/watch?v=_rEde994IqY',
  tags: ['여행', '로맨스'],
  videoType: '시리즈',
  episodeId: '8',
};

export const content2: Content = {
  id: '2',
  title: '[일찐과 찐따 외전] 5억년 버튼',
  description:
    '일찐과 찐따 외전 - 정말 버튼만 누르면 1000만원을 준다고? 그런데..',
  channel: { id: '1', channelName: '하이틴 에이저 Hi-teenager' },
  thumbnailUrl: '/asset/images/thumb_temp.png',
  videoUrl: 'https://www.youtube.com/watch?v=ILDjioKRJw4',
  tags: ['일진', '찐따'],
  videoType: '시리즈',
  episodeId: '8',
};

export const content3: Content = {
  id: '3',
  title: '로그원: 스타워즈 스토리',
  description: '마지막 희망을 건 전쟁이 시작된다!',
  channel: { id: '1', channelName: '디즈니, 루카스필름' },
  thumbnailUrl: '/asset/images/thumb.jpeg',
  videoUrl: 'https://www.youtube.com/watch?v=2Rm-cpUNAJU',
  tags: ['스타워즈', 'SF'],
  videoType: '단편',
  episodeId: '8',
};

export const content4: Content = {
  id: '4',
  title: '헤어질 결심',
  description: '짙어지는 의심 깊어지는 관심',
  channel: { id: '1', channelName: '박찬욱, CJ 엔터테인먼트' },
  thumbnailUrl: '/asset/images/thumb.jpeg',
  videoUrl: 'https://www.youtube.com/watch?v=2Rm-cpUNAJU',
  tags: ['로맨스'],
  videoType: '단편',
  episodeId: '8',
};

const episode: Content = { ...content, title: '브브여행사 n화' };
const episode2: Content = { ...content2, title: '5억년 버튼' };

const 추천작: RecommendContent = {
  id: '1',
  content: content3,
  recommend_image: '/asset/images/rec.png',
  recommend_text: '마지막 희망의 저항군',
  background: '#000',
  textColor: '#fff',
  teaser_url: '/asset/videos/t1.mp4',
};

const 추천작2: RecommendContent = {
  id: '2',
  content: content4,
  recommend_image: '/asset/images/rec2.webp',
  recommend_text: '짙어지는 의심 깊어지는 관심',
  background: '#fff',
  textColor: '#000',
  teaser_url: '/asset/videos/t22.mp4',
};

export const contents: Content[] = range(15, () => content);
export const topRank_contents: Content[] = range(8, () => content);
export const recommend_contents: Content[] = range(8, () => content);
export const search_contents: Content[] = range(40, () => content);

export const episodes: Content[] = range(10, () => episode);
export const episodes2: Content[] = range(10, () => episode2);

export const recommend_feeds: RecommendFeed[] = [
  {
    name: '모락 추천작',
    id: '1',
    items_list: range(7, (_, i) => (i % 2 == 0 ? 추천작 : 추천작2)),
  },
];

export const feeds: Feed[] = [
  { name: 'NEW! 신작 소식', id: '1', items_list: contents },
  {
    name: '핫한 로맨스 웹 드라마 모음.zip',
    id: '2',
    items_list: contents,
  },
  {
    name: '배꼽조심! 시간 가는줄 모르는 코미디',
    id: '3',
    items_list: contents,
  },
];

export const discover: Discover = {
  genres: ['코미디', '로맨스', '액션', '판타지/SF', '스릴러'],
  tags: [
    '학원',
    '대학',
    '연애',
    '수위',
    '찐따',
    '일진',
    '복수',
    '친구',
    '공감',
    '직업',
    '감동',
    '일상',
    '교훈',
    '여행',
    '시대극',
    '드라마',
    '스케치',
  ],
  types: ['시리즈', '단편'],
};

export const hot_tagas: HotTag[] = [
  {
    title: '❤️ 두근두근 연애 로맨스',
    items: [
      { name: '로맨스', type: 'genre' },
      { name: '연애', type: 'tags' },
    ],
  },
  {
    title: '📔 요즘대세 스케치 코미디',
    items: [
      { name: '코미디', type: 'genre' },
      { name: '스케치', type: 'tags' },
    ],
  },
  {
    title: '👊 일진과 찐따',
    items: [
      { name: '일진', type: 'tags' },
      { name: '찐따', type: 'tags' },
    ],
  },
  {
    title: '🖊️ 즐거운 학원물',
    items: [{ name: '학원', type: 'tags' }],
  },
  {
    title: '👻 등골오싹 스릴러',
    items: [{ name: '스릴러', type: 'genre' }],
  },
  {
    title: '☕️ 빠른 단편 하나',
    items: [{ name: '단편', type: 'type' }],
  },
];
