import { range } from '@/utils/range';
import { FC } from 'react';
import SkeletonEpisodeCard from './SkeletonEpisodeCard';
import { cx } from '@emotion/css';

interface SkeletonEpisodeListProps {
  count?: number;
  gap?: number;
  className?: string;
}

const SkeletonEpisodeList: FC<SkeletonEpisodeListProps> = ({
  count = 15,
  gap = 3,
  className,
}) => {
  return (
    <div className={cx(className, 'flex flex-col')} style={{ gap: gap * 4 }}>
      {range(count).map(n => (
        <SkeletonEpisodeCard key={n} />
      ))}
    </div>
  );
};

export default SkeletonEpisodeList;
