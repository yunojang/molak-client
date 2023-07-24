import { FC, ReactNode, Suspense } from 'react';
import { useQueryString } from '@/hooks/useQueryString';

import { ErrorFallback } from '@/components/Elements/ErrorFallback';
import { Pagination } from '@/components/Elements/Pagination';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Skeleton } from '@chakra-ui/react';
import { FilterableListProps } from './withListFilter';

export interface ListCompProps {
  isSkeleton?: boolean;
  title?(cnt: number): ReactNode;
  pager?(cnt: number): ReactNode;
  params?: any;
  onSelect?(id: string): void;
}

export const withListDecorator = <T extends FilterableListProps>(
  ListComp: FC<ListCompProps>,
  params: any = {},
) => {
  return function Inner(props: T) {
    const [page, setPage] = useQueryString('page', '1');
    const queryParams = { ...params, size: params.size ?? 10, page: +page - 1 };

    return (
      <ErrorBoundary fallback={<ErrorFallback />}>
        <Suspense
          fallback={
            <ListComp
              {...props}
              isSkeleton
              params={{ ...queryParams, page: 0 }}
              title={() => <ListTitle isSkeleton />}
              pager={p => <Pagination totalPage={p} currentPage={+page} />}
            />
          }
        >
          <ListComp
            {...props}
            params={queryParams}
            title={cnt => <ListTitle cnt={cnt} />}
            pager={count => (
              <Pagination
                totalPage={count}
                currentPage={+page}
                onChange={p => setPage(String(p))}
              />
            )}
          />
        </Suspense>
      </ErrorBoundary>
    );
  };
};

interface ListTitleProps {
  cnt?: number;
  extra?: ReactNode;
  isSkeleton?: boolean;
}

const ListTitle: FC<ListTitleProps> = ({ cnt, extra, isSkeleton }) => {
  if (isSkeleton) return <Skeleton width="50px" height="20px" />;

  return (
    <div className="flex justify-between mb-2">
      <div className="flex items-center gap-1 font-bold">
        <span className="text-lg">조회결과</span>
        <span>총</span>
        <span className="text-red-500">{cnt}건</span>
      </div>

      {extra}
    </div>
  );
};
