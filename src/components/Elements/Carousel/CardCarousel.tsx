import React, { FC, useState, HtmlHTMLAttributes, useMemo } from 'react';
import { css, cx } from '@emotion/css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation } from 'swiper/modules';

import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

import './swiper.css';
import 'swiper/css';
import 'swiper/css/navigation';
import { useBreakPoint } from '@/utils/breakpoint';

interface SliderCarouselProps {
  items: React.ReactElement[];
  count?: number;
  gap?: number;
  // height?: string | number;
  loop?: boolean;
}

// const delay = 400;
// const pad = 32;

const CardCarousel: FC<SliderCarouselProps> = ({
  items,
  count = 5,
  gap = 24,
  // height = 300,
  loop,
}) => {
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [cardWidth, setCardWidth] = useState(220);
  const [showControl, setShowControl] = useState(false);
  const [isSlide, setSlide] = useState(false);

  const isMobile = useBreakPoint(p => p.smaller('xl'));
  // const lastIndex = useMemo(() => currentIndex + count, [currentIndex, count]);

  return (
    <div
      className="relative w-full py-3 overflow-hidden pl-space "
      style={{ paddingRight: `calc(2rem + ${gap}px)` }}
      onMouseOver={() => setShowControl(true)}
      onMouseLeave={() => setShowControl(false)}
    >
      <Swiper
        className={container}
        modules={[Navigation, A11y]}
        loop={loop}
        // slidesPerView={count + (pad / cardWidth) * 2}
        simulateTouch={true}
        breakpoints={{ 1200: { simulateTouch: false } }}
        slidesPerView={count}
        slidesPerGroup={count}
        spaceBetween={gap}
        onResize={swiper => {
          const slideWidth = swiper.slides[0].offsetWidth;
          // setCardWidth(slideWidth);
        }}
        onSlideChange={swiper => {
          if (!isSlide) setSlide(true);
          // setCurrentIndex(swiper.realIndex);
        }}
        navigation={{
          prevEl: '.prev-button-molak',
          nextEl: '.next-button-molak',
        }}
        speed={400}
      >
        <MoveButton
          hidden={isMobile || !showControl || !isSlide}
          dir="left"
          slot="container-start"
          className="prev-button-molak"
          width={`calc(2em + ${gap}px)`}
        >
          <HiOutlineChevronLeft size={42} />
        </MoveButton>

        <MoveButton
          hidden={isMobile || !showControl}
          dir="right"
          slot="container-start"
          className="next-button-molak"
          width={`calc(2em + ${gap}px)`}
        >
          <HiOutlineChevronRight size={42} />
        </MoveButton>

        {items.map((item, i) => (
          <SwiperSlide
            key={i}
            style={{
              transition: 'transform 0.4s',
              // height
            }}
            className="hover:z-10 self-center"
          >
            {React.cloneElement(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardCarousel;

const MoveButton = ({
  hidden,
  dir,
  className,
  children,
  width,
  ...rest
}: HtmlHTMLAttributes<HTMLButtonElement> & {
  dir: 'left' | 'right';
  width?: string | number;
}) => {
  return (
    <button
      {...rest}
      style={{
        [dir]: 0,
        background:
          'radial-gradient(circle,  rgba(0,0,0,0.3) 0, rgba(0,0,0,0) 15%',
        width,
      }}
      className={`${className} ${cx(
        `absolute top-0 z-10 h-full 
        active:scale-90
      flex items-center justify-center 
       text-white transition-all cursor-pointer  font-bold`,
        hidden ? 'opacity-0' : 'opacity-100',
      )}`}
    >
      {children}
    </button>
  );
};

const container = css`
  position: static !important;
  overflow: visible !important;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;
