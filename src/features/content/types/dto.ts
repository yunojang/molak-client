import { Domain } from '@/types';

export interface Content extends Domain {
  title: string;
  description: string;
  provider: string; // 혹은 Provider 매핑
  thumbnail: string;
}
