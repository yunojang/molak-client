import { usePadding } from '@/hooks/responsive/usePadding';
import { LayoutProps } from '@/types';
import { FC } from 'react';

interface TobarLayoutProps extends LayoutProps {
  __?: any;
}

const TopbarLayout: FC<TobarLayoutProps> = ({ children }) => {
  const { lg } = usePadding();

  return (
    <div
      style={{ paddingLeft: lg.degree * 4, paddingRight: lg.degree * 4 }}
      className={`sticky top-0 z-30 overflow-hidden bg-white shadow-sm h-header  py-3 flex items-center`}
    >
      {children}
    </div>
  );
};

export default TopbarLayout;
