import { Input } from '@chakra-ui/react';
import { FC, useState } from 'react';

export interface SearchFilterableListProps {
  filterFn?(v: string): boolean;
}

interface InputProps {
  placeholder?: string;
  className?: string;
}

export const withSearchFilter = <T extends SearchFilterableListProps>(
  ListComp: FC<T>,
  input: InputProps = {},
) => {
  return function Inner(props: T) {
    const [search, setSearch] = useState('');
    return (
      <div className="flex flex-col gap-2">
        <Input
          {...input}
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <ListComp
          {...props}
          filterFn={v => v.toLowerCase().includes(search.trim().toLowerCase())}
        />
      </div>
    );
  };
};
