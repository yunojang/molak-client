import { FC } from 'react';

import { ListCompProps } from '@/components/List/withScrollLoadOrder';
import { useContents } from '../api/getContents';
import ContentCard from '@/components/Elements/Card/ContentCard';

interface ContentListProps extends ListCompProps {
  columnCount?: number;
}

const ContentList: FC<ContentListProps> = ({
  params,
  title = () => null,
  columnCount = 4,
}) => {
  const { contents, totalElements } = useContents(params);

  return (
    <div>
      <div className="mb-5">{title(totalElements)}</div>
      <div
        style={{
          gridTemplateColumns: `repeat(${columnCount}, minmax(0px, 1fr))`,
        }}
        className="grid gap-5"
      >
        {contents.map((content, i) => (
          <ContentCard content={content} key={i} isCard />
        ))}
      </div>
    </div>
  );
};

export default ContentList;
