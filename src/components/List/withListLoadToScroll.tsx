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

    const [page, setPage] = useState(0);
    const pageCount = page + 1;

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
        {range(pageCount).map(currentPage => {
          const isLastIndex = page === currentPage;

          return (
            <Suspense key={currentPage} fallback={fallback}>
              <ListComp
                {...props}
                params={{ ...params, page: currentPage }}
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
