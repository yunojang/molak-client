export function throttle(func: (...arg: any[]) => any, delay: number) {
  let timerId: NodeJS.Timeout;
  let previousTime = 0; // 5000

  return function (...args: any[]) {
    // console.log('call closure');

    const currentTime = Date.now(); // 5500
    const remainingTime = delay - (currentTime - previousTime);

    clearTimeout(timerId);

    if (remainingTime <= 0) {
      // console.log('call function ');
      func(...args);
      previousTime = currentTime;
    }
  };
}
