import { FC } from 'react';

import { BiSearch } from 'react-icons/bi';
import NavigatePath from '@/components/common/NavigatePath';

interface SearchButtonProps {
  path: string;
}

const SearchButton: FC<SearchButtonProps> = ({ path }) => {
  return (
    <NavigatePath path={path}>
      <button className="cursor-pointer select-none w-11 h-11 flex items-center justify-center rounded-full hover:bg-gray-200 bg-white transition-all active:scale-90">
        <BiSearch size={24} color="black" />
      </button>
    </NavigatePath>
  );
};

export default SearchButton;
