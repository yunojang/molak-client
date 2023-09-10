import { FC } from 'react';

import { BiSearch } from 'react-icons/bi';
import NavigatePath from '@/components/common/NavigatePath';

interface SearchButtonProps {
  path: string;
}

const SearchButton: FC<SearchButtonProps> = ({ path }) => {
  return (
    <NavigatePath path={path}>
      <button className="cursor-pointer select-none px-3 py-2">
        <div className="flex gap-2 items-center text-dark hover:text-primary-600 transition-all">
          <BiSearch size={28} />
        </div>
      </button>
    </NavigatePath>
  );
};

export default SearchButton;
