import { useEffect, useState } from 'react';

import { SizeDegree } from '@/utils/breakpoint/useBreakPoint';

const MAX_VALUES = {
  xs: 450,
  sm: 770,
  md: 1000,
  lg: 1200,
  xl: 1550,
  '2xl': 1980,
};

export const getBreakPoint = (): SizeDegree => {
  const windowWidth = document.documentElement.getBoundingClientRect().width;

  if (windowWidth < MAX_VALUES.xs) return 'xs';
  else if (windowWidth < MAX_VALUES.sm) return 'sm';
  else if (windowWidth < MAX_VALUES.md) return 'md';
  else if (windowWidth < MAX_VALUES.lg) return 'lg';
  else if (windowWidth < MAX_VALUES.xl) return 'xl';
  return '2xl';
};

// window.addEventListener('resize', () => console.log(getBreakPoint()));

// 훅을 여러번 호출해도, 핸들러 하나 설정
// const addEventListenerOnce = once(
//   (event: string, handler: EventListenerOrEventListenerObject) => {
//     window.addEventListener(event, handler);
//   },
// );

// export const useBreakPointSize = () => {
//   const [size, setSize] = useState<SizeDegree>(getBreakPoint());

//   useEffect(() => {
//     const handler = () => {
//       setSize(getBreakPoint());
//     };
//     addEventListenerOnce('resize', handler);
//   }, []);

//   return size;
// };
