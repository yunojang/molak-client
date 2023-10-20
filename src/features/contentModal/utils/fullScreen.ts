export const openFullScreen = (element: HTMLElement | null) => {
  if (!element) return;
  return element.requestFullscreen();
};

export const closeFullScreen = () => {
  document.exitFullscreen();
};
