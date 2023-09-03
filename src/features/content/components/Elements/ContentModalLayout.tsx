import { FC } from 'react';
import { cx } from '@emotion/css';
import { useBreakPoint } from '@/utils/breakpoint';

import { LayoutProps } from '@/types';

interface ContentModalLayoutProps extends LayoutProps {
  height?: string | number;
}

const ContentModalLayout: FC<ContentModalLayoutProps> = ({
  children,
  height,
}) => {
  const layout = useBreakPoint(p => {
    if (p.eqBigger('2xl')) return 'flex';
    if (p.eqBigger('xl')) return 'flex-col';
    else return 'flex-col';
  });

  return (
    <div className={cx(layout, `flex gap-2`)} style={{ height }}>
      {children}
    </div>
  );
};

export default ContentModalLayout;
