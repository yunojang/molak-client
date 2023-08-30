import { useBreakPoint } from '@/utils/breakpoint';

export const useCardCount = () => {
  const count = useBreakPoint(p => {
    if (p.eqBigger('xl')) return 5;
    if (p.eqBigger('lg')) return 4;
    if (p.eqBigger('md')) return 3;
    return 2;
  });

  return { count };
};
