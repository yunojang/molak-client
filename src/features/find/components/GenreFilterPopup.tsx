import { FC, useState } from 'react';
import { cx } from '@emotion/css';

import { useDiscover } from '../api/getDiscover';
import { FilterProps } from '@/components/Wrapper/withFilter';

import { env } from '@/config';
import { adjust } from '@/utils/style/color';
import { PopOver } from '@/components/Elements/Selector';
import SelectOpenBox from '@/components/Elements/SelectOpenBox/SelectOpenBox';
import { useBreakPoint } from '@/utils/breakpoint';

interface Props extends FilterProps {
  value?: string;
  defaultValue: string;
  onChange?(genre: string | undefined): void;
  disabled?: boolean;
}

const GenreFilter: FC<Props> = ({ value, defaultValue, onChange }) => {
  const { genres } = useDiscover();
  const [selectedGenre, setSelectedGenre] = useState<string>(
    value ?? defaultValue,
  );
  const display = value ?? selectedGenre;
  const isSelected = display !== defaultValue;

  const handleClick = (genre: string) => {
    if (display === genre) {
      setSelectedGenre(defaultValue);
      onChange?.(undefined);
      return;
    }

    setSelectedGenre(genre);
    onChange?.(genre);
  };

  const contentLayout = useBreakPoint(p =>
    p.eqBigger('md') ? 'flex gap-1 p-5' : 'grid gap-1 p-5',
  );

  return (
    <PopOver
      trigger={
        <SelectOpenBox
          className={isSelected ? 'font-bold' : ''}
          display={display}
        />
      }
      placement="bottom"
    >
      {close => (
        <div
          className={cx(contentLayout, 'shadow-xl')}
          style={{
            gridTemplateColumns: `repeat(2, minmax(0px, 1fr))`,
          }}
        >
          {genres.map((genre, i) => {
            const isSelected = display === genre;
            return (
              <div
                key={i}
                style={{
                  backgroundColor: isSelected
                    ? adjust(env.colors.primary, -25)
                    : 'white',
                }}
                className={cx(
                  isSelected ? `text-white` : '',
                  'py-2 w-[5.2em] text-center border rounded-xl cursor-pointer text-lg font-bold select-none transition-all',
                )}
                onClick={() => handleClick(genre)}
              >
                {genre}
              </div>
            );
          })}
        </div>
      )}
    </PopOver>
  );
};

export default GenreFilter;
