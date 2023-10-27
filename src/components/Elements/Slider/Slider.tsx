import { FC, useRef, useState } from 'react';

import {
  Slider as ChakraSlider,
  SlideProps as CProps,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from '@chakra-ui/react';

interface SliderProps {
  value?: number;
  onChangeStart?(): void;
  onChange?(value: number): void;
  onChangeEnd?(value: number): void;
  width?: number | string;
  min?: number;
  max?: number;
  className?: string;
  step?: number;
}

const Slider: FC<SliderProps> = ({
  value,
  onChange,
  onChangeStart,
  onChangeEnd,
  width,
  min,
  max,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <ChakraSlider
      ref={ref}
      min={min}
      max={max}
      padding={0}
      focusThumbOnChange={false}
      aria-label="slider-ex-1"
      colorScheme="molak"
      className={className}
      value={value}
      onChangeStart={onChangeStart}
      onChange={onChange}
      onChangeEnd={onChangeEnd}
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
