import { FC, ReactNode, useState } from 'react';
import { cx } from '@emotion/css';

import { FilterableListProps } from './withListFilter';

import { scrollStyle } from '@/utils/style/content';
import { Selector } from '../Elements/Selector';

export interface ListCompProps {
  title?(cnt: number): ReactNode;
  params?: any;
}

interface ListWrpperProps {
  ListComp: FC<ListCompProps>;
  filter?: any;
  name?: string;
  className?: string;
}

const order = [
  { name: '모락인기순', id: 'popular' },
  { name: '최신순', id: 'recent' },
];

export const withScrollLoadOrder = <T extends FilterableListProps>({
  ListComp,
  filter,
  className,
  name, // 리스트에 따른 구분이 필요할 때 -> order 종류 by name
}: ListWrpperProps) => {
  return function Inner(props: T) {
    const { size = 50, ...filter_rest } = filter;
    const [offset, setOffset] = useState(0);

    const queryParams = { ...filter_rest, size, offset };

    return (
      <div className={cx(className, scrollStyle)}>
        <ListComp
          {...props}
          params={queryParams}
          title={cnt => (
            <ListResultTitle
              cnt={cnt}
              extra={<Selector options={order} deafultValue="popular" />}
            />
          )}
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
