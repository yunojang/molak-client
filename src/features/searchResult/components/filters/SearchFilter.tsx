import { FC, useMemo } from 'react';

import { useBreakPoint } from '@/utils/breakpoint';

import { Drawer } from '@/components/Elements/Drawer';
import OpenerFilter, {
  OpenerFilterProps,
} from '@/components/Elements/Filter/OpenerFilter';
import { PopOver } from '@/components/Elements/Selector';
import SelectOpenBox from '@/components/Elements/SelectOpenBox/SelectOpenBox';
import { adjust } from '@/utils/style/color';
import { env } from '@/config';
import Bubble from '@/components/Elements/bubble';

interface SearchFilterProps<T = any> {
  defaultValue: T;
  value?: T;
  Selectable: OpenerFilterProps['Selectable'];
  onChange?(v: T): void;
}

const SearchFilter: FC<SearchFilterProps> = ({
  defaultValue,
  value,
  Selectable,
  onChange,
}) => {
  const isMobile = useBreakPoint(p => p.eqSmaller('md'));
  const Opener = isMobile ? Drawer : PopOver;

  return (
    <OpenerFilter
      Opener={Opener}
      Selectable={Selectable}
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
      display={(v, isSelect) => (
        <Display v={v} isSelected={isSelect} defaultValue={defaultValue} />
      )}
    />
  );
};

export default SearchFilter;

interface DisplayProps {
  v: any;
  defaultValue: any;
  isSelected?: boolean;
}

const Display: FC<DisplayProps> = ({ v, defaultValue, isSelected }) => {
  const display = useMemo(() => {
    if (!Array.isArray(v)) return v;

    switch (v.length) {
      case 0:
        return defaultValue;
      case 1:
        return v[0];
      default:
        return `${v[0]} 외 `;
    }
  }, [v, defaultValue]);

  if (!Array.isArray(v))
    return (
      <SelectOpenBox
        display={display}
        className={isSelected ? 'font-bold' : ''}
      />
    );

  const toneDownPrimary = adjust(env.colors.primary, -25);

  return (
    <div className="relative z-30">
      <SelectOpenBox
        display={display}
        className={v.length ? 'font-bold' : ''}
      />
      {v.length > 1 && (
        <Bubble size="1.5rem" color={toneDownPrimary}>
          {v.length}
        </Bubble>
      )}
    </div>
  );
};
