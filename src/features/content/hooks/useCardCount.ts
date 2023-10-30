import { useBreakPoint } from '@/utils/breakpoint';

interface Options {
  bi?: boolean;
}

export const useCardCount = (options: Options = { bi: false }) => {
  const count = useBreakPoint(p => {
    if (p.eqBigger('2xl')) return 4;
    if (p.eqBigger('xl')) return 4;
    if (p.eqBigger('lg')) return 3;
    if (p.eqBigger('md')) return 3;
    if (p.eqBigger('sm')) return 2;
    if (p.eqBigger('xs')) return 1;
    return 1;
  });

  if (options.bi) return { count: Math.floor(Math.max(2, count) / 2) * 2 };
  return { count };
};
