import { FC } from 'react';

import EmptyNoti from './EmptyNoti';

interface ContentEmptyPageProps {
  _?: any;
}

const ContentEmptyPage: FC<ContentEmptyPageProps> = () => {
  return (
    <div className="min-h-[40vh] h-[50%] flex justify-center items-center">
      <EmptyNoti />
    </div>
  );
};

export default ContentEmptyPage;
