import { FC } from 'react';

import { useEpisodes } from '../../api/getEpisodes';
import EpisodeCard from '@/components/Elements/Card/EpisodeCard';

interface EpisodesProps {
  id: string;
  onSelect?(id: number): void;
}

const Episodes: FC<EpisodesProps> = ({ id, onSelect }) => {
  const { episodes } = useEpisodes(id, {});

  return (
    <div className="flex flex-col gap-3">
      {episodes.map((episode, i) => (
        <EpisodeCard
          key={i}
          content={episode}
          onClick={() => onSelect?.(episode.episode_id)}
        />
      ))}
    </div>
  );
};

export default Episodes;
