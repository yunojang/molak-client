import { useLocation, useNavigate } from 'react-router-dom';

interface LocationState {
  background?: string;
}

export const useBackgroundLocation = () => {
  const location = useLocation();
  const state = location.state as LocationState;
  const background = state?.background;

  return background;
};
