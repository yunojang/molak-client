import { FC } from 'react';

import EpisodeCard from '@/components/Elements/Card/EpisodeCard';
import { Content } from '@/features/content/types/dto';
import { ViewListProps } from '@/components/List/types';

interface EpisodeViewListProps extends ViewListProps {
  data: Content[];
  onSelect?(item: Content, id: string): void;
}

const EpisodeViewList: FC<EpisodeViewListProps> = ({
  data: episodes,
  onSelect,
  gap = 3,
}) => {
  return (
    <div className="flex flex-col" style={{ gap: gap * 4 }}>
      {episodes.map((episode, i) => (
        <EpisodeCard
          key={i}
          content={episode}
          onClick={() => onSelect?.(episode, episode.id)}
        />
      ))}
    </div>
  );
};

export default EpisodeViewList;
