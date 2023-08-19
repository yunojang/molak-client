import { range } from '@/utils/range';
import { FC } from 'react';
import SkeletonEpisodeCard from './SkeletonEpisodeCard';

interface SkeletonEpisodeListProps {
  count?: number;
  gap?: number;
}

const SkeletonEpisodeList: FC<SkeletonEpisodeListProps> = ({
  count = 15,
  gap = 3,
}) => {
  return (
    <div className="flex flex-col" style={{ gap: gap * 4 }}>
      {range(count).map(n => (
        <SkeletonEpisodeCard key={n} />
      ))}
    </div>
  );
};

export default SkeletonEpisodeList;
