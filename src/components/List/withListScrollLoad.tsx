import { FC, ReactNode, useState } from 'react';
import { cx } from '@emotion/css';

import { FilterableListProps } from './withListFilter';

import { scrollStyle } from '@/utils/style/content';

export interface ListCompProps {
  title?(cnt: number): ReactNode;
  params?: any;
}

interface ListWrpperProps {
  ListComp: FC<ListCompProps>;
  filter?: any;
  name?: string;
  height?: number;
}

export const withListScrollLoad = <T extends FilterableListProps>({
  ListComp,
  filter,
  height,
  name, // 리스트에 따른 구분이 필요할 때 -> order종류 by name
}: ListWrpperProps) => {
  return function Inner(props: T) {
    const { size = 50, ...rest } = filter;
    const [offset, setOffset] = useState(0);

    const queryParams = { ...rest, size, offset };

    return (
      <div className={cx(scrollStyle, 'flex-1')} style={{ height }}>
        <ListComp
          {...props}
          params={queryParams}
          title={cnt => <ListResultTitle cnt={cnt} />}
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
      <div className="flex items-center gap-2 font-bold text-2xl">
        <span>검색결과</span>
        <span className="text-primary">{cnt}건</span>
      </div>

      {extra}
    </div>
  );
};
