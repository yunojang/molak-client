import {
  FC,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { cx } from '@emotion/css';

import { useEpisode } from '@/features/episode/api/getEpisode';
import { useNextEpisode } from '../../../content/api/getNextEpisode';
import { useCoverNavigate } from '../../hooks/useCoverNavigate';

import Player from './Player';
import NextEpisodeButton from '../NextEpisodeButtont';

import { ContentInfoContext } from '../../store/ContentIdContext';
import MolakPlayerControls from './PlayerControls';
import { usePlayer } from '../../hooks/usePlayer';
import { formatSecond } from '../../utils/second';
import PlayerCloseButton from './PlayerClosebutton';
import { useOriental } from '@/hooks/common/useOriental';
import { useLocation } from 'react-router-dom';
import { StepSeparator } from '@chakra-ui/react';

interface MolakPlayerProps {
  _?: never;
  // width?: number | string;
  // height?: number | string;
  // onPlay?: () => void;
  // onPause?: () => void;
}

const MolakPlayer: FC<MolakPlayerProps> = playerProps => {
  const { contentId, episodeId } = useContext(ContentInfoContext);
  if (!episodeId) throw new Error('[dev-route] episodeId is required');

  // content 정보
  const { content } = useEpisode(episodeId);
  const { episode: nextEpisode } = useNextEpisode(episodeId);

  // 풀스크린
  const container = useRef<HTMLDivElement>(null);

  // player 기능
  const state = usePlayer(container.current);
  const { playing, volume, progress, setProgress, slided } = state;

  useOriental(({ isVertical }) => {
    if (!isVertical) state.fullScreen.onFullScreen?.();
    else state.fullScreen.onExitFullScreen?.();
  });

  const [duration, setDuration] = useState<number>(Infinity);
  const showNextmove = duration - progress.progress <= 10; // seconds

  // 다음화 재생
  const { keepNavigate } = useCoverNavigate();
  const handleClickNextEpisode = () => {
    if (nextEpisode) {
      keepNavigate(`/content/${contentId}/${nextEpisode.id}`);
      progress.setSlided(0);
      playing.play?.();
    }
  };

  // times
  const runningTime = formatSecond(
    duration == Infinity ? 0 : Math.floor(duration),
  );
  const progressTime = formatSecond(Math.floor(progress.progress));

  if (!content) return <div>찾을 수 없는 컨텐츠 입니다.</div>; // 컴포넌트 개발
  return (
    <div className="relative w-full h-full" ref={container}>
      {!playing.playing && <PlayerCloseButton />}

      <Player
        key={content.url}
        url={content.url}
        width="100%"
        height="100%"
        onDuration={setDuration}
        played={slided}
        progressInterval={80}
        onProgress={({ playedSeconds }) => setProgress?.(playedSeconds)}
        onPlay={playing.play}
        onPause={playing.pause}
        playing={playing.playing}
        muted={volume.muted}
        volume={volume.volume}
        {...playerProps}
      />

      {showNextmove && nextEpisode && (
        <NextEpisodeButton
          autoClickDelaySec={5}
          onClick={handleClickNextEpisode}
        />
      )}

      <div className={cx('absolute left-0 bottom-0 w-full z-30')}>
        <MolakPlayerControls
          runningTime={runningTime}
          progressTime={progressTime}
          duration={duration}
          {...state}
        />
      </div>
    </div>
  );
};

export default MolakPlayer;
