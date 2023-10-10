import { FC } from 'react';
import { cx } from '@emotion/css';

import { RecommendContent } from '@/features/content/types/dto';
import RecommendCard from './RecommendCard';

import { scrollXStyle } from '@/utils/style/scroll';
import { useNavigateWithBg } from '@/hooks/useNavigateWithBg';

interface RecommendContentListProps {
  recommends: RecommendContent[];
}

const recommend_content_width = '364px';

const RecommendContentList: FC<RecommendContentListProps> = ({
  recommends,
}) => {
  const navigate = useNavigateWithBg();

  const handleClick = (contentId: string) => navigate(`/content/${contentId}`);

  return (
    <div
      className={cx(scrollXStyle, 'flex flex-nowrap gap-5 pt-2 pb-5')}
      style={{ paddingRight: recommend_content_width }}
    >
      {recommends.map((recommend, i) => (
        <RecommendCard
          key={i}
          recommend={recommend}
          defaultWidth={recommend_content_width}
          onClick={() => handleClick(recommend.content.id)}
        />
      ))}
    </div>
  );
};

export default RecommendContentList;
