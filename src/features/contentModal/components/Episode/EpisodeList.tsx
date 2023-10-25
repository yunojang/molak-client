import { FC } from 'react';

import { useEpisodes } from '../../../episode/api/getEpisodes';
import EpisodeCard from '@/components/Elements/Card/EpisodeCard';
import { ListProps } from '@/components/List/types';

interface EpisodesProps extends ListProps {
  id: string;
  onSelect?(id: number): void;
}

const EpisodeList: FC<EpisodesProps> = ({
  id,
  onSelect,
  params,
  isLoading,
}) => {
  const { episodes } = useEpisodes(id, params);

  return (
    <div className="flex flex-col gap-3">
      {episodes.map((episode, i) => (
        <EpisodeCard
          key={i}
          content={episode}
          onClick={() => onSelect?.(episode.episodeId)}
        />
      ))}
    </div>
  );
};

export default EpisodeList;
