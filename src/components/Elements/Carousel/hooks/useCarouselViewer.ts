import { useCallback, useEffect, useMemo, useState } from 'react';

import { debounce } from '@/utils/timing/debounce';

interface Props {
  order: number;
  items: any[];
  delay?: number;
}

export const useCarouselViewer = ({ order, delay = 0, items }: Props) => {
  const [prev, setPrev] = useState<number>(order);
  const [after, setAfter] = useState<number | null>(null);

  const setNext = useCallback(
    (next: number) => {
      setAfter(next); // start animation

      setTimeout(() => {
        setPrev(next);
      }, delay - 50); // prev의 애니메이션 끝나고 원래 css로 돌아오기 전에 after가 prev가 되어야함

      setTimeout(() => {
        setAfter(null);
      }, delay);
    },
    [delay],
  );

  const setNextDebounced = useMemo(
    () => debounce(setNext, delay),
    [delay, setNext],
  );

  useEffect(() => {
    const next = (order >= 0 ? order : order + items.length) % items.length;
    setNextDebounced(next);
  }, [order, delay, items, setNextDebounced]);

  return {
    order: prev,
    after,
    current: items[prev],
    next: after !== null ? items[after] : null,
  };
};
