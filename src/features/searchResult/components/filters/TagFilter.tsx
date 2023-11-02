import { FC, useMemo, useState } from 'react';
import { css, cx } from '@emotion/css';

import { FilterProps } from '@/components/Wrapper/withFilter';
import { useDiscover } from '@/features/find/api/getDiscover';

import { Checkbox, CheckboxGroup } from '@chakra-ui/react';
import { useBreakPoint } from '@/utils/breakpoint';
import FilterTitleLayout from './layout/FilterTitleLayout';
import { useSizeRate } from '@/hooks/responsive/usePadding';

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

  const {
    standard: { size },
  } = useSizeRate(540, 0.05);

  const width = useBreakPoint(p => (p.bigger('md') ? size : ''));

  const handleChange = (tags: string[]) => {
    setSelectedTags(tags);
    onChange?.(tags);
  };

  return (
    <FilterTitleLayout title="태그선택">
      <div
        style={{
          width,
          gridTemplateColumns: 'repeat(5, minmax(5em, 1fr))',
        }}
        className="grid gap-1"
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
    </FilterTitleLayout>
  );
};

export default TagFilter;

const checkBg = css`
  .chakra-checkbox__control {
    background: #f5f5f5;
  }
`;
