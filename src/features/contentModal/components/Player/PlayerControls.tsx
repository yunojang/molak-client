import { FC } from 'react';

import FullScreenControl from '../Controls/FullScreenControl';
import PlayControl from '../Controls/PlayControl';
import { PlayerState } from '../../types/player';
import VolumeControl from '../Controls/VolumnControl';
import TimeDisplay from '../Controls/TimeDisplay';
import ProgressSlider from '../Controls/ProgressSlider';

interface Props extends PlayerState {
  progressTime: string;
  runningTime: string;
  duration: number;
}

const PlayerControls: FC<Props> = ({
  fullScreen,
  playing,
  volume,
  progress,
  runningTime,
  progressTime,
  duration,
}) => {
  return (
    <div className="w-full flex flex-col ">
      <ProgressSlider {...progress} max={duration} />

      <div className="flex items-center bg-black bg-opacity-20 justify-between px-3">
        <div className="flex gap-1 items-center justify-start">
          <PlayControl {...playing} />
          <VolumeControl {...volume} />
          <TimeDisplay progressTime={progressTime} runningTime={runningTime} />
        </div>
        <FullScreenControl {...fullScreen} />
      </div>
    </div>
  );
};

export default PlayerControls;
