import React, { FC } from 'react';
import { Column } from 'react-table';

import { ObjectTable } from './ObjectTable';
import { Button } from '@wizrnd/nx-ui';
import { Form } from '../Form/FormComponent';

// type InputValue = string | boolean | undefined;

export interface FilterItem<T extends object> {
  key: keyof T;
  Header: Column<T>['Header'];
  el: React.ReactNode;
  onChange?(v: string): any;
  // | ((onChange?: (v: InputValue) => void) => React.ReactNode);
}

type TableItem<T extends object> = {
  [k in keyof T]?: FilterItem<T>['el'];
};

interface TableFilterProps<T extends object> {
  items: FilterItem<T>[];
  onChange?(v?: Partial<T>): void;
  onSubmit?(v?: Partial<T>): void;
  columnCount?: number;
}

const TableFilter = <T extends object>({
  items,
  onChange = () => {},
  onSubmit = () => {},
  columnCount = 2,
}: TableFilterProps<T>) => {
  const columns = React.useMemo<Column<T>[]>(
    () =>
      items.map(({ Header, key }) => ({
        accessor: key,
        Header,
      })),
    [items],
  );

  const data = React.useMemo<TableItem<T>>(() => {
    const result: TableItem<T> = {};
    items.forEach(({ key, el, onChange }) => {
      result[key] = React.cloneElement(el as React.ReactElement, {
        name: key,
        onChange,
        width: '100%',
        style: { width: '100%' },
      });
    });
    return result;
  }, [items]);

  const [values, setValues] = React.useState<Partial<T>>({});

  const handleChange = (valueObject: T) => {
    const keyMap = new Map();
    items.forEach(item => keyMap.set(item.key, item));

    const changedResultValues: Partial<T> = {};
    // trigger item's onChange
    Object.entries(valueObject).forEach(([k, v]) => {
      const value = keyMap.get(k)?.onChange?.(v) ?? v;
      changedResultValues[k as keyof T] = value;
    });

    setValues(changedResultValues);
    onChange(changedResultValues);
  };

  return (
    <Form<T> onChange={handleChange} onSubmit={v => onSubmit(values)}>
      {() => (
        <div className="flex">
          <div className="flex-1">
            <ObjectTable
              verticalCenter
              columns={columns}
              data={data}
              columnCount={columnCount}
            />
          </div>
          <div className="flex items-center justify-center gap-3">
            <Button
              type="submit"
              variant="outlined"
              size="md"
              className="font-bold rounded-none w-28"
            >
              검색
            </Button>
          </div>
        </div>
      )}
    </Form>
  );
};

export default TableFilter;
