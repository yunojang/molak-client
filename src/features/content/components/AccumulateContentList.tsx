import { FC, useState } from 'react';

import { useContents } from '../api/getContents';
import { Content } from '../types/dto';

import ContentCard from '@/components/Elements/Card/ContentCard';
import SkeletonContentCardList from '@/components/Elements/Card/SkeletonContentCardList';
import { PagableListProps } from '@/components/List/types';

interface ContentListProps extends PagableListProps {
  columnCount?: number;
  onSelect?(id: string): void;
}

const AccumulateContentList: FC<ContentListProps> = ({
  params,
  columnCount = 4,
  title = () => null,
  pager = () => null,
  onSelect,
}) => {
  const [accContents, setAccContents] = useState<Content[]>([]);
  const { totalElements, totalPages, isEnd, isLoading } = useContents(params, {
    suspense: false,
    onSuccess: ({ content }) => setAccContents(prev => prev.concat(content)),
  });

  const colGap = 5;
  const rowGap = 20;

  return (
    <div>
      {title(totalElements, isLoading)}

      {!accContents.length ? (
        <SkeletonContentCardList
          gap={colGap}
          rowGap={rowGap}
          isCard
          count={40}
          columnCount={columnCount}
        />
      ) : (
        <div
          style={{
            gridTemplateColumns: `repeat(${columnCount}, minmax(0px, 1fr))`,
            rowGap: `${rowGap * 4}px`,
            columnGap: `${colGap * 4}px`,
          }}
          className="grid"
        >
          {accContents.map((content, i) => (
            <ContentCard
              // height={itemHeight}
              content={content}
              key={i}
              isSeperateType
              onClick={() => onSelect?.(content.id)}
            />
          ))}
        </div>
      )}
      {pager(totalPages, isEnd, isLoading)}
    </div>
  );
};

export default AccumulateContentList;
