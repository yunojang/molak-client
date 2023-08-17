import { range } from '@/utils/range';
import { FC } from 'react';
import SkeletonContentCard from './SkeletonContentCard';

interface SkeletonContentCardListProps {
  count?: number;
  columnCount?: number;
  isCard?: boolean;
  gap?: number;
}

const SkeletonContentCardList: FC<SkeletonContentCardListProps> = ({
  columnCount = 5,
  count = 5,
  isCard,
  gap = 5,
}) => {
  return (
    <div
      className="grid"
      style={{
        gap: gap * 4,
        gridTemplateColumns: `repeat(${columnCount}, minmax(0px, 1fr))`,
      }}
    >
      {range(count ?? 10).map(n => (
        <SkeletonContentCard key={n} isCard={isCard} />
      ))}
    </div>
  );
};

export default SkeletonContentCardList;
