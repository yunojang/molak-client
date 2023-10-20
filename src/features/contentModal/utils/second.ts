export const formatSecond = (second: number) => {
  const min = Math.floor(second / 60).toString();
  const sec = (second % 60).toString();
  return `${min.padStart(2, '0')}:${sec.padStart(2, '0')}`;
};
