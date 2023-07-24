import { FC, ReactNode } from 'react';

interface AdminLayoutProps {
  children: ReactNode;
  title?: string;
}

const ContentLayout: FC<AdminLayoutProps> = ({ children }) => {
  return <div className="flex-1">{children}</div>;
};

export default ContentLayout;
