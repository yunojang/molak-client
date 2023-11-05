import { cx } from '@emotion/css';
import { FC } from 'react';
import MolakIcon from '@/components/Icon/MolakIcon';
import { useText } from '@/hooks/responsive/usePadding';

interface EmptyNotiProps {
  size?: number;
  message?: string;
  pad?: number;
}

const EmptyNoti: FC<EmptyNotiProps> = ({
  message = '찾으시는 결과가 없어요.',
  size = 200,
  pad = 1,
}) => {
  const { xxl } = useText();

  return (
    <div
      style={{ paddingTop: pad * 4, paddingBottom: pad * 4 }}
      className="h-full w-full m-auto flex flex-col gap-10 justify-center items-center"
    >
      <MolakIcon text={{ size: 0 }} icon={{ color: '#ccc', size }} />
      <div className={cx(xxl.className, 'text-gray-400')}>{message}</div>
    </div>
  );
};

export default EmptyNoti;
