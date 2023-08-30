import SkeletonContentCardList from '@/components/Elements/Card/SkeletonContentCardList';
import { useCardCount } from '@/features/content/hooks/useCardCount';
import { range } from '@/utils/range';
import { Skeleton } from '@chakra-ui/react';
import { FC } from 'react';
interface SkeletonFeedListProps {
  _?: any;
}

const SkeletonFeedList: FC<SkeletonFeedListProps> = () => {
  const { count } = useCardCount();

  return (
    <div className="flex flex-col gap-14">
      {range(5).map(n => (
        <div key={n} className=" pl-space">
          <div className="my-3">
            <Skeleton height="2.2rem" width="15%" rounded="md" />
          </div>

          <div className="py-3">
            <SkeletonContentCardList count={count} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonFeedList;
