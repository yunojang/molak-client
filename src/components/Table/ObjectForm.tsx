import React, { ReactElement } from 'react';
import { Column } from 'react-table';

import { ObjectTable } from './ObjectTable';
import { Form, FormProps } from '../Form/FormComponent';

// type InputValue = string | boolean | undefined;

export interface ObjectFormItem<T extends object> {
  key: keyof T;
  Header: Column<T>['Header'];
  el: React.ReactElement;
  onChange?(v: string): any;
}

type TableItem<T extends object> = {
  [k in keyof T]?: ReactElement;
};

interface TableFormProps<T extends object> {
  items: ObjectFormItem<T>[];
  onChange?(v?: Partial<T>): void;
  onSubmit?(v?: Partial<T>): void;
  defaultValues?: Partial<T>;
  columnCount?: number;
  validation?: FormProps<T>['validation'];
}

const ObjectForm = <T extends object>({
  items,
  onChange = () => {},
  onSubmit = () => {},
  columnCount = 2,
  defaultValues = {},
  validation,
}: TableFormProps<T>) => {
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
      result[key] = React.cloneElement(el, {
        name: key,
        onChange,
        defaultValue: defaultValues[key],
        width: '100%',
        style: { width: '100%' },
      });
    });
    return result;
  }, [items, defaultValues]);

  const [values, setValues] = React.useState<Partial<T>>({});

  const handleChange = (valueObject: T) => {
    // makeKeyMap - { key: FormItem }
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
    <Form<T>
      validation={validation}
      onChange={handleChange}
      onSubmit={v => onSubmit(values)}
    >
      {({ error, values }) => (
        <ObjectTable
          verticalCenter
          columns={columns}
          data={data}
          columnCount={columnCount}
        />
      )}
    </Form>
  );
};

export default ObjectForm;
