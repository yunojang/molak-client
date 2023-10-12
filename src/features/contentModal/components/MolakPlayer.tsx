import { FC, useState } from 'react';

import { Content } from '../../content/types/dto';

import { useContent } from '../../content/api/getContent';
import Player from './Player';
import { useNextEpisode } from '../../content/api/getNextEpisode';
import NextEpisodeButton from './NextEpisodeButtont';
import { useNavigateWithBg } from '@/hooks/useNavigateWithBg';

interface MolakPlayerProps {
  contentId: string;
  episodeId: string;
  width?: number | string;
  height?: number | string;
  onPlay?: () => void;
  onPause?: () => void;
}

const MolakPlayer: FC<MolakPlayerProps> = ({
  contentId,
  episodeId,
  ...playerProps
}) => {
  const navigate = useNavigateWithBg();
  const { content } = useContent(episodeId);
  const { episode: nextEpisode } = useNextEpisode(episodeId);

  const [duration, setDuration] = useState<number>(Infinity);
  const [progress, setProgress] = useState<number>(0);

  const showNextmove = duration - progress < 8; // seconds
  const hasNextEpisode = !!nextEpisode;

  const handleNextEpisode = () => {
    if (hasNextEpisode) navigate(`/content/${contentId}/${nextEpisode?.id}`);
  };

  if (!content) return <div>에러</div>;

  return (
    <div className="relative">
      <Player
        {...playerProps}
        url={content?.url}
        onDuration={setDuration}
        onProgress={({ playedSeconds }) => setProgress(playedSeconds)}
      />

      {showNextmove && hasNextEpisode && (
        <NextEpisodeButton autoClickDelaySec={5} onClick={handleNextEpisode} />
      )}
    </div>
  );
};

export default MolakPlayer;
