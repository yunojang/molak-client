import { useContentWidth } from '@/hooks/useContentWidth';
import ToScroll from '@/utils/scroll/ToScroll';
import { cx } from '@emotion/css';
import { FC, HtmlHTMLAttributes, ReactNode } from 'react';

interface PageLayoutProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

const PageLayout: FC<PageLayoutProps> = ({ children, className, ...rest }) => {
  const { cls: widthClassName } = useContentWidth({
    widths: ['960px', '960px', '90%'],
  });
  return (
    <div {...rest} className={cx(className, widthClassName, 'pt-5')}>
      <ToScroll to={0} />
      {children}
    </div>
  );
};

export default PageLayout;
