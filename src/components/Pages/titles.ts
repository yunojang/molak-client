import { PagesName } from './pages';

export interface TitleObject {
  text: string;
  description?: string;
}

export const detail_titles: { [k in PagesName]: TitleObject } = {
  tool_admin: {
    text: '공구 관리/ 보기, 업데이트',
    description: '공구를 관리합니다.',
  },
  machine_admin: {
    text: '절삭머신 관리/ 보기, 업데이트',
    description: '절삭머신을 관리합니다.',
  },
  recommend_admin: { text: '추천/ 관리', description: '추천을 관리합니다.' },
  tool_group_admin: {
    text: '공구그룹 관리/ 보기, 업데이트',
    description: '공구그룹을 관리합니다.',
  },
  material_admin: {
    text: '소재 관리/ 보기, 업데이트',
    description: '소재를 관리합니다.',
  },
  step_admin: {
    text: '공구단계 관리/ 보기, 업데이트',
    description: '공구단계를 관리합니다.',
  },
  user_admin: {
    text: '사용자 관리/ 보기, 업데이트',
    description: '사용자를 관리합니다.',
  },

  tool: { text: '공구 상세정보', description: '공구 상세정보를 확인합니다.' },
  material: { text: '소재', description: '' },
  machine: { text: '절삭머신', description: '' },
  recommend: { text: '추천/ 관리', description: '' },
};

export const home_titles: { [k in PagesName]: TitleObject } = {
  tool_admin: { text: '공구 관리', description: '공구를 관리합니다.' },
  machine_admin: {
    text: '절삭머신 관리',
    description: '절삭머신을 관리합니다.',
  },
  recommend_admin: { text: '추천/ 관리', description: '추천을 관리합니다.' },
  tool_group_admin: {
    text: '공구그룹 관리',
    description: '공구그룹을 관리합니다.',
  },
  material_admin: {
    text: '소재 관리',
    description: '소재를 관리합니다.',
  },
  step_admin: {
    text: '공구단계 관리',
    description: '공구단계를 관리합니다.',
  },
  user_admin: {
    text: '사용자 관리',
    description: '사용자를 관리합니다.',
  },

  tool: { text: '절삭공구' },
  material: { text: '소재' },
  machine: { text: '절삭머신' },
  recommend: { text: '절삭공구 추천서비스' },
};

export const create_titles: { [k in PagesName]?: TitleObject } = {
  tool_admin: { text: '공구 생성', description: '공구를 생성합니다.' },
  machine_admin: {
    text: '절삭머신 생성',
    description: '절삭머신을 생성합니다.',
  },
  recommend_admin: { text: '추천/ 생성', description: '추천을 생성합니다.' },
  tool_group_admin: {
    text: '공구그룹 생성',
    description: '공구그룹을 생성합니다.',
  },
  material_admin: {
    text: '소재 생성',
    description: '소재를 생성합니다.',
  },
  step_admin: {
    text: '공구단계 생성',
    description: '공구단계를 생성합니다.',
  },
  user_admin: {
    text: '사용자 생성',
    description: '사용자를 생성합니다.',
  },
};
