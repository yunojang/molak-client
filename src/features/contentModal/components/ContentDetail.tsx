import { FC, useContext } from 'react';

import { useContent } from '../../content/api/getContent';
import { useCoverNavigate } from '../hooks/useCoverNavigate';

import { IconButton } from '@/components/Elements/IconButton';
import { BsFillPlayFill } from 'react-icons/bs';
import ContentTag from './Elements/ContentTag';
import SkeletonContentDetail from './Elements/SkeletonContentDetail';
import { Image } from '@/components/Elements/Image';
import { ContentIdContext } from '../store/ContentIdContext';

interface ContentVideoDetailProps {
  _?: any;
  // id: string;
}

const ContentIntroDetail: FC<ContentVideoDetailProps> = () => {
  const { contentId } = useContext(ContentIdContext);
  const { keepNavigate } = useCoverNavigate();

  const { content, isLoading: _isLoading } = useContent(contentId, {
    suspense: false,
  });

  const isLoading = _isLoading || !content;

  return (
    <div className="w-full h-full flex flex-col relative text-gray-100">
      {!isLoading && (
        <div className="absolute top-0 left-0 w-full h-full">
          <Image src={content?.thumbnailUrl} width="100%" className="h-full" />
          <div
            className="absolute top-0 left-0 h-full w-full z-10"
            style={{
              background:
                'linear-gradient(0deg,  rgba(0,0,0,1) 35%, rgba(0,0,0,0.3)',
            }}
          />
        </div>
      )}

      <div className="flex-1 z-20 flex flex-col gap-8 justify-end p-10">
        {isLoading ? (
          <SkeletonContentDetail />
        ) : (
          <div className="flex flex-col gap-2">
            <div className="self-start">
              <ContentTag
                background="#f5f5f5"
                className="text-dark font-black text-lg"
              >
                {content?.videoType}
              </ContentTag>
            </div>

            <div className="text-gray-100">{content?.provider}</div>
            <div className="text-4xl font-bold mb-2">{content?.title}</div>
            <div className="flex gap-1 items-center">
              {content?.tags.map((tag, i) => (
                <ContentTag background="#89898957" key={i} className="text-lg">
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
              keepNavigate(`/content/${contentId}/${content?.episodeId}`)
            }
          >
            <IconButton size={24} background="#89898957">
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

export default ContentIntroDetail;
