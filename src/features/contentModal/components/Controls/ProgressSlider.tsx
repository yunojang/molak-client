import { Slider } from '@/components/Elements/Slider';
import React, { useState } from 'react';

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
  const [sliderValue, setSliderValue] = useState(progress ?? 0);
  const [changing, setChanging] = useState(false);

  const handleChangeEnd = (value: number) => {
    setSlided?.(value);
    setTimeout(() => setChanging(false), 81);
  };

  return (
    <Slider
      max={max}
      value={changing ? sliderValue : progress}
      onChangeStart={() => setChanging(true)}
      onChange={setSliderValue}
      onChangeEnd={handleChangeEnd}
      aria-labelledby="continuous-slider"
      className="bg-black bg-opacity-20 py-1"
    />
  );
};

export default ProgressSlider;
