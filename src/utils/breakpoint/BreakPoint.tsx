// import { useBreakPointSize } from '@/hooks/useBreakPointSize';
import { FC, ReactElement, useState } from 'react';
import {
  bigger,
  eqBigger,
  eqSmaller,
  SizeDegree,
  smaller,
} from './useBreakPoint';

interface BreakPointProps {
  size: SizeDegree;
  children?: ReactElement;
  better?: 'smaller' | 'bigger' | 'eqBigger' | 'eqSmaller' | 'same';
  fallback?: ReactElement;
}

// export const BreakPoint: FC<BreakPointProps> = ({
//   size,
//   children = null,
//   better = 'same',
//   fallback = null,
// }) => {
//   const [correct, setCorrect] = useState(true);
//   const current = useBreakPointSize();

//   switch (better) {
//     case 'same':
//       setCorrect(current === size);
//       break;
//     case 'bigger':
//       setCorrect(bigger(current, size));
//       break;
//     case 'smaller':
//       setCorrect(smaller(current, size));
//       break;
//     case 'eqBigger':
//       setCorrect(eqBigger(current, size));
//       break;
//     case 'eqSmaller':
//       setCorrect(eqSmaller(current, size));
//       break;
//   }

//   return correct ? children : fallback;
// };
