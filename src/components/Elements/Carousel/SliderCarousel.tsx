import React, { FC, useState, HtmlHTMLAttributes } from 'react';
import { cx } from '@emotion/css';

import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import { useSlider } from './hooks/useSlider';

interface SliderCarouselProps {
  items: React.ReactNode[];
}

const delay = 400;

const SliderCarousel: FC<SliderCarouselProps> = ({ items }) => {
  const [showControl, setShowControl] = useState(false);
  // const [order, setOrder] = useState(0);
  const { decrease, increase, order } = useSlider({
    defaultOrder: 0,
    totalOrder: 3,
    delay,
  });

  console.log(order);

  return (
    <div
      className="relative overflow-hidden pl-7"
      onMouseOver={() => setShowControl(true)}
      onMouseLeave={() => setShowControl(false)}
    >
      {showControl && (
        <>
          {order > 0 && (
            <MoveButton dir="left" onClick={decrease}>
              <HiOutlineChevronLeft />
            </MoveButton>
          )}

          <MoveButton dir="right" onClick={increase}>
            <HiOutlineChevronRight />
          </MoveButton>
        </>
      )}

      <div
        style={{
          transition: `transform ${delay}ms ease-in-out`,
          transform: `translateX(calc(-${order} * (100% - 1.75rem)))`,
        }}
        className="flex items-center w-full gap-3"
      >
        {items.map(item => item)}
      </div>
    </div>
  );
};

export default SliderCarousel;

const MoveButton = ({
  dir,
  className,
  children,
  ...rest
}: HtmlHTMLAttributes<HTMLDivElement> & { dir: 'left' | 'right' }) => {
  return (
    <div
      {...rest}
      style={{
        [dir]: 0,
        background: `linear-gradient(${
          dir === 'left' ? '90deg' : '270deg'
        }, #0000008e 0%, #00000069 100%)`,
      }}
      className={cx(
        className,
        `absolute top-0 z-10 
      flex items-center justify-center h-full rounded-md
      text-xl text-white transition-all cursor-pointer 
      hover:text-6xl font-bold w-7 opacity-20 hover:opacity-70`,
      )}
    >
      {children}
    </div>
  );
};
