export function throttle(func: (...arg: any[]) => any, delay: number) {
  let previousTime = 0; // 5000

  return function (...args: any[]) {
    const currentTime = Date.now(); // 5500
    const remainingTime = delay - (currentTime - previousTime);

    if (remainingTime <= 0) {
      func(...args);
      previousTime = currentTime;
    }
  };
}
