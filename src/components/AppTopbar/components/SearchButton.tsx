import { FC } from 'react';

import { BiSearch } from 'react-icons/bi';
import NavigatePath from '@/components/common/NavigatePath';
import { cx } from '@emotion/css';
import { clickableButtonStyle } from '@/utils/style/button';

interface SearchButtonProps {
  path: string;
}

const SearchButton: FC<SearchButtonProps> = ({ path }) => {
  return (
    <NavigatePath path={path}>
      <button
        className={cx(
          clickableButtonStyle,
          'cursor-pointer select-none w-11 h-11 flex items-center justify-center rounded-full',
        )}
      >
        <BiSearch size={24} color="black" />
      </button>
    </NavigatePath>
  );
};

export default SearchButton;
