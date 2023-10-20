import { Slider } from '@/components/Elements/Slider';
import React from 'react';

export interface ProgressSliderProps {
  progress: number; // video progress
  setSlided(value: number): void; // onChange slide
  max?: number;
}

const ProgressSlider: React.FC<ProgressSliderProps> = ({
  progress,
  setSlided,
  max,
}) => {
  return (
    <Slider
      max={max}
      value={progress}
      onChange={setSlided}
      aria-labelledby="continuous-slider"
    />
  );
};

export default ProgressSlider;
