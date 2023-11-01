import { useEffect } from 'react';

interface OrientEvent {
  isVertical: boolean; // 세로 상태
}

export const useOriental = (onOrientation?: (event: OrientEvent) => void) => {
  useEffect(() => {
    const handleChangeOrientation = (e: Event) => {
      const type = e.target?.type; // portrait-primary, portrait-secondary, landscape-primary, landscape-secondary
      const angle = e.target?.angle; // 0, 90, 180, -90

      const isVertical = type?.includes('portrait') && angle === 0;
      onOrientation?.({ isVertical });
    };

    screen.orientation.addEventListener('change', handleChangeOrientation);
    return () =>
      screen.orientation.removeEventListener('change', handleChangeOrientation);
  }, [onOrientation]);
};
