import { useBreakpoint as useOrigin } from '@chakra-ui/react';

import { getBreakPoint } from '@/hooks/useBreakPointSize';
import { useEffect, useState } from 'react';

export type SizeDegree = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export const SIZE = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];

const getSize = (degree: SizeDegree) => {
  return SIZE.indexOf(degree);
};

const compareSize = (
  checkFn: (currentSize: number, targetSize: number) => boolean,
  current: SizeDegree,
  target: SizeDegree,
) => {
  const curIdx = getSize(current),
    targetIdx = getSize(target);

  return checkFn(curIdx, targetIdx);
};

export const bigger = compareSize.bind(null, (cur, target) => cur > target);
export const smaller = compareSize.bind(null, (cur, target) => cur < target);
export const eqBigger = compareSize.bind(
  null,
  (cur, target) => cur === target || cur > target,
);
export const eqSmaller = compareSize.bind(
  null,
  (cur, target) => cur === target || cur < target,
);

class ComparablePoint {
  constructor(private size: SizeDegree) {
    this.size = size;
  }

  same(deg: SizeDegree): boolean {
    return this.size === deg;
  }

  bigger(deg: SizeDegree): boolean {
    return bigger(this.size, deg);
  }

  eqBigger(deg: SizeDegree): boolean {
    return eqBigger(this.size, deg);
  }

  smaller(deg: SizeDegree): boolean {
    return smaller(this.size, deg);
  }

  eqSmaller(deg: SizeDegree): boolean {
    return eqSmaller(this.size, deg);
  }

  static of(size: SizeDegree) {
    return new ComparablePoint(size);
  }
}

// const addEventListenerOnce = once(
//   (event: string, handler: EventListenerOrEventListenerObject) => {
//     window.addEventListener(event, handler);
//   },
// );

export const useBreakPoint = (fn: (point: ComparablePoint) => any) => {
  const [size, setSize] = useState<SizeDegree>(getBreakPoint());

  useEffect(() => {
    const handler = () => setSize(getBreakPoint());
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  return fn(ComparablePoint.of(size));
};

// export const useBreakPoint = <T extends string | any>(
//   fn: (p: ComparablePoint) => T,
// ) => {
//   const current = useOrigin(getBreakPoint()) as SizeDegree;

//   return fn(new ComparablePoint(current));
// };
