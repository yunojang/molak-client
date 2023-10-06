import { FC } from 'react';

import { RecommendContent } from '@/features/content/types/dto';
import { Image } from '@/components/Elements/Image';

interface RecommendCardProps {
  recommend: RecommendContent;
}

const RecommendCard: FC<RecommendCardProps> = ({ recommend }) => {
  const { background } = recommend;
  return (
    <div
      className="px-7 pt-7 rounded-xl min-w-[360px] h-[440px] cursor-pointer select-none border border-gray-50 shadow-lg"
      style={{ background }}
    >
      <div className="flex flex-col justify-between gap-7 h-full overflow-hidden">
        <header
          className="flex flex-col gap-3 items-start"
          style={{ color: recommend.textColor }}
        >
          <span className="text-sm">{recommend.content.title}</span>
          <span className="font-bold text-xl">{recommend.recommend_text}</span>
        </header>

        <div>
          <Image src={recommend.recommend_image} />
        </div>
      </div>
    </div>
  );
};

export default RecommendCard;
