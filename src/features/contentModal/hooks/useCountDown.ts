import React, { useCallback, useEffect, useState } from 'react';

export const useCountDown = ({
  initCount,
  immediateTimer,
  onZero,
}: {
  initCount: number;
  immediateTimer?: boolean;
  onZero?: () => void;
}) => {
  const [count, setCount] = useState(initCount);
  const timer = React.useRef<NodeJS.Timer>();

  const countDown = useCallback(() => {
    setCount(prev => Math.max(prev - 1, 0));
  }, []);

  const startCD = useCallback(() => {
    timer.current = setInterval(() => countDown(), 1000);
  }, [countDown]);

  useEffect(() => {
    if (count == 0) {
      if (timer.current) clearInterval(timer.current);
      onZero?.();
      setCount(initCount);
    }
  }, [count, onZero, initCount]);

  useEffect(() => {
    if (immediateTimer) startCD();

    // clean up
    if (!timer.current) return;
    return () => clearInterval(timer.current);
  }, [immediateTimer, startCD]);

  return { count, countDown, startCD };
};
