import { FC } from 'react';

import GenreFilter, { GenreFilterProps } from './GenreFilter';

import { PopOver } from '@/components/Elements/Selector';
import SelectOpenBox from '@/components/Elements/SelectOpenBox/SelectOpenBox';

const GenreFilterPopup: FC<GenreFilterProps> = ({
  value,
  defaultValue,
  onChange,
}) => {
  const display = value ?? defaultValue;
  const isSelected = display !== defaultValue;

  return (
    <PopOver
      trigger={
        <SelectOpenBox
          className={isSelected ? 'font-bold' : ''}
          display={display}
        />
      }
      placement="bottom"
    >
      {close => (
        <GenreFilter
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
        />
      )}
    </PopOver>
  );
};

export default GenreFilterPopup;
