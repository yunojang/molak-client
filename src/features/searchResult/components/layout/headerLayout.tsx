import { LayoutProps } from '@/types';
import { FC } from 'react';
import { useScrolled } from '../../hooks/useScrolled';
import { cx } from '@emotion/css';

interface HeaderLayoutProps extends LayoutProps {
  top: string | number | 'isSecond';
  hasShadow?: boolean;
  className?: string;
}

const HeaderLayout: FC<HeaderLayoutProps> = ({
  top,
  hasShadow,
  children,
  className,
}) => {
  const { isTop } = useScrolled();

  return (
    <div
      style={{ top }}
      className={cx(
        className,
        !isTop && hasShadow ? 'shadow-sm' : '',
        top == 'isSecond' ? 'top-header' : '',
        ' sticky left-0 z-10 bg-white',
      )}
    >
      {children}
    </div>
  );
};

export default HeaderLayout;
