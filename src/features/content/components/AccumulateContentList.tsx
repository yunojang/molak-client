import { FC, useEffect, useState } from 'react';

import { useContents } from '../api/getContents';
import { Content } from '../types/dto';
import { ListCompProps } from '@/components/List/withScrollLoad';

import ContentCard from '@/components/Elements/Card/ContentCard';

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
  const { contents, totalElements, totalPages, isEnd, isLoading } =
    useContents(params);

  useEffect(() => setAccContents(prev => prev.concat(contents)), [contents]);

  return (
    <div>
      {title(totalElements, isLoading)}
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
      {pager(totalPages, isEnd, isLoading)}
    </div>
  );
};

export default AccumulateContentList;
