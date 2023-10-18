import { FC, useState } from 'react';

import { SelectableProps } from '@/types';
import { HotTag } from '../types/dto';
import { useHotTags } from '../api/getHotTags';
import { cx } from '@emotion/css';
import { clickableButtonStyle } from '@/utils/style/button';

interface HotTagsProps extends SelectableProps<HotTag> {
  // selectedTitle?: string;
  _?: any;
}

const HotTags: FC<HotTagsProps> = ({ onSelect }) => {
  const { tags } = useHotTags();

  const [selectedTitle, setSelected] = useState<string>();

  const handleSelect = (tag: HotTag, idx: number) => {
    setSelected(tag.title);
    onSelect?.(tag, idx);
  };

  return (
    <div className="flex items-center gap-2">
      {tags?.map((tag, idx) => (
        <div
          key={idx}
          className={cx(
            clickableButtonStyle,
            'px-4 py-2 font-bold border rounded-full cursor-pointer whitespace-nowrap',
            selectedTitle === tag.title
              ? // ? 'shadow-inner bg-gray-100'
                ''
              : 'bg-white shadow',
          )}
          onClick={() => handleSelect?.(tag, idx)}
        >
          {tag.title}
        </div>
      ))}
    </div>
  );
};

export default HotTags;
