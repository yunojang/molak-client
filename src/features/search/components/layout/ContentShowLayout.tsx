import { LayoutProps } from '@/types';
import { FC } from 'react';

interface ContentShowLayoutProps extends LayoutProps {
  title?: string;
}

const ContentShowLayout: FC<ContentShowLayoutProps> = ({ children, title }) => {
  return (
    <div className="flex flex-col gap-3">
      {title && <div className="font-bold text-dark text-lg">{title}</div>}
      {children}
    </div>
  );
};

export default ContentShowLayout;
