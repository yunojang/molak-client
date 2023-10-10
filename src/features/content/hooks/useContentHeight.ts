import { useBreakPoint } from '@/utils/breakpoint';

export const useContentHeight = () => {
  const isMobile = useBreakPoint(p => p.eqSmaller('md'));

  return isMobile ? '36vw' : '18vw';
};
