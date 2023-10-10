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

const FeedList: FC<FeedListProps> = ({ contentHeight, gap = 26 }) => {
  const navigate = useNavigateWithBg();

  const { feeds } = useFeeds();

  const { count } = useCardCount();
  const handleClickContent = (id: string) => navigate(`/content/${id}`);

  return (
    <div className="flex flex-col" style={{ gap: gap * 4 }}>
      {feeds?.map((feed, i) => (
        <div key={i}>
          <div className="mb-5 pl-space">
            <FeedTitle title={feed.name} />
          </div>

          <CardCarousel
            loop
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
    </div>
  );
};

export default FeedList;
