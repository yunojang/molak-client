import { FC, useState } from 'react';

import { PopOver } from '@/components/Elements/Selector';
import SelectOpenBox from '@/components/Elements/SelectOpenBox/SelectOpenBox';

import TypeFilter, { TypeFilterProps } from '../TypeFilter';

interface Props extends TypeFilterProps {
  _?: never;
}

const TypeFilterPopup: FC<Props> = ({ onChange, defaultValue, value }) => {
  const display = value ?? defaultValue;
  const alreadySelect = value !== defaultValue;

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
      {close => <TypeFilter defaultValue={defaultValue} onChange={onChange} />}
    </PopOver>
  );
};

export default TypeFilterPopup;
