import { Content } from './features/content/types/dto';

export interface PagableContent<DTO extends object> {
  content: DTO[];
  totalElements: number;
  totalPages: number;
}

export interface Idable {
  id: number;
}

export interface Nameable {
  name: string;
}

export interface ListClientProps {
  params?: any;
}

export interface Domain {
  id: string;
}

export interface LayoutProps {
  children?: React.ReactNode | React.ReactNode[];
}

export interface ContentResponse {
  content: Content[];
  totalElements: number;
  totalPages: number;
}
