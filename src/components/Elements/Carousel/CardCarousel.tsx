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
}

// const delay = 400;
// const pad = 32;

const CardCarousel: FC<SliderCarouselProps> = ({ items, count = 5 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(220);
  const [showControl, setShowControl] = useState(false);
  const [isSlide, setSlide] = useState(false);

  const isMobile = useBreakPoint(p => p.smaller('xl'));
  // const lastIndex = useMemo(() => currentIndex + count, [currentIndex, count]);

  return (
    <div
      className="relative w-full overflow-clip px-space py-3"
      onMouseOver={() => setShowControl(true)}
      onMouseLeave={() => setShowControl(false)}
    >
      <Swiper
        className={container}
        modules={[Navigation, A11y]}
        loop
        // slidesPerView={count + (pad / cardWidth) * 2}
        simulateTouch={true}
        breakpoints={{ 1200: { simulateTouch: false } }}
        slidesPerView={count}
        slidesPerGroup={count}
        spaceBetween={15}
        onResize={swiper => {
          const slideWidth = swiper.slides[0].offsetWidth;
          setCardWidth(slideWidth);
        }}
        onSlideChange={swiper => {
          if (!isSlide) setSlide(true);
          setCurrentIndex(swiper.realIndex);
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
        >
          <HiOutlineChevronLeft />
        </MoveButton>

        <MoveButton
          hidden={isMobile || !showControl}
          dir="right"
          slot="container-start"
          className="next-button-molak"
        >
          <HiOutlineChevronRight />
        </MoveButton>

        {items.map((item, i) => (
          <SwiperSlide
            key={i}
            style={{ transition: 'transform 0.4s' }}
            className="hover:scale-105 hover:z-10"
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
  ...rest
}: HtmlHTMLAttributes<HTMLButtonElement> & { dir: 'left' | 'right' }) => {
  return (
    <button
      {...rest}
      style={{
        [dir]: 0,
        background: 'radial-gradient(circle,  rgba(0,0,0,0.2), rgba(0,0,0,0)',
      }}
      className={`${className} ${cx(
        `absolute top-0 z-10 w-space
      flex items-center justify-center h-full 
      text-4xl text-white transition-all cursor-pointer  font-bold`,
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
