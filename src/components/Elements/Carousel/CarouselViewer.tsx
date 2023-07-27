import React, { FC, useState } from 'react';
import { useCarouselViewer } from './hooks/useCarouselViewer';
import { css, cx, keyframes } from '@emotion/css';

interface CarouselProps {
  items: React.ReactNode[];
  order: number;
  width?: string | number;
  height?: string | number;
}

const delay = 200;

const CarouselViewer: FC<CarouselProps> = ({
  items,
  order: pv,
  height,
  width,
}) => {
  const { current, next } = useCarouselViewer({
    order: pv,
    items,
    delay,
  });

  return (
    <div className="relative" style={{ width, height }}>
      <div className={cx('absolute inset-0 z-10', next ? fadeOutCss : '')}>
        {current}
      </div>
      <div className="absolute inset-0">{next}</div>
    </div>
  );
};

export default CarouselViewer;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const fadeOutCss = css`
  animation: ${fadeOut} ${delay}ms ease-in-out;
`;
