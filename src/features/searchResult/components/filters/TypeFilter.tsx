import { FC, useState } from 'react';
import { cx } from '@emotion/css';

import { FilterProps } from '@/components/Wrapper/withFilter';

export interface TypeFilterProps extends FilterProps {
  value?: string;
  defaultValue: string;
  onChange?(type: string | undefined): void;
}

const TYPES = ['모든 작품', '시리즈', '단편'];

const TypeFilter: FC<TypeFilterProps> = ({ onChange, defaultValue, value }) => {
  const [type, setType] = useState(value ?? defaultValue);

  // const display = value ?? type;
  // const alreadySelect = display !== defaultValue;

  const handleSelect = (type: string) => {
    setType(type);

    if (type === defaultValue) onChange?.(undefined);
    else onChange?.(type);
  };

  return (
    <div className="flex flex-col items-center px-5 py-5 gap-1 shadow-xl rounded-lg">
      {TYPES.map((item, i) => (
        <TypeItem
          key={i}
          type={item}
          selected={item == (value ?? type)}
          onClick={() => handleSelect(item)}
        />
      ))}
    </div>
  );
};

const TypeItem = ({ type, selected, onClick }: any) => {
  return (
    <div
      className={cx(
        selected ? 'border-strong shadow-lg' : 'border-transparent',
        'p-1  border-2 rounded-xl',
      )}
      style={{ width: '20em' }}
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

export default TypeFilter;
