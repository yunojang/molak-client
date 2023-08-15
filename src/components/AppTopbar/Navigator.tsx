import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

export interface NavObject {
  name: string;
  path: string;
}

interface NavigatorProps {
  nav: NavObject[];
}

const Navigator: FC<NavigatorProps> = ({ nav }) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center select-none">
      {nav.map(({ name, path }, i) => (
        <div
          key={i}
          className=" py-2 px-7 cursor-pointer"
          onClick={() => navigate(path)}
        >
          {name}
        </div>
      ))}
    </div>
  );
};

export default Navigator;
