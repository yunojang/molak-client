// import { useBreakPointSize } from '@/hooks/useBreakPointSize';
import { FC, ReactElement, ReactNode, useState } from 'react';
import {
  bigger,
  eqBigger,
  eqSmaller,
  SizeDegree,
  smaller,
  useBreakPoint,
} from './useBreakPoint';
import { LayoutProps } from '@/types';

interface BreakPointProps extends LayoutProps {
  size: SizeDegree;
  better?: 'smaller' | 'bigger' | 'eqBigger' | 'eqSmaller' | 'same';
  fallback?: ReactElement;
}

export const BreakPoint: FC<BreakPointProps> = ({
  size,
  children = null,
  better = 'same',
  fallback = null,
}) => {
  const isCorrect = useBreakPoint(p => {
    switch (better) {
      case 'smaller':
        return p.smaller(size);
      case 'bigger':
        return p.bigger(size);
      case 'eqBigger':
        return p.eqBigger(size);
      case 'eqSmaller':
        return p.eqSmaller(size);
      case 'same':
      default:
        return p.same(size);
    }
  });
  return isCorrect ? <>{children}</> : fallback;
};
