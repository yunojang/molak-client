import { FC, ReactElement } from 'react';
import { useNavigate } from '@/hooks/common/useNavigate';

interface NavigatePathProps {
  path: string;
  children?: ReactElement | ReactElement[];
}

const NavigateAnchor: FC<NavigatePathProps> = ({ path, children }) => {
  const navigate = useNavigate();
  return <a onClick={() => navigate(path)}>{children}</a>;
};

export default NavigateAnchor;
