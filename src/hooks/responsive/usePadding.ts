import { SizeDegree, useBreakPoint } from '@/utils/breakpoint';

const SIZE: SizeDegree[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];

const useCurrentSize = () => {
  const size = useBreakPoint(p => {
    for (const size of SIZE) if (p.same(size)) return size;
  });

  const index = SIZE.indexOf(size);

  return { size, index };
};

export const usePadding = () => {
  const { index } = useCurrentSize();

  const sm = [0.5, 0.5, 0.5, 0.5, 1, 1];
  const md = [1, 1, 1, 3, 3, 3];
  const lg = [3, 3, 3, 5, 5, 5];

  return {
    lg: { degree: lg[index], className: `p-${lg[index]}` },
    md: { degree: md[index], className: `p-${md[index]}` },
    sm: { degree: sm[index], className: `p-${sm[index]}` },
  };
};

export const useSpace = () => {
  const { index } = useCurrentSize();

  const sm = [1, 1, 1, 1, 3, 3];
  const md = [3, 3, 3, 3, 5, 5];
  const lg = [5, 5, 5, 5, 7, 7];

  return {
    lg: { degree: lg[index], className: `space-${lg[index]}` },
    md: { degree: md[index], className: `space-${md[index]}` },
    sm: { degree: sm[index], className: `space-${sm[index]}` },
  };
};
