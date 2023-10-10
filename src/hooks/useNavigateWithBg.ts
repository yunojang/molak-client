import {
  NavigateOptions,
  To,
  useLocation,
  useNavigate,
} from 'react-router-dom';

export const useNavigateWithBg = (inputBg?: string) => {
  const navigate = useNavigate();
  const location = useLocation();
  const current = location.pathname + location.search;

  const navigateWithBg = (path: To, options?: NavigateOptions) => {
    navigate(path, {
      ...options,
      state: { background: inputBg ?? current, ...options?.state },
    });
  };

  return navigateWithBg;
};
