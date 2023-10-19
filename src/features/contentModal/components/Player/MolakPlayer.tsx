import { FC, useContext, useMemo, useRef, useState } from 'react';
import { cx } from '@emotion/css';

import { useContent } from '../../../content/api/getContent';
import { useNextEpisode } from '../../../content/api/getNextEpisode';
import { useNavigateWithBg } from '@/hooks/useNavigateWithBg';
import { useBackgroundLocation } from '@/hooks/useBackgroundLocation';

import { ContentIdContext } from '../../store/ContentIdContext';

import Player from './Player';
import NextEpisodeButton from '../NextEpisodeButtont';
import { BsFullscreen } from 'react-icons/bs';
import { clickableButtonStyle } from '@/utils/style/button';
import { IconButton } from '@/components/Elements/IconButton';
import { BiExitFullscreen } from 'react-icons/bi';

interface MolakPlayerProps {
  // contentId: string;
  // episodeId: string;
  width?: number | string;
  height?: number | string;
  onPlay?: () => void;
  onPause?: () => void;
}

const MolakPlayer: FC<MolakPlayerProps> = ({
  width,
  height,
  ...playerProps
}) => {
  const { contentId, episodeId } = useContext(ContentIdContext);
  if (!episodeId) throw new Error('[dev-route] episodeId is required');

  const bg = useBackgroundLocation();
  const navigate = useNavigateWithBg(bg);

  const { content } = useContent(episodeId);
  const { episode: nextEpisode } = useNextEpisode(episodeId);

  const [duration, setDuration] = useState<number>(Infinity);
  const [progress, setProgress] = useState<number>(0);

  const showNextmove = duration - progress < 8; // seconds
  const hasNextEpisode = !!nextEpisode;

  const handleNextEpisode = () => {
    if (hasNextEpisode) navigate(`/content/${contentId}/${nextEpisode?.id}`);
  };

  const container = useRef<HTMLDivElement>(null);
  const isFullScreen = !!document.fullscreenElement;

  const handleFullscreen = () => {
    container.current?.requestFullscreen();
  };

  const handleExitFullscreen = () => {
    document.exitFullscreen();
  };

  const contentWidth = useMemo(
    () => (isFullScreen ? '100%' : width),
    [isFullScreen, width],
  );

  const contentHeight = useMemo(
    () => (isFullScreen ? '100%' : height),
    [isFullScreen, height],
  );

  if (!content) return <div>찾을 수 없는 컨텐츠 입니다.</div>; // 컴포넌트 개발
  return (
    <div className="relative" ref={container}>
      <Player
        key={content.url}
        url={content.url}
        width={contentWidth}
        height={contentHeight}
        onDuration={setDuration}
        onProgress={({ playedSeconds }) => setProgress(playedSeconds)}
        {...playerProps}
      />

      {showNextmove && hasNextEpisode && (
        <NextEpisodeButton autoClickDelaySec={5} onClick={handleNextEpisode} />
      )}

      <button
        className={cx(clickableButtonStyle, ' absolute left-2 bottom-2')}
        onClick={!isFullScreen ? handleFullscreen : handleExitFullscreen}
      >
        <IconButton background="#00000088" color="white" size={13}>
          {!isFullScreen ? (
            <BsFullscreen size={20} />
          ) : (
            <BiExitFullscreen size={24} />
          )}
        </IconButton>
      </button>
    </div>
  );
};

export default MolakPlayer;
