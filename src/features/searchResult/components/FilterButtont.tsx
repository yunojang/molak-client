import { FC } from 'react';
import { cx } from '@emotion/css';

import { clickableButtonStyle } from '@/utils/style/button';
import { PiSlidersHorizontalBold } from 'react-icons/pi';

interface FilterButtonProps {
  onClick?(): void;
}

const FilterButton: FC<FilterButtonProps> = ({ onClick }) => {
  return (
    <div
      className={cx(
        clickableButtonStyle,
        `w-12 h-12 rounded-full bg-gray-100 text-gray-600 inline-flex items-center justify-center
      hover:bg-gray-200 hover:text-gray-700`,
      )}
    >
      <PiSlidersHorizontalBold size={24} />
    </div>
  );
};

export default FilterButton;
