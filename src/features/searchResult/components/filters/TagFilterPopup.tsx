import { FC, useState } from 'react';
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
  disabled?: boolean;
}

const TagFilter: FC<Props> = ({
  defaultValue = ['모든 태그'],
  onChange,
  disabled,
}) => {
  const { discover } = useDiscover();
  const { tags } = discover;
  const [selectedTags, setSelectedTags] = useState<string[]>(defaultValue);

  const display =
    selectedTags.length === 1 ? selectedTags[0] : `${selectedTags[0]} 외`;

  const handleChange = (tags: string[]) => {
    let newTags = tags;
    if (!tags.length) newTags = ['모든 태그'];

    setSelectedTags(newTags);
    onChange?.(newTags);
  };

  const toneDownPrimary = adjust(env.colors.primary, -30);
  const isSelected = selectedTags.length >= 2 || selectedTags[0] != '모든 태그';

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
