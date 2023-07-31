import { circularRange } from '@/utils/range';
import { throttle } from '@/utils/timing/throttle';
import { useMemo, useState } from 'react';

interface Props {
  totalOrder: number;
  defaultOrder?: number;
  delay?: number;
}

export const useSlider = ({ totalOrder, defaultOrder, delay = 0 }: Props) => {
  const [order, setOrder] = useState(defaultOrder ?? 0);
  const [after, setAfter] = useState<number | null>(null);

  const setOrderThrottled = useMemo(() => throttle(setOrder, delay), [delay]);

  const increase = () =>
    setOrderThrottled((p: number) => circularRange(p + 1, totalOrder));
  const decrease = () =>
    setOrderThrottled((p: number) => circularRange(p - 1, totalOrder));

  // const prevOrder = circularRange(order - 1, totalOrder);
  // const nextOrder = circularRange(order + 1, totalOrder);

  return {
    increase,
    decrease,
    order,
  };
};
