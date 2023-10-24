import { FC, useMemo, useState } from 'react';

import GenreFilter from '@/features/find/components/GenreFilterPopup';
import TypeFilter from './TypeFilterPopup';
import TagFilter from './TagFilterPopup';

import { DEFAULT_FILTERS } from './constant/filters';

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
      <TypeFilter
        value={current?.type ?? DEFAULT_FILTERS.type}
        defaultValue={DEFAULT_FILTERS.type}
        onChange={type => handleChange({ type })}
      />
      <GenreFilter
        // defaultValue={defaultFilters?.genre ?? DEFAULT_FILTERS.genre}
        value={current?.genre ?? DEFAULT_FILTERS.genre}
        defaultValue={DEFAULT_FILTERS.genre}
        // defaultValue={DEFAULT_FILTERS.genre}
        onChange={genre => handleChange({ genre })}
      />
      <TagFilter
        // defaultValue={defaultFilters?.tags ?? DEFAULT_FILTERS.tags}
        value={current?.tags ?? []}
        defaultValue={DEFAULT_FILTERS.tags}
        // defaultValue={DEFAULT_FILTERS.tags}
        onChange={tags => handleChange({ tags })}
      />
    </div>
  );
};

export default Filters;
