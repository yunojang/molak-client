import { FC, useMemo, useState } from 'react';
import { css, cx } from '@emotion/css';

import { FilterProps } from '@/components/Wrapper/withFilter';
import { useDiscover } from '@/features/find/api/getDiscover';

import { Checkbox, CheckboxGroup } from '@chakra-ui/react';
import { PopOver } from '@/components/Elements/Selector';
import SelectOpenBox from '@/components/Elements/SelectOpenBox/SelectOpenBox';
import { adjust } from '@/utils/style/color';
import { env } from '@/config';
import Bubble from '@/components/Elements/bubble';

interface Props extends FilterProps {
  defaultValue: string[];
  onChange?(tags: string[] | undefined): void;
  disabled?: boolean;
}

// const wrapArray = (value: string | string[]) =>
//   Array.isArray(value) ? value : [value];

const TagFilter: FC<Props> = ({ defaultValue, onChange }) => {
  const {
    discover: { tags },
  } = useDiscover();
  const [selectedTags, setSelectedTags] = useState<string[]>(defaultValue);

  const display = useMemo(
    () =>
      selectedTags.length === 1 ? selectedTags[0] : `${selectedTags[0]} 외`,
    [selectedTags],
  );

  const isSelected = useMemo(
    () => selectedTags[0] != defaultValue[0] || selectedTags.length >= 2,
    [selectedTags, defaultValue],
  );

  const handleChange = (tags: string[]) => {
    setSelectedTags(tags.length ? tags : defaultValue);
    onChange?.(tags);
  };

  const toneDownPrimary = adjust(env.colors.primary, -30);

  return (
    <PopOver
      trigger={
        <div className="relative">
          <SelectOpenBox
            display={display}
            className={isSelected ? 'font-bold' : ''}
          />
          {selectedTags.length > 1 && (
            <Bubble size="1.5rem" color={toneDownPrimary}>
              {selectedTags.length}
            </Bubble>
          )}
        </div>
      }
      placement="bottom"
    >
      {close => (
        <div className="flex flex-wrap gap-1 p-5 shadow-xl rounded-xl w-[30vw]">
          <CheckboxGroup colorScheme="molak" onChange={handleChange}>
            {tags.map((tag, i) => (
              <Checkbox
                value={tag}
                size="lg"
                key={i}
                className={cx(checkBg, 'py-2 px-5  rounded-full')}
              >
                {tag}
              </Checkbox>
            ))}
          </CheckboxGroup>
        </div>
      )}
    </PopOver>
  );
};

export default TagFilter;

const checkBg = css`
  .chakra-checkbox__control {
    background: #f5f5f5;
  }
`;
