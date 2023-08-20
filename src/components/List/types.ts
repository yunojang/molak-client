import { ReactNode } from 'react';

export interface PagableListProps {
  title?(cnt: number, isLoading?: boolean): ReactNode;
  pager?(pageCnt: number, isEnd?: boolean, isLoading?: boolean): ReactNode;
  params?: any;
}
