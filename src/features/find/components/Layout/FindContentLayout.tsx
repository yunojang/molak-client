import { useContentWidth } from '@/hooks/useContentWidth';
import { LayoutProps } from '@/types';
import { cx } from '@emotion/css';
import { FC } from 'react';

interface FindContentLayoutProps extends LayoutProps {
  _?: any;
}

const FindContentLayout: FC<FindContentLayoutProps> = ({ children }) => {
  const { cls } = useContentWidth({ widths: ['96%', '97%'] });

  return <div className={cx(cls)}>{children}</div>;
};

export default FindContentLayout;
