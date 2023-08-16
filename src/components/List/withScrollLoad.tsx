import { FC, ReactNode, useState } from 'react';
import { cx } from '@emotion/css';

import { FilterableListProps } from './withListFilter';

import { scrollStyle } from '@/utils/style/content';

export interface ListCompProps {
  title?(cnt: number, isLoading?: boolean): ReactNode;
  pager?(pageCnt: number, isEnd?: boolean, isLoading?: boolean): ReactNode;
  params?: any;
}

interface ListWrpperProps<T> {
  ListComp: FC<T>;
  filter?: any;
  className?: string;
  titleExtra?: ReactNode;
  // name?: string;
}

export const withScrollLoad = <T extends FilterableListProps>({
  ListComp,
  filter,
  className,
  titleExtra,
}: // name, // 리스트에 따른 구분이 필요할 때 -> order 종류 by name
ListWrpperProps<T>) => {
  return function Inner(props: T) {
    const { size = 50, ...filter_rest } = filter;
    const [offset, setOffset] = useState(0);

    const params = { ...filter_rest, size, offset };

    return (
      <div className={cx(className, scrollStyle)}>
        <ListComp
          {...props}
          params={params}
          title={cnt => <ListResultTitle cnt={cnt} extra={titleExtra} />}
          // bottom loader // props: onIntersection, show, fallback
          pager={(_, isEnd, isLoading) => <div></div>}
        />
      </div>
    );
  };
};

interface ListTitleProps {
  cnt?: number;
  extra?: ReactNode;
}

const ListResultTitle: FC<ListTitleProps> = ({ cnt, extra }) => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-2 text-2xl font-bold">
        <span>검색결과</span>
        <span className="text-primary">{cnt}건</span>
      </div>

      {extra}
    </div>
  );
};
