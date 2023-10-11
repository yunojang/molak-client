import GenreFilter from '@/features/find/components/GenreFilterPopup';
import { FC } from 'react';
import TypeFilter from './TypeFilterPopup';
import TagFilter from './TagFilterPopup';

interface FiltersProps {
  onChange?(filter: any, isInit?: boolean): void;
}

const Filters: FC<FiltersProps> = ({ onChange }) => {
  return (
    <div className="flex items-center gap-3">
      <TypeFilter onChange={() => onChange?.({}, false)} />
      <GenreFilter onChange={() => onChange?.({}, false)} />
      <TagFilter onChange={() => onChange?.({}, false)} />
    </div>
  );
};

export default Filters;
