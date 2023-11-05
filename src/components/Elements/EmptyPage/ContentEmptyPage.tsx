import { FC } from 'react';

import EmptyNoti from './EmptyNoti';

interface ContentEmptyPageProps {
  _?: any;
}

const ContentEmptyPage: FC<ContentEmptyPageProps> = () => {
  return (
    <div className="min-h-[60vh]">
      <EmptyNoti />
    </div>
  );
};

export default ContentEmptyPage;
