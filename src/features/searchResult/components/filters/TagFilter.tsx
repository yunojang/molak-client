import { FC, useMemo, useState } from 'react';
import { css, cx } from '@emotion/css';

import { FilterProps } from '@/components/Wrapper/withFilter';
import { useDiscover } from '@/features/find/api/getDiscover';

import { Checkbox, CheckboxGroup } from '@chakra-ui/react';
import { useBreakPoint } from '@/utils/breakpoint';

export interface TagFilterProps extends FilterProps {
  value?: string[];
  onChange?(tags: string[] | undefined): void;
  disabled?: boolean;
}

const TagFilter: FC<TagFilterProps> = ({ value, onChange }) => {
  const {
    discover: { tags },
  } = useDiscover();
  const [selectedTags, setSelectedTags] = useState<string[]>(value ?? []);
  const current = useMemo(() => value ?? selectedTags, [value, selectedTags]);
  const width = useBreakPoint(p => (p.eqBigger('md') ? '40vw' : '70vw'));

  const handleChange = (tags: string[]) => {
    setSelectedTags(tags);
    onChange?.(tags);
  };

  return (
    <div
      style={{ width }}
      className="flex flex-wrap gap-1 p-5 shadow-xl rounded-xl min-w-[15em]"
    >
      <CheckboxGroup
        colorScheme="molak"
        onChange={handleChange}
        value={current}
      >
        {tags.map((tag, i) => {
          return (
            <Checkbox
              value={tag}
              size="lg"
              key={i}
              className={cx(checkBg, 'py-2 px-5  rounded-full')}
            >
              {tag}
            </Checkbox>
          );
        })}
      </CheckboxGroup>
    </div>
  );
};

export default TagFilter;

const checkBg = css`
  .chakra-checkbox__control {
    background: #f5f5f5;
  }
`;
