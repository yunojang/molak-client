import { FC, ReactElement } from 'react';
import { cx } from '@emotion/css';

import { LayoutProps } from '@/types';
import { useBreakPoint } from '@/utils/breakpoint';

interface FooterContainerRowProps extends LayoutProps {
  align?: 'start' | 'center' | 'end';
}

const FooterContainerRow: FC<FooterContainerRowProps> = ({
  children,
  align = 'center',
}) => {
  const relativeStyle = useBreakPoint(p =>
    p.bigger('md') ? 'flex mb-16' : 'flex flex-col gap-8 mb-8',
  );

  return (
    <div
      className={cx(relativeStyle, 'justify-between')}
      style={{ alignItems: align }}
    >
      {children}
    </div>
  );
};

export default FooterContainerRow;
