import React, { useCallback, useEffect, useState } from 'react';

export const useCountDown = ({
  initCount,
  immediateStart,
  onZero,
}: {
  initCount: number;
  immediateStart?: boolean;
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
    if (count == 0) onZero?.();
  }, [count, onZero]);

  useEffect(() => {
    if (immediateStart) startCD();

    if (!timer.current) return;
    return () => clearInterval(timer.current);
  }, [immediateStart, startCD]);

  return { count, countDown, startCD };
};
