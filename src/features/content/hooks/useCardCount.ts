import { useBreakPoint } from '@/utils/breakpoint';

export const useCardCount = () => {
  const count = useBreakPoint(p => {
    if (p.eqBigger('2xl')) return 4;
    if (p.eqBigger('xl')) return 3;
    if (p.eqBigger('lg')) return 3;
    if (p.eqBigger('md')) return 2;
    return 1;
  });

  return { count };
};
