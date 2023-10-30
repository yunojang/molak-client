import { FC, useContext } from 'react';

import { useContent } from '../../content/api/getContent';
import { useCoverNavigate } from '../hooks/useCoverNavigate';

import ContentTag from './Elements/ContentTag';
import SkeletonContentDetail from './Elements/SkeletonContentDetail';
import { Image } from '@/components/Elements/Image';
import { ContentInfoContext } from '../store/ContentIdContext';
import { usePadding } from '@/hooks/responsive/usePadding';
import ContentStartButton from './Elements/ContentStartButton';

interface ContentVideoDetailProps {
  _?: any;
  // id: string;
}

const ContentIntroDetail: FC<ContentVideoDetailProps> = () => {
  const { contentId } = useContext(ContentInfoContext);
  const { keepNavigate } = useCoverNavigate();

  const { content, isLoading: _isLoading } = useContent(contentId, {
    suspense: false,
  });
  const isLoading = _isLoading || !content;

  const handleClickStartButton = () => {
    keepNavigate(`/content/${contentId}/${content?.episodeId}`);
  };
  const pad = usePadding();

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

      <div
        className={'flex-1 z-20 flex flex-col gap-8 justify-end'}
        style={{ padding: pad.xl.degree * 4 }}
      >
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

            <div className="text-gray-100">{content?.channel.name}</div>
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

        <ContentStartButton onClick={handleClickStartButton} />
      </div>
    </div>
  );
};

export default ContentIntroDetail;
