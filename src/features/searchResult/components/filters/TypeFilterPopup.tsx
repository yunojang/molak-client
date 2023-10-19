import { FC, useState } from 'react';
import { cx } from '@emotion/css';

import { FilterProps } from '@/components/Wrapper/withFilter';
import { PopOver } from '@/components/Elements/Selector';
import SelectOpenBox from '@/components/Elements/SelectOpenBox/SelectOpenBox';

import { adjust } from '@/utils/style/color';
import { env } from '@/config';
import { clickableButtonStyle } from '@/utils/style/button';

interface TypeFilterProps extends FilterProps {
  value?: string;
  defaultValue: string;
  onChange?(type: string | undefined): void;
}

const TYPES = ['모든 작품', '시리즈', '단편'];

const TypeFilter: FC<TypeFilterProps> = ({ onChange, defaultValue, value }) => {
  const [type, setType] = useState(value ?? defaultValue);
  const display = value ?? type;
  const alreadySelect = display !== defaultValue;

  const handleSelect = (type: string) => {
    setType(type);

    if (type === defaultValue) onChange?.(undefined);
    else onChange?.(type);
  };

  return (
    <PopOver
      trigger={
        <SelectOpenBox
          className={alreadySelect ? 'font-bold' : ''}
          display={display}
        />
      }
      placement="bottom"
    >
      {close => (
        <div className="flex flex-col items-center px-5 py-5 gap-1 shadow-xl rounded-lg">
          {TYPES.map((item, i) => (
            <TypeItem
              key={i}
              type={item}
              selected={item == display}
              onClick={() => handleSelect(item)}
            />
          ))}
        </div>
      )}
    </PopOver>
  );
};

export default TypeFilter;

const TypeItem = ({ type, selected, onClick }: any) => {
  const borderColor = selected
    ? adjust(env.colors.primary, -15)
    : 'transparent';

  return (
    <div
      className={cx('p-1  border-2 rounded-xl')}
      style={{ width: '20em', borderColor }}
    >
      <div
        // style={{ borderColor }}
        className={cx(
          'p-3 cursor-pointer select-none rounded-xl text-center font-bold transition-all bg-gray-50',
        )}
        onClick={onClick}
      >
        {type}
      </div>
    </div>
  );
};
