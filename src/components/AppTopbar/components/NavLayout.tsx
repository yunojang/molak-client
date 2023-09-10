import { LayoutProps } from '@/types';
import { FC } from 'react';

interface NavLayuoutProps extends LayoutProps {
  _?: any;
}

const NavLayuout: FC<NavLayuoutProps> = ({ children }) => {
  return <div className="flex items-center gap-5">{children}</div>;
};

export default NavLayuout;
