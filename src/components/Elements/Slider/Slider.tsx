import { FC, useRef, useState } from 'react';

import {
  Slider as ChakraSlider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from '@chakra-ui/react';

interface SliderProps {
  value?: number;
  onChange?(value: number): void;
  width?: number | string;
  max?: number;
}

const Slider: FC<SliderProps> = ({ value, onChange, width, max }) => {
  const [sliderValue, setSliderValue] = useState(value ?? 0);
  const [changing, setChanging] = useState(false);

  const handleChangeEnd = (value: number) => {
    onChange?.(value);
    setTimeout(() => setChanging(false), 41);
  };

  const ref = useRef<HTMLDivElement>(null);

  return (
    <ChakraSlider
      ref={ref}
      max={max}
      focusThumbOnChange={false}
      aria-label="slider-ex-1"
      className="p-0.5 pt-1 bg-black bg-opacity-20"
      colorScheme="molak"
      value={changing ? sliderValue : value}
      onChangeStart={() => setChanging(true)}
      onChange={setSliderValue}
      onChangeEnd={handleChangeEnd}
      width={width}
    >
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </ChakraSlider>
  );
};

export default Slider;
