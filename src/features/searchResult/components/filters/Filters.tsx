import { FC, useMemo, useState } from 'react';

import SearchFilter from './SearchFilter';

import TypeFilter from './TypeFilter';
import GenreFilter from './GenreFilter';

import { DEFAULT_FILTERS } from './constant/filters';
import TagFilter from './TagFilter';

interface FiltersProps {
  value?: { [k in keyof typeof DEFAULT_FILTERS]?: any };
  defaultValues?: { [k in keyof typeof DEFAULT_FILTERS]?: any };
  onChange?(filter: any): void;
}

const Filters: FC<FiltersProps> = ({ value, defaultValues, onChange }) => {
  const [filters, setFilters] = useState(defaultValues);
  const current = useMemo(() => value ?? filters, [value, filters]);

  const handleChange = (changedFilter: {
    [k in keyof typeof DEFAULT_FILTERS]?: any;
  }) => {
    const newFilter = { ...current, ...changedFilter };

    onChange?.(newFilter);
    setFilters(newFilter);
  };

  return (
    <div className="flex items-center gap-3">
      {/* TypeFilter */}
      <SearchFilter
        Selectable={TypeFilter}
        value={current?.type ?? DEFAULT_FILTERS.type}
        defaultValue={DEFAULT_FILTERS.type}
        onChange={type => handleChange({ type })}
      />

      {/* GenreFilter */}
      <SearchFilter
        Selectable={GenreFilter}
        value={current?.genre ?? DEFAULT_FILTERS.genre}
        defaultValue={DEFAULT_FILTERS.genre}
        onChange={genre => handleChange({ genres: [genre], genre })}
      />

      <SearchFilter
        Selectable={TagFilter}
        defaultValue={DEFAULT_FILTERS.tags}
        value={current?.tags ?? []}
        onChange={tags => handleChange({ tags })}
      />
    </div>
  );
};

export default Filters;
