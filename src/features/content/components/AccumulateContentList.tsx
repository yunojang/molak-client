import { FC, useState } from 'react';

import { useContents } from '../api/getContents';
import { Content } from '../types/dto';
import { ListCompProps } from '@/components/List/withScrollLoad';

import ContentCard from '@/components/Elements/Card/ContentCard';
import SkeletonContentCardList from '@/components/Elements/Card/SkeletonContentCardList';

interface ContentListProps extends ListCompProps {
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

  return (
    <div>
      {title(totalElements, isLoading)}

      {!accContents.length ? (
        <SkeletonContentCardList isCard count={40} columnCount={columnCount} />
      ) : (
        <div
          style={{
            gridTemplateColumns: `repeat(${columnCount}, minmax(0px, 1fr))`,
          }}
          className="grid gap-5 gap-y-10"
        >
          {accContents.map((content, i) => (
            <ContentCard
              content={content}
              key={i}
              isCard
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
