import { css } from '@emotion/css';
import React, { useMemo } from 'react';

import { Column, useResizeColumns, useTable } from 'react-table';

interface TableProps<T extends object> {
  columns: Column<T>[];
  data: { [k in keyof T]?: any };
  columnCount?: number;
  verticalCenter?: boolean;
}

export const ObjectTable = <T extends object>({
  columns,
  data: _data,
  columnCount = 3,
  verticalCenter = false,
}: TableProps<T>) => {
  const data: T[] = useMemo(
    () => new Array(columns.length).fill(_data),
    [columns, _data],
  );

  const { headers, rows, prepareRow } = useTable(
    {
      columns,
      data,
    },
    useResizeColumns,
  );

  return (
    <div className={`grid ${grid_column_cls(columnCount)} gap-2`}>
      {headers.map((column, idx) => {
        const row = rows[idx];
        prepareRow(row);

        return (
          <div
            key={idx}
            className={`flex ${verticalCenter ? 'items-center' : ''}`}
          >
            <div
              className="p-2 text-center bg-gray-100 border"
              style={{ width: column.width ?? '25%' }}
            >
              {column.render('Header')}
            </div>
            <div className="flex-1 p-3">{row.values[column.id]}</div>
          </div>
        );
      })}
    </div>
  );
};

const grid_column_cls = (cnt: number) => css`
  grid-template-columns: repeat(${cnt}, 1fr);
`;
