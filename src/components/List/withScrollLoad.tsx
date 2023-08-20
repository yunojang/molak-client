import {
  FC,
  ReactNode,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from 'react';
import { cx } from '@emotion/css';

import { scrollStyle } from '@/utils/style/content';
import Intersection from '../Elements/Intersection/Intersection';
import { Spinner } from '../Elements/Spinner';
import { ListResultTitle } from './ListTitle';

import { PagableListProps } from './types';
import { throttle } from '@/utils/timing/throttle';

interface ListWrpperProps<T> {
  ListComp: FC<T>;
  filter?: any;
  className?: string;
  titleExtra?: ReactNode;
  fallback?: ReactNode;
  hasTitle?: boolean;
}

export const withScrollLoad = <T extends PagableListProps>({
  ListComp, // only accmulate list... -> 리팩토링 필요
  filter = {},
  className, // container className
  titleExtra,
  hasTitle,
  fallback = <Spinner pad={12} size={44} color="#888" />,
}: ListWrpperProps<T>) => {
  return function Inner(props: T) {
    const [initRender, setInitRender] = useState(false);
    useEffect(() => setInitRender(true), []);

    const { size = 50, ...filter_rest } = filter;
    const [offset, setOffset] = useState(0);

    const onIntersection = useMemo(
      () => throttle(() => setOffset(prev => prev + size), 100),
      [size],
    );

    const params = { ...filter_rest, size, offset };

    return (
      <div className={cx(className, scrollStyle)}>
        <ListComp
          {...props}
          params={params}
          title={
            hasTitle
              ? cnt => <ListResultTitle cnt={cnt} extra={titleExtra} mb={5} />
              : undefined
          }
          pager={(_, isEnd, isLoading) => (
            <Intersection
              isShow={!isLoading}
              isActive={!isEnd && initRender}
              fallback={fallback}
              onIntersection={() => onIntersection()}
            >
              <div className="h-[64px]" />
            </Intersection>
          )}
        />
      </div>
    );
  };
};
