import { FC } from 'react';
import { useNavigate } from '@/hooks/common/useNavigate';

interface Routable {
  route?(path?: string): void;
}

export const withRoute = <T extends Routable>(Comp: FC<T>) => {
  return function Inner(props: T) {
    const navigate = useNavigate();
    const route = (path?: string) => {
      if (path) navigate(path);
    };

    return <Comp route={route} {...props} />;
  };
};
