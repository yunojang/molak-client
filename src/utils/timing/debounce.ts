export function debounce(func: (...arg: any[]) => any, delay: number) {
  let timerId: NodeJS.Timeout;

  return function (...args: any[]) {
    console.log('call closure');
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      console.log('call debounce');
      func(...args);
    }, delay);
  };
}
