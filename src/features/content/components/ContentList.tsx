import { FC } from 'react';

import { ListCompProps } from '@/components/List/withScrollLoad';
import { useContents } from '../api/getContents';
import ContentCard from '@/components/Elements/Card/ContentCard';

interface ContentListProps extends ListCompProps {
  _?: any;
}

const ContentList: FC<ContentListProps> = ({ params }) => {
  const { contents } = useContents(params);

  return (
    <>
      {contents.map((content, i) => (
        <ContentCard content={content} key={i} isCard />
      ))}
    </>
  );
};

export default ContentList;
