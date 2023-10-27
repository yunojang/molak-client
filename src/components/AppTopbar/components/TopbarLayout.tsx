import { usePadding } from '@/hooks/responsive/usePadding';
import { LayoutProps } from '@/types';
import { FC } from 'react';

interface TobarLayoutProps extends LayoutProps {
  __?: any;
}

const TopbarLayout: FC<TobarLayoutProps> = ({ children }) => {
  const { md, lg } = usePadding();

  console.log(lg.degree);

  return (
    <div
      className={`sticky top-0 z-30 overflow-hidden bg-white shadow-sm h-header px-${lg.degree} py-3 flex items-center`}
    >
      {children}
    </div>
  );
};

export default TopbarLayout;
