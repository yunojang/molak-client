import { FC } from 'react';

import { IconButton } from '@/components/Elements/IconButton';
import { BsFillPlayFill } from 'react-icons/bs';
import { useSizeRate } from '@/hooks/responsive/usePadding';

interface ContentStartButtonProps {
  onClick?(): void;
}

const ContentStartButton: FC<ContentStartButtonProps> = ({ onClick }) => {
  const {
    standard: { size: size },
  } = useSizeRate(24);
  const {
    standard: { size: iconSize },
  } = useSizeRate(60);

  return (
    <div
      className="flex gap-5 items-center cursor-pointer"
      onClick={() => onClick?.()}
    >
      <IconButton size={size} background="#89898957">
        <BsFillPlayFill size={iconSize} className="relative left-[2px]" />
      </IconButton>

      <div className="font-bold text-2xl select-none">1화부터 감상하기</div>
    </div>
  );
};

export default ContentStartButton;
