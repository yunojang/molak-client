import { FC } from 'react';
import { cx } from '@emotion/css';

import { RecommendContent } from '@/features/content/types/dto';
import RecommendCard from './RecommendCard';

import { scrollXStyle } from '@/utils/style/scroll';
import { useNavigateWithBg } from '@/hooks/useNavigateWithBg';
import { useSizeRate } from '@/hooks/responsive/usePadding';

interface RecommendContentListProps {
  recommends: RecommendContent[];
}

const RecommendContentList: FC<RecommendContentListProps> = ({
  recommends,
}) => {
  const navigate = useNavigateWithBg();
  const cardWidth = useSizeRate(360);

  const handleClick = (contentId: string) => navigate(`/content/${contentId}`);

  return (
    <div
      className={cx(scrollXStyle, 'flex flex-nowrap gap-5 pt-2 pb-5 pl-space')}
      style={{ paddingRight: cardWidth.md.size }}
    >
      {recommends.map((recommend, i) => (
        <RecommendCard
          key={i}
          recommend={recommend}
          defaultWidth={cardWidth.md.size}
          onClick={() => handleClick(recommend.content.id)}
        />
      ))}
    </div>
  );
};

export default RecommendContentList;
