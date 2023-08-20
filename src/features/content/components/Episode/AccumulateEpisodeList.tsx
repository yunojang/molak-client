import { FC, useEffect, useState } from 'react';

import { Content } from '../../types/dto';
import { useEpisodes } from '../../api/getEpisodes';

import { PagableListProps } from '@/components/List/types';
import SkeletonEpisodeList from '@/components/Elements/Card/SkeletonEpisodeList';
import EpisodeCard from '@/components/Elements/Card/EpisodeCard';
import { queryClient } from '@/lib/react-query';

interface EpisodeListProps extends PagableListProps {
  id: string;
  columnCount?: number;
  onSelect?(id: string): void;
}

// acc 처리 대책 필요...
const AccumulateEpisodeList: FC<EpisodeListProps> = ({
  id,
  params,
  title = () => null,
  pager = () => null,
  onSelect,
}) => {
  const cached = queryClient.getQueryData([
    'episodes',
    id,
    JSON.stringify(params),
  ]) as { content: Content[] } | undefined;

  const [accContents, setAccContents] = useState<Content[]>([]);
  const { totalElements, totalPages, isEnd, isLoading } = useEpisodes(
    id,
    params,
    {
      suspense: false,
      onSuccess: cached
        ? undefined
        : ({ content }) => setAccContents(prev => prev.concat(content)),
    },
  );

  useEffect(() => {
    if (cached) setAccContents(prev => prev.concat(cached.content));
  }, [cached]);

  return (
    <div>
      {title(totalElements, isLoading)}

      {!accContents.length ? (
        <SkeletonEpisodeList count={40} gap={3} />
      ) : (
        <div className="flex flex-col gap-3">
          {accContents.map((episode, i) => (
            <EpisodeCard
              key={i}
              content={episode}
              onClick={() => onSelect?.(episode.id)}
            />
          ))}
        </div>
      )}
      {pager(totalPages, isEnd, isLoading)}
    </div>
  );
};

export default AccumulateEpisodeList;
