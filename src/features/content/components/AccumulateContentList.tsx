import { FC, useEffect, useState } from 'react';

import { useContents } from '../api/getContents';
import { Content } from '../types/dto';
import { ListCompProps } from '@/components/List/withScrollLoad';

import ContentCard from '@/components/Elements/Card/ContentCard';
import SkeletonContentCardList from '@/components/Elements/Card/SkeletonContentCardList';

interface ContentListProps extends ListCompProps {
  columnCount?: number;
}

const AccumulateContentList: FC<ContentListProps> = ({
  params,
  title = () => null,
  pager = () => null,
  columnCount = 4,
}) => {
  const [accContents, setAccContents] = useState<Content[]>([]);
  const { totalElements, totalPages, isEnd, isLoading } = useContents(
    params,
    ({ content }) => setAccContents(prev => prev.concat(content)),
  );

  return (
    <div>
      {title(totalElements, isLoading)}

      {!accContents.length ? (
        <SkeletonContentCardList isCard count={40} columnCount={4} />
      ) : (
        <div
          style={{
            gridTemplateColumns: `repeat(${columnCount}, minmax(0px, 1fr))`,
          }}
          className="grid gap-5"
        >
          {accContents.map((content, i) => (
            <ContentCard content={content} key={i} isCard />
          ))}
        </div>
      )}
      {pager(totalPages, isEnd, isLoading)}
    </div>
  );
};

export default AccumulateContentList;
