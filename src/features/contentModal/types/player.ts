import { FullScreenControlProps } from '../components/Controls/FullScreenControl';
import { PlayControlProps } from '../components/Controls/PlayControl';
import { ProgressSliderProps } from '../components/Controls/ProgressSlider';
import { VolumeControlProps } from '../components/Controls/VolumnControl';

export interface PlayerState {
  fullScreen: FullScreenControlProps;
  playing: PlayControlProps;
  volume: VolumeControlProps;
  progress: ProgressSliderProps;
}
