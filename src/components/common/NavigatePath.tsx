import { FC, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

interface NavigatePathProps {
  path: string;
  children?: ReactElement | ReactElement[];
}

const NavigatePath: FC<NavigatePathProps> = ({ path, children }) => {
  const navigate = useNavigate();
  return <div onClick={() => navigate(path)}>{children}</div>;
};

export default NavigatePath;
