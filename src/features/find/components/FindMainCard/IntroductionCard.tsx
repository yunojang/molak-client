import { FC } from 'react';
import { useNavigate } from '@/hooks/common/useNavigate';

import { Circle } from '@/components/Elements/Circle';
import { useCoverNavigate } from '@/features/contentModal/hooks/useCoverNavigate';
import { useSizeRate } from '@/hooks/responsive/usePadding';

export interface IntroductionCardProps {
  type: '꼭 봐야하는' | '한번 해보세요' | '모락 새기능';
  title: string;
  background: string;
  img?: string;
  description?: string;
  link?: string;
  prepare?: boolean;
}

const IntroductionCard: FC<IntroductionCardProps> = ({
  background,
  title,
  type,
  img,
  description,
  link,
  prepare,
}) => {
  const navigate = useNavigate();
  const { keepNavigate } = useCoverNavigate();
  const {
    standard: { size: width },
  } = useSizeRate(480, 0.185);

  const {
    standard: { size: height },
  } = useSizeRate(300, 0.16);

  const handleClick = () => {
    if (prepare || !link) return;
    if (type === '꼭 봐야하는') keepNavigate(link);
    else navigate(link);
  };

  const { standard: circle } = useSizeRate(200, 0.2);

  return (
    <div
      className="flex justify-between gap-10 rounded-md p-7 pr-3 flex-1 cursor-pointer relative"
      style={{ background, minWidth: width, height }}
      onClick={handleClick}
    >
      {prepare && (
        <div className="absolute inset-0 bg-black bg-opacity-25 flex justify-center items-center rounded-md z-[5]">
          <span className="text-white text-xl font-bold">준비중입니다</span>
        </div>
      )}

      <div className="flex flex-col gap-3">
        <span className="text-sm text-gray-600 font-bold">{type}</span>
        <span className="text-2xl font-bold">{title}</span>
        <span className="">{description}</span>
      </div>

      <div className="self-center">
        <Circle size={circle.size} background="#f5f5f5">
          {img && <img src={img} alt="img" />}
        </Circle>
      </div>
    </div>
  );
};

export default IntroductionCard;
