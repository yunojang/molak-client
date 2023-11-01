import { FC } from 'react';

import { useText } from '@/hooks/responsive/usePadding';
import MolakIcon from '@/components/Icon/MolakIcon';
import { cx } from '@emotion/css';

interface ContentEmptyPageProps {
  message?: string;
}

const ContentEmptyPage: FC<ContentEmptyPageProps> = ({
  message = '찾으시는 검색 결과가 없어요.',
}) => {
  const { xxl } = useText();
  return (
    <div className="min-h-[60vh] h-full w-full m-auto flex flex-col gap-10 justify-center items-center">
      <MolakIcon text={{ size: 0 }} icon={{ color: '#ccc', size: 200 }} />
      <div className={cx(xxl.className, 'text-gray-400')}>{message}</div>
    </div>
  );
};

export default ContentEmptyPage;
