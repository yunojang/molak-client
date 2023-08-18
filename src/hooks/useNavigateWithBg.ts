import { NavigateOptions, useLocation, useNavigate } from 'react-router-dom';

export const useNavigateWithBg = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const background = location.pathname;

  const navigateWithBg = (path: string, options?: NavigateOptions) => {
    navigate(path, { ...options, state: { background, ...options?.state } });
  };

  return navigateWithBg;
};
