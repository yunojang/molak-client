import { FC, ReactNode } from 'react';
import { OpenableProps } from '@/types/open';

export interface OpenerFilterProps<T = any> {
  value?: T;
  defaultValue?: T;
  onChange?(v: T): void;
  display?(v?: T, isSelect?: boolean): ReactNode;
  Opener: FC<OpenableProps>;
  Selectable: FC<{ value?: T; defaultValue: T; onChange?(v: T): void }>;
}

const OpenerFilter: FC<OpenerFilterProps> = ({
  defaultValue,
  onChange,
  value,
  display,
  Opener,
  Selectable,
}) => {
  const v = value ?? defaultValue;
  const isSelect = value !== defaultValue;

  return (
    <Opener trigger={display?.(v, isSelect)}>
      {() => (
        <Selectable
          defaultValue={defaultValue}
          value={value}
          onChange={onChange}
        />
      )}
    </Opener>
  );
};

export default OpenerFilter;
