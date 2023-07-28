import { Domain } from '@/types';
import { Content } from '@/features/content/types/dto';

export interface Feed extends Domain {
  name: string;
  items_list: Content[];
}
