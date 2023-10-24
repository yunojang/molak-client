import { ReactNode } from 'react';

export interface PagableListProps {
  title?(cnt: number, isLoading?: boolean): ReactNode;
  pager?(pageCnt: number, isEnd?: boolean, isLoading?: boolean): ReactNode;
  params?: any;
}

export interface InfiniteListProps {
  pager?(pageCnt: number, isEnd?: boolean): ReactNode;
  params?: any;
  gap?: number;
}

export interface ListProps {
  params?: any;
  isLoading?: boolean;
}

export interface ViewListProps {
  data: any[];
  gap?: number;
  onSelect?(item: any, id: string): void;
}
