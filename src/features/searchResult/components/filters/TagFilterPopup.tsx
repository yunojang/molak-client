import { FC, useMemo } from 'react';

import { FilterProps } from '@/components/Wrapper/withFilter';

import { PopOver } from '@/components/Elements/Selector';
import SelectOpenBox from '@/components/Elements/SelectOpenBox/SelectOpenBox';
import Bubble from '@/components/Elements/bubble';

import { env } from '@/config';
import { adjust } from '@/utils/style/color';
import TagFilter from './TagFilter';

interface Props extends FilterProps {
  value?: string[];
  // defaultValue: string[];
  onChange?(tags: string[] | undefined): void;
  disabled?: boolean;
}

// const wrapArray = (value: string | string[]) =>
//   Array.isArray(value) ? value : [value];

const emptyValue = '전체태그';

const TagFilterPopup: FC<Props> = ({ value, onChange }) => {
  const current = useMemo(() => value ?? [], [value]);
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

  const isSelected = useMemo(() => current.length >= 1, [current]);

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
      {close => <TagFilter value={value} onChange={onChange} />}
    </PopOver>
  );
};

export default TagFilterPopup;
