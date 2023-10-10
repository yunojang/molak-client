export const callDelay = (fn: (...args: any[]) => any, delay = 0) => {
  const timer = setTimeout(fn, delay);
  return () => clearTimeout(timer);
};
