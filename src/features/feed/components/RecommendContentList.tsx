import { FC } from 'react';
import { RecommendContent } from '@/features/content/types/dto';
import RecommendCard from './RecommendCard';
import { cx } from '@emotion/css';
import { scrollXStyle } from '@/utils/style/scroll';

interface RecommendContentListProps {
  recommends: RecommendContent[];
}

const RecommendContentList: FC<RecommendContentListProps> = ({
  recommends,
}) => {
  return (
    <div className={cx(scrollXStyle, 'flex flex-nowrap gap-5 pb-5')}>
      {recommends.map((item, i) => (
        <RecommendCard key={i} recommend={item} />
      ))}
    </div>
  );
};

export default RecommendContentList;
