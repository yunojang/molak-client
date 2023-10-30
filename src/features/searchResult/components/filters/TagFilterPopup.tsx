import { FC, useMemo, useState } from 'react';
import { css, cx } from '@emotion/css';

import { FilterProps } from '@/components/Wrapper/withFilter';
import { useDiscover } from '@/features/find/api/getDiscover';

import { Checkbox, CheckboxGroup } from '@chakra-ui/react';
import { PopOver } from '@/components/Elements/Selector';
import SelectOpenBox from '@/components/Elements/SelectOpenBox/SelectOpenBox';
import Bubble from '@/components/Elements/bubble';

import { env } from '@/config';
import { adjust } from '@/utils/style/color';

interface Props extends FilterProps {
  value?: string[];
  // defaultValue: string[];
  onChange?(tags: string[] | undefined): void;
  disabled?: boolean;
}

// const wrapArray = (value: string | string[]) =>
//   Array.isArray(value) ? value : [value];

const emptyValue = '전체태그';

const TagFilter: FC<Props> = ({ value, onChange }) => {
  const {
    discover: { tags },
  } = useDiscover();
  const [selectedTags, setSelectedTags] = useState<string[]>(value ?? []);

  const current = useMemo(() => value ?? selectedTags, [value, selectedTags]);

  const display = useMemo(() => {
    switch (current.length) {
      case 0:
        return emptyValue;
      case 1:
        return current[0];
      default:
        return `${current[0]} 외 `;
    }
  }, [current]);

  const isSelected = useMemo(
    () => current[0] !== emptyValue || current.length >= 2,
    [current],
  );

  const handleChange = (tags: string[]) => {
    setSelectedTags(tags);
    onChange?.(tags);
  };

  const toneDownPrimary = adjust(env.colors.primary, -25);

  return (
    <PopOver
      trigger={
        <div className="relative z-50">
          <SelectOpenBox
            display={display}
            className={isSelected ? 'font-bold' : ''}
          />
          {current.length > 1 && (
            <Bubble size="1.5rem" color={toneDownPrimary}>
              {current.length}
            </Bubble>
          )}
        </div>
      }
      placement="bottom"
    >
      {close => (
        <div className="flex flex-wrap gap-1 p-5 shadow-xl rounded-xl w-[35vw] min-w-[15em]">
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
