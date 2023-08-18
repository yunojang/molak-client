import { FC } from 'react';
import { cx } from '@emotion/css';

import Relations from './Relations';
import { scrollStyle } from '@/utils/style/content';

interface ContentDetailProps {
  id: string;
}

const ContentDetail: FC<ContentDetailProps> = ({ id }) => {
  return (
    <div className="flex gap-2 h-[720px]">
      <iframe
        width="1280"
        height="720"
        src="https://www.youtube.com/embed/6wN_Cewq7_U"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
      <div className={cx('items-stretch h-full', scrollStyle)}>
        <Relations id={id} />
      </div>
    </div>
  );
};

export default ContentDetail;
