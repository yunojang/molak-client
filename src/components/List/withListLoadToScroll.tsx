import { FC, useState, useEffect, useMemo, ReactNode, Suspense } from 'react';
import { cx } from '@emotion/css';

import Intersection from '../Elements/Intersection/Intersection';
import { Spinner } from '../Elements/Spinner';
import { InfiniteListProps } from './types';

import { throttle } from '@/utils/timing/throttle';
import { scrollYStyle } from '@/utils/style/scroll';
import { range } from '@/utils/range';

interface Props<T> {
  ListComp: FC<T>;
  fallback?: ReactNode;
  filter?: any;
  gap?: number;
}

export const withListLoadToScroll = <T extends InfiniteListProps>({
  ListComp,
  fallback = <Spinner pad={12} size={30} color="#888" />,
  filter = { size: 8 },
  gap = 0,
}: Props<T>) => {
  return function Inner(props: T) {
    const [initRender, setInitRender] = useState(false);
    useEffect(() => setInitRender(true), []);

    const [page, setPage] = useState(1);
    const params = { ...filter, page };

    const handleIntersection = useMemo(
      () => throttle(() => setPage(prev => prev + 1), 120),
      [],
    );

    return (
      <div
        className={cx(scrollYStyle, 'flex flex-col')}
        style={{ gap: gap * 4 }}
      >
        {range(page).map(current => {
          const isLastIndex = page === current + 1;

          return (
            <Suspense key={current} fallback={fallback}>
              <ListComp
                {...props}
                params={{ ...params, page: current + 1 }}
                gap={gap}
                pager={(_, isEnd) => (
                  <Intersection
                    isActive={!isEnd && initRender}
                    isShow={!isEnd && isLastIndex}
                    onIntersection={() => handleIntersection()}
                  >
                    <div className="h-14" />
                  </Intersection>
                )}
              />
            </Suspense>
          );
        })}
      </div>
    );
  };
};
