import { SizeDegree, useBreakPoint } from '@/utils/breakpoint';

const SIZE: SizeDegree[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];

const useCurrentSize = () => {
  const size = useBreakPoint(p => {
    for (const size of SIZE) if (p.same(size)) return size;
  });

  const idx = SIZE.indexOf(size);

  return { size, idx };
};

export const usePadding = () => {
  const { idx: idx } = useCurrentSize();

  const sm = [0.5, 0.5, 0.5, 0.5, 1, 1];
  const md = [1, 1, 1, 3, 3, 3];
  const lg = [3, 3, 3, 5, 5, 5];
  const xl = [5, 5, 7, 7, 9, 9];

  return {
    lg: { degree: lg[idx] },
    md: { degree: md[idx] },
    sm: { degree: sm[idx] },
    xl: { degree: xl[idx] },
  };
};

export const useSpace = () => {
  const { idx: idx } = useCurrentSize();

  const sm = [3, 3, 3, 3, 5, 5];
  const md = [5, 5, 5, 5, 7, 7];
  const lg = [7, 7, 7, 14, 14, 14];

  return {
    lg: { degree: lg[idx] },
    md: { degree: md[idx] },
    sm: { degree: sm[idx] },
  };
};

export const useText = () => {
  const { idx: idx } = useCurrentSize();

  const sm = ['xs', 'xs', 'xs', 'xs', 'sm', 'sm'];
  const md = ['sm', 'sm', 'sm', 'sm', 'md', 'md'];
  const lg = ['md', 'md', 'md', 'md', 'lg', 'lg'];
  const xl = ['lg', 'lg', 'lg', 'xl', 'xl', 'xl'];
  const xxl = ['xl', 'xl', 'xl', '2xl', '2xl', '3xl'];
  const xxxl = ['xl', 'xl', '3xl', '3xl', '4xl', '4xl'];

  return {
    xxxl: { degree: xxxl[idx], className: `text-${xxxl[idx]}` },
    xxl: { degree: xxl[idx], className: `text-${xxl[idx]}` },
    xl: { degree: xl[idx], className: `text-${xl[idx]}` },
    lg: { degree: lg[idx], className: `text-${lg[idx]}` },
    md: { degree: md[idx], className: `text-${md[idx]}` },
    sm: { degree: sm[idx], className: `text-${sm[idx]}` },
  };
};

export const useSizeRate = (size = 1, weight = 0.15) => {
  const { idx: idx } = useCurrentSize();

  const standard = [
    1 - weight * 1.5,
    1 - weight * 1.5,
    1 - weight * 0.8,
    1 - weight * 0.8,
    1,
    1,
  ];

  const sm = [0.5, 0.5, 0.5, 0.5, 0.8, 0.8];
  const md = [0.7, 0.7, 0.85, 0.85, 1, 1];
  const lg = [1.1, 1.1, 1.1, 1.1, 1.5, 1.5];

  return {
    lg: {
      degree: lg[idx],
      size: size * lg[idx],
    },
    md: {
      degree: md[idx],
      size: size * md[idx],
    },
    sm: {
      degree: sm[idx],
      size: size * sm[idx],
    },
    standard: {
      degree: standard[idx],
      size: size * standard[idx],
    },
  };
};
