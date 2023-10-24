import { FC } from 'react';
import { cx } from '@emotion/css';

import { clickableButtonStyle } from '@/utils/style/button';
import { BsCaretRightFill } from 'react-icons/bs';
import { useCountDown } from '../hooks/useCountDown';

interface NextEpisodeButtonProps {
  onClick?(): void;
  autoClickDelaySec?: number;
}

const NextEpisodeButton: FC<NextEpisodeButtonProps> = ({
  autoClickDelaySec = 0,
  onClick,
}) => {
  //  0초까지 줄어들면 onClick 실행
  const { count } = useCountDown({
    initCount: autoClickDelaySec,
    immediateStart: true,
    onZero: onClick,
  });

  return (
    <button
      onClick={onClick}
      className={cx(
        clickableButtonStyle,
        'absolute right-7 bottom-20 z-20 py-3 px-4 pr-7 flex items-center gap-2 bg-dark text-primary-500 shadow-lg rounded-lg font-bold',
      )}
    >
      <BsCaretRightFill size={20} />
      <span>다음화 재생</span>
      <span>{count}초</span>
    </button>
  );
};

export default NextEpisodeButton;
