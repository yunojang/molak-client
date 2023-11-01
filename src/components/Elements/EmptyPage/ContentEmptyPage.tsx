import { FC } from 'react';

import { useText } from '@/hooks/responsive/usePadding';
import MolakIcon from '@/components/Icon/MolakIcon';
import { cx } from '@emotion/css';

interface ContentEmptyPageProps {
  query?: string;
}

const ContentEmptyPage: FC<ContentEmptyPageProps> = ({ query }) => {
  const { xxl } = useText();
  return (
    <div className="min-h-[60vh] h-full w-full m-auto flex flex-col gap-10 justify-center items-center">
      <MolakIcon text={{ size: 0 }} icon={{ color: '#ccc', size: 200 }} />
      <div className={cx(xxl.className, 'text-gray-400')}>
        찾으시는 검색 결과가 없네요.
      </div>
    </div>
  );
};

export default ContentEmptyPage;
