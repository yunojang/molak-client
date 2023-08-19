import { FC, ReactNode, useState, useEffect } from 'react';
import { cx } from '@emotion/css';

import { FilterableListProps } from './withListFilter';

import { scrollStyle } from '@/utils/style/content';
import Intersection from '../Elements/Intersection/Intersection';
import { Spinner } from '../Elements/Spinner';

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
  filter = {},
  className,
  titleExtra,
}: // name, // 리스트에 따른 구분이 필요할 때 -> order 종류 by name
ListWrpperProps<T>) => {
  return function Inner(props: T) {
    const { size = 50, ...filter_rest } = filter;
    const [offset, setOffset] = useState(0);

    const params = { ...filter_rest, size, offset };

    const [initRender, setInitRender] = useState(false);
    useEffect(() => setInitRender(true), []);

    return (
      <div className={cx(className, scrollStyle)}>
        <ListComp
          {...props}
          params={params}
          title={cnt => <ListResultTitle cnt={cnt} extra={titleExtra} mb={5} />}
          // bottom loader // props: onIntersection, show, fallback
          pager={(_, isEnd, isLoading) => (
            <Intersection
              isShow={!isLoading}
              isActive={!isEnd && initRender}
              fallback={<Spinner pad={15} size={50} color="#aaa" />}
              onIntersection={() => setOffset(prev => prev + size)}
            >
              <div className="h-[130px]" />
            </Intersection>
          )}
        />
      </div>
    );
  };
};

interface ListTitleProps {
  cnt?: number;
  extra?: ReactNode;
  mb?: number;
}

const ListResultTitle: FC<ListTitleProps> = ({ cnt, extra, mb = 0 }) => {
  return (
    <div className="flex justify-between" style={{ marginBottom: mb * 4 }}>
      <div className="flex items-center gap-2 text-2xl font-bold">
        <span>검색결과</span>
        <span className="text-primary">{cnt}건</span>
      </div>

      {extra}
    </div>
  );
};
