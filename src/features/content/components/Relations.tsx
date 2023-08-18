import { FC } from 'react';
import { cx } from '@emotion/css';

import { useEpisodes } from '../api/getEpisodes';

import EpisodeCard from '@/components/Elements/Card/EpisodeCard';
import { scrollStyle } from '@/utils/style/content';

interface RelationsProps {
  id: string;
}

const Relations: FC<RelationsProps> = ({ id }) => {
  const { episodes } = useEpisodes(id, {});

  return (
    <div className={cx(scrollStyle, 'w-full h-full p-5 rounded-md bg-white')}>
      <div className="mb-5 text-xl font-bold">시리즈</div>
      <div className="flex flex-col gap-3">
        {episodes.map((episode, i) => (
          <EpisodeCard key={i} content={episode} />
        ))}
      </div>
    </div>
  );
};

export default Relations;
