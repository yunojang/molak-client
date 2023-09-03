import { range } from '@/utils/range';
import { FC } from 'react';
import SkeletonContentCard from './SkeletonContentCard';

interface SkeletonContentCardListProps {
  count?: number;
  columnCount?: number;
  isCard?: boolean;
  gap?: number;
  rowGap?: number;
  height?: string | number;
}

const SkeletonContentCardList: FC<SkeletonContentCardListProps> = ({
  count = 5,
  columnCount,
  isCard,
  gap = 5,
  rowGap,
  height = 300,
}) => {
  columnCount = columnCount ?? count ?? 5;

  return (
    <div
      className="grid"
      style={{
        gap: gap * 4,
        rowGap: (rowGap ?? gap) * 4,
        gridTemplateColumns: `repeat(${columnCount}, minmax(0px, 1fr))`,
      }}
    >
      {range(count ?? 10).map(n => (
        <SkeletonContentCard height={height} key={n} isCard={isCard} />
      ))}
    </div>
  );
};

export default SkeletonContentCardList;
