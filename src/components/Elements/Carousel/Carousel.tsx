import {
  FC,
  useState,
  HtmlHTMLAttributes,
  useEffect,
  useCallback,
} from 'react';

import CarouselViewer, { CarouselViewerProps } from './CarouselViewer';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import { BsDashLg } from 'react-icons/bs';

import { circularRange } from '@/utils/range';
import OrderStep from './OrderStep';

interface CarouselProps extends CarouselViewerProps {
  autoPlay?: boolean;
  delay?: number;
  sliders?: React.ReactNode[];
  defaultOrder?: number;
}

const Carousel: FC<CarouselProps> = ({
  width = '100%',
  height = '44em',
  autoPlay,
  delay = 3500,
  sliders = [],
  defaultOrder = 0,
}) => {
  const [order, setOrder] = useState(defaultOrder);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();

  const _increase = useCallback(
    () => setOrder(p => circularRange(p + 1, sliders.length)),
    [sliders.length],
  );

  const onManual = useCallback(() => {
    clearInterval(intervalId);
    // reset interval
    if (autoPlay) {
      const id = setInterval(_increase, delay);
      setIntervalId(id);
    }
  }, [intervalId, delay, _increase, autoPlay]);

  const increase = useCallback(() => {
    _increase();
    onManual();
  }, [_increase, onManual]);

  const decrease = useCallback(() => {
    setOrder(p => circularRange(p - 1, sliders.length));
    onManual();
  }, [sliders.length, onManual]);

  useEffect(() => {
    if (autoPlay && !intervalId) {
      setIntervalId(setInterval(increase, delay));
    }

    return () => clearInterval(intervalId);
  }, [autoPlay, delay, increase, intervalId]);

  return (
    <div className="relative">
      <MoveButton style={{ left: 0 }} onClick={decrease}>
        <HiOutlineChevronLeft />
      </MoveButton>

      <CarouselViewer
        items={sliders}
        order={order}
        width={width}
        height={height}
      />

      <div className="absolute z-20 bottom-[2.2em] right-1/2 translate-x-1/2">
        <OrderStep
          icon={<BsDashLg />}
          length={sliders.length}
          value={order}
          onChange={order => {
            setOrder(order);
            onManual();
          }}
        />
      </div>

      <MoveButton style={{ right: 0 }} onClick={increase}>
        <HiOutlineChevronRight />
      </MoveButton>
    </div>
  );
};

export default Carousel;

const MoveButton = ({
  className,
  children,
  ...rest
}: HtmlHTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...rest}
      className="absolute top-0 bottom-0 w-[2em] cursor-pointer z-20 flex items-center justify-center 
      text-4xl 
      opacity-40 hover:opacity-90 transition-opacity text-white"
    >
      {children}
    </div>
  );
};
