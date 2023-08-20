import { FC, useEffect, useState } from 'react';
import { queryClient } from '@/lib/react-query';

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
  // const cached = queryClient.getQueryData([
  //   'contents',
  //   JSON.stringify(params),
  // ]) as { content: Content[] } | undefined;

  const [accContents, setAccContents] = useState<Content[]>([]);
  const { totalElements, totalPages, isEnd, isLoading } = useContents(params, {
    suspense: false,
    onSuccess:
      // cached ? undefined :
      ({ content }) => setAccContents(prev => prev.concat(content)),
  });

  // useEffect(() => {
  //   if (cached) setAccContents(prev => prev.concat(cached.content));
  // }, [cached]);

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
