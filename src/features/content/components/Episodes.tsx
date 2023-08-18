import { FC } from 'react';

import { useEpisodes } from '../api/getEpisodes';
import EpisodeCard from '@/components/Elements/Card/EpisodeCard';

interface EpisodesProps {
  id: string;
}

const Episodes: FC<EpisodesProps> = ({ id }) => {
  const { episodes } = useEpisodes(id, {});

  return (
    <div className="flex flex-col gap-3">
      {episodes.map((episode, i) => (
        <EpisodeCard key={i} content={episode} />
      ))}
    </div>
  );
};

export default Episodes;
