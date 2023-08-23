export const useScroll = () => {
  const scrollTo = (to: number) => {
    window.document.documentElement.scrollTo({
      top: to,
    });
  };

  return {
    scrollTo,
  };
};
