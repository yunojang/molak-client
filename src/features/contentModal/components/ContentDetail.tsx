import { FC } from 'react';

import { useContent } from '../../content/api/getContent';
import { useNavigateWithBg } from '@/hooks/useNavigateWithBg';

import { IoClose } from 'react-icons/io5';
import { IconButton } from '@/components/Elements/IconButton';
import { BsFillPlayFill } from 'react-icons/bs';
import ContentTag from './Elements/ContentTag';
import SkeletonContentDetail from './Elements/SkeletonContentDetail';
import { useBackgroundLocation } from '@/hooks/useBackgroundLocation';

interface ContentVideoDetailProps {
  id: string;
  onClose?(): void;
}

const ContentVideoDetail: FC<ContentVideoDetailProps> = ({ id, onClose }) => {
  const bg = useBackgroundLocation();
  const keepNavigate = useNavigateWithBg(bg);
  const { content, isLoading: _isLoading } = useContent(id, {
    suspense: false,
  });

  const isLoading = _isLoading || !content;

  return (
    <div className="w-full h-full flex flex-col relative text-gray-100">
      {!isLoading && (
        <div className="h-[85%] absolute top-0 left-0 w-full">
          <img
            className="blur-sm object-cover h-full w-full"
            src={content?.thumbnail}
          />
          <div className="absolute bg-gradient-to-t from-dark h-[85%] w-full -bottom-2 z-10" />
        </div>
      )}

      <div className="flex justify-end p-4 z-10">
        <IconButton size={12} onClick={onClose}>
          <IoClose size={34} color="#fff" />
        </IconButton>
      </div>

      <div className="flex-1 z-10 flex flex-col gap-8 justify-end p-10">
        {isLoading ? (
          <SkeletonContentDetail />
        ) : (
          <div className="flex flex-col gap-2">
            <div className="self-start">
              <ContentTag
                background="#f5f5f5"
                className="text-dark font-black text-lg"
              >
                {content?.type}
              </ContentTag>
            </div>

            <div className="text-gray-100">{content?.provider}</div>
            <div className="text-4xl font-bold mb-2">{content?.title}</div>
            <div className="flex gap-1 items-center">
              {content?.tags.map((tag, i) => (
                <ContentTag background="#00000058" key={i} className="text-lg">
                  #{tag}
                </ContentTag>
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-between">
          <div
            className="flex gap-5 items-center cursor-pointer"
            onClick={() =>
              keepNavigate(`/content/${id}/${content?.episode_id}`)
            }
          >
            <IconButton size={24} background="#00000058">
              <BsFillPlayFill size={60} className="relative left-[2px]" />
            </IconButton>
            <div className="font-bold text-2xl select-none">
              1화부터 감상하기
            </div>
          </div>

          <div className="flex gap-3"></div>
        </div>
      </div>
    </div>
  );
};

export default ContentVideoDetail;
