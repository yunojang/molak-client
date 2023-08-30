import { LayoutProps } from '@/types';
import { useBreakPoint } from '@/utils/breakpoint';
import { cx } from '@emotion/css';
import { FC } from 'react';

interface FooterContainerProps extends LayoutProps {
  _?: any;
}

const FooterContainer: FC<FooterContainerProps> = ({ children }) => {
  const relativeStyle = useBreakPoint(p =>
    p.bigger('md') ? 'py-14 px-space' : 'py-10 px-5',
  );

  return (
    <div className={cx(relativeStyle, 'bg-[#303740] text-white')}>
      {children}
    </div>
  );
};

export default FooterContainer;
