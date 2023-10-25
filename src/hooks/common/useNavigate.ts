import { moveScroll } from '@/utils/scroll/scroll';
import {
  NavigateFunction,
  To,
  useNavigate as useOrigin,
} from 'react-router-dom';

export const useNavigate = () => {
  const origin = useOrigin();

  const navigate: NavigateFunction = arg => {
    origin(arg as To);
    moveScroll({ behavior: 'auto' });
  };

  return navigate;
};
