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
  className?: string;
}

export const withListScrollLoad = <T extends FilterableListProps>({
  ListComp,
  filter,
  className,
  name, // 리스트에 따른 구분이 필요할 때 -> order종류 by name
}: ListWrpperProps) => {
  return function Inner(props: T) {
    const { size = 50, ...rest } = filter;
    const [offset, setOffset] = useState(0);

    const queryParams = { ...rest, size, offset };

    return (
      <div className={cx(className, scrollStyle, 'flex-1')}>
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
      <div className="flex items-center gap-2 text-2xl font-bold">
        <span>검색결과</span>
        <span className="text-primary">{cnt}건</span>
      </div>

      {extra}
    </div>
  );
};
