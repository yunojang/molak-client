import { useEffect } from 'react';

interface OrientEvent {
  isVertical: boolean; // 세로 상태
}

export const useOriental = (onOrientation?: (event: OrientEvent) => void) => {
  useEffect(() => {
    const handleChangeOrientation = (e: Event) => {
      const type = window.screen.orientation.type; // portrait-primary, portrait-secondary, landscape-primary, landscape-secondary
      const angle = window.screen.orientation.angle; // 0, 90, 180, -90

      const isVertical = type?.includes('portrait') && angle === 0;
      onOrientation?.({ isVertical });
      // document.documentElement.requestFullscreen();
    };

    // window.addEventListener('orientationchange', handleChangeOrientation);
    screen.orientation.addEventListener('change', handleChangeOrientation);
    return () =>
      // window.removeEventListener('orientationchange', handleChangeOrientation);
      screen.orientation.removeEventListener('change', handleChangeOrientation);
  }, [onOrientation]);
};
