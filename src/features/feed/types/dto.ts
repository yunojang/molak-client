import { Domain } from '@/types';
import { Content, RecommendContent } from '@/features/content/types/dto';

export interface Feed extends Domain {
  name: string;
  items_list: Content[];
}

export interface RecommendFeed extends Domain {
  name: string;
  items_list: RecommendContent[];
}
