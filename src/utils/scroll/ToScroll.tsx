import { FC, useEffect } from 'react';

import { useScroll } from './useScroll';

interface ToScrollProps {
  to?: number;
}

const ToScroll: FC<ToScrollProps> = ({ to = 0 }) => {
  const { scrollTo } = useScroll();

  useEffect(() => {
    scrollTo(to);
  }, [to, scrollTo]);

  return <></>;
};

export default ToScroll;
