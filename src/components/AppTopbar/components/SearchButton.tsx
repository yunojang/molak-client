import { FC } from 'react';

import { BiSearch } from 'react-icons/bi';
import NavigateAnchor from '@/components/common/NavigateAnchor';
import { cx } from '@emotion/css';
import { clickableButtonStyle } from '@/utils/style/button';

interface SearchButtonProps {
  path: string;
}

const SearchButton: FC<SearchButtonProps> = ({ path }) => {
  return (
    <NavigateAnchor path={path}>
      <button
        className={cx(
          clickableButtonStyle,
          'cursor-pointer select-none w-11 h-11 flex items-center justify-center rounded-full hover:bg-gray-100',
        )}
      >
        <BiSearch size={24} color="black" />
      </button>
    </NavigateAnchor>
  );
};

export default SearchButton;
