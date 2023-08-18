import { useLocation } from 'react-router-dom';

interface LocationState {
  background?: string;
}

export const useBackgroundLocation = () => {
  const location = useLocation();
  const state = location.state as LocationState;
  const bg = state?.background;

  return bg;
};
