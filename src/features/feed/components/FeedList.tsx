import { FC } from 'react';
import { useFeeds } from '../api/getFeeds';

import FeedTitle from './FeedTitle';
import ContentCard from '@/components/Elements/Card/ContentCard';
import CardCarousel from '@/components/Elements/Carousel/CardCarousel';
import { useCardCount } from '@/features/content/hooks/useCardCount';
import { useNavigateWithBg } from '@/hooks/useNavigateWithBg';

interface FeedListProps {
  contentHeight?: string | number;
  gap?: number;
}

const FeedList: FC<FeedListProps> = ({ contentHeight, gap = 20 }) => {
  const navigate = useNavigateWithBg();

  const { feeds } = useFeeds();
  const { count } = useCardCount();

  const handleClickContent = (id: string) => navigate(`/content/${id}`);

  return (
    <>
      {feeds?.map((feed, i) => (
        <div style={{ marginBottom: gap * 4 }} key={i}>
          <div className="mb-5 pl-space">
            <FeedTitle title={feed.name} />
          </div>

          <CardCarousel
            height={contentHeight}
            count={count}
            gap={20}
            items={feed.items_list.map((content, i) => (
              <ContentCard
                key={i}
                content={content}
                onClick={() => handleClickContent(content.id)}
              />
            ))}
          />
        </div>
      ))}
    </>
  );
};

export default FeedList;
