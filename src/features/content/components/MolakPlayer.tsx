import { FC, useState } from 'react';
import { cx } from '@emotion/css';

import { Content } from '../types/dto';

import { useContent } from '../api/getContent';
import Player from './Player';
import { clickableButtonStyle } from '@/utils/style/button';
import { BsCaretRightFill } from 'react-icons/bs';

interface MolakPlayerProps {
  episodeId: string;
  width?: number | string;
  height?: number | string;
  onPlay?: () => void;
  onPause?: () => void;
}

const MolakPlayer: FC<MolakPlayerProps> = ({ episodeId, ...playerProps }) => {
  const { content } = useContent(episodeId);
  const [duration, setDuration] = useState<number>(Infinity);
  const [progress, setProgress] = useState<number>(0);
  const { content: nextContent } = useContent(episodeId + 1);

  const restTime = duration - progress;
  const showNextmove = restTime < 8;
  const hasNextEpisode = !!nextContent;

  return (
    <div className="relative">
      <Player
        {...playerProps}
        onDuration={setDuration}
        content={content as Content}
        onProgress={({ playedSeconds }) => setProgress(playedSeconds)}
      />

      {showNextmove && hasNextEpisode && (
        <button
          className={cx(
            clickableButtonStyle,
            'absolute right-7 bottom-20 z-20 p-3 pr-5 flex items-center gap-2 bg-white rounded-lg font-bold',
          )}
        >
          <BsCaretRightFill size={20} />
          <span>다음화 재생</span>
          {/* <span>5초</span> */}
        </button>
      )}
    </div>
  );
};

export default MolakPlayer;
