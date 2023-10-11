import { FC, useState } from 'react';

import { FilterProps } from '@/components/Wrapper/withFilter';
import { PopOver } from '@/components/Elements/Selector';
import SelectOpenBox from '@/components/Elements/SelectOpenBox/SelectOpenBox';
import { cx } from '@emotion/css';
import { adjust } from '@/utils/style/color';
import { env } from '@/config';

interface TypeFilterProps extends FilterProps {
  _?: any;
}

const TYPES = ['모든 작품', '시리즈', '단편'];

const TypeFilter: FC<TypeFilterProps> = ({
  onChange,
  defaultValue = TYPES[0],
}) => {
  const [type, setType] = useState(defaultValue);

  const handleSelect = (type: string) => {
    setType(type);
    onChange?.(type);
  };

  return (
    <PopOver
      trigger={<SelectOpenBox className="font-bold" display={type} />}
      placement="bottom"
    >
      {close => (
        <div className="flex items-center px-7 py-5 gap-1 shadow-xl rounded-lg">
          {TYPES.map((item, i) => (
            <TypeItem
              key={i}
              type={item}
              selected={item == type}
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
  const borderColor = selected ? adjust(env.colors.primary, -40) : '#f0f0f0';

  return (
    <div
      style={{ borderColor }}
      className={cx(
        'w-32 p-3 cursor-pointer select-none border-2 rounded-xl text-center font-bold transition-all',
      )}
      onClick={onClick}
    >
      {type}
    </div>
  );
};
