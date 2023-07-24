/* eslint-disable react/jsx-key */
import { cx } from '@emotion/css';
import { Skeleton } from '@chakra-ui/react';
import { Column, useResizeColumns, useTable } from 'react-table';

interface TableProps<T extends object> {
  columns: Column<T>[];
  data: T[];
  isSkeleton?: boolean;
  onRowClick?(id: string): void;
  emptyFallback?: React.ReactNode;
  headStyle?: string;
  elipsis?: boolean;
  clickable?: boolean;
}

export const ListTable = <T extends object>({
  isSkeleton,
  columns,
  data,
  onRowClick = () => {},
  emptyFallback,
  headStyle,
  elipsis = true,
  clickable = true,
}: TableProps<T>) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useResizeColumns,
    );

  if (data.length === 0) return <>{emptyFallback}</>;

  return (
    <table {...getTableProps()}>
      <thead className={headStyle}>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                className="px-1 py-3 text-center whitespace-nowrap "
                style={{ width: column.width }}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr
              {...row.getRowProps()}
              onClick={() => onRowClick(row.values.id)}
              className={
                clickable
                  ? 'transition-all cursor-pointer hover:shadow-frame'
                  : ''
              }
            >
              {row.cells.map(cell => (
                <td
                  {...cell.getCellProps()}
                  className={cx(
                    'py-3 text-center select-none',
                    elipsis
                      ? 'overflow-hidden whitespace-nowrap text-ellipsis'
                      : 'whitespace-pre-wrap',
                  )}
                  style={{ maxWidth: cell.column.width }}
                >
                  {isSkeleton ? (
                    <div className="flex justify-center">
                      <Skeleton height="28px" width={cell.column.width} />
                    </div>
                  ) : (
                    cell.render('Cell')
                  )}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
