import { FC, useState } from 'react';

import { useContents } from '../api/getContents';
import { Content } from '../types/dto';

import ContentCard from '@/components/Elements/Card/ContentCard';
import SkeletonContentCardList from '@/components/Elements/Card/SkeletonContentCardList';
import { PagableListProps } from '@/components/List/types';

interface ContentListProps extends PagableListProps {
  columnCount?: number;
  onSelect?(id: string): void;
  itemHeight?: string | number;
}

const AccumulateContentList: FC<ContentListProps> = ({
  params,
  columnCount = 4,
  title = () => null,
  pager = () => null,
  onSelect,
  itemHeight = 300,
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
        <SkeletonContentCardList
          gap={7}
          rowGap={17}
          isCard
          count={40}
          height={itemHeight}
          columnCount={columnCount}
        />
      ) : (
        <div
          style={{
            gridTemplateColumns: `repeat(${columnCount}, minmax(0px, 1fr))`,
            rowGap: `${17 * 4}px`,
            columnGap: `${7 * 4}px`,
          }}
          className="grid"
        >
          {accContents.map((content, i) => (
            <ContentCard
              height={itemHeight}
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
