import { FC } from 'react';

import SkeletonContentCardList from '@/components/Elements/Card/SkeletonContentCardList';
import { useCardCount } from '@/features/content/hooks/useCardCount';
import { range } from '@/utils/range';
import { Skeleton } from '@chakra-ui/react';

interface SkeletonFeedListProps {
  gap?: number;
  contentHeight?: string | number;
}

const SkeletonFeedList: FC<SkeletonFeedListProps> = ({
  contentHeight = 300,
  gap = 24,
}) => {
  const { count } = useCardCount();

  return (
    <div className="flex flex-col" style={{ gap: gap * 4 }}>
      {range(5).map(n => (
        <div key={n} className="pl-space">
          <div className="mb-5">
            <Skeleton height="2.2rem" width="15%" rounded="md" />
          </div>

          <div className="py-3">
            <SkeletonContentCardList height={contentHeight} count={count} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonFeedList;
