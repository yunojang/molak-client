// "누가", "어디"의 "n 위치"로 이동

interface ScrollConfig {
  target?: HTMLElement;
  anchor?: HTMLElement;
  top?: number;
  behavior?: 'auto' | 'smooth';
}

export const moveScroll = (config: ScrollConfig = {}) => {
  const {
    target = document.documentElement,
    anchor = document.documentElement,
    top = 0,
    behavior = 'smooth',
  } = config;
  const anchorTop = anchor.offsetTop;

  target.scrollTo({ behavior, top: anchorTop + top });
};
