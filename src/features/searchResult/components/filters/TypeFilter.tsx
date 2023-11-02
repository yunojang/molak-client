import { FC, useState } from 'react';
import { cx } from '@emotion/css';

import { FilterProps } from '@/components/Wrapper/withFilter';
import FilterTitleLayout from './layout/FilterTitleLayout';

export interface TypeFilterProps extends FilterProps {
  value?: string;
  defaultValue: string;
  onChange?(type: string | undefined): void;
}

const TYPES = ['모든 작품', '시리즈', '단편'];

const TypeFilter: FC<TypeFilterProps> = ({ onChange, defaultValue, value }) => {
  const [type, setType] = useState(value ?? defaultValue);

  const handleSelect = (type: string) => {
    setType(type);

    if (type === defaultValue) onChange?.(undefined);
    else onChange?.(type);
  };

  return (
    <FilterTitleLayout title="타입선택">
      <div className="flex flex-col items-center  gap-1 ">
        {TYPES.map((item, i) => (
          <TypeItem
            key={i}
            type={item}
            selected={item == (value ?? type)}
            onClick={() => handleSelect(item)}
          />
        ))}
      </div>
    </FilterTitleLayout>
  );
};

const TypeItem = ({ type, selected, onClick }: any) => {
  return (
    <div
      className={cx(
        selected ? 'border-strong shadow-lg' : 'border-transparent',
        'p-1  border-2 rounded-xl w-full',
      )}
    >
      <div
        // style={{ borderColor }}
        className={cx(
          'p-3 cursor-pointer select-none rounded-xl text-center font-bold transition-all bg-gray-50 px-28',
        )}
        onClick={onClick}
      >
        {type}
      </div>
    </div>
  );
};

export default TypeFilter;
