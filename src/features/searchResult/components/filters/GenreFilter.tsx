import { FC, useState } from 'react';
import { cx } from '@emotion/css';

import { useDiscover } from '../../../find/api/getDiscover';
import { FilterProps } from '@/components/Wrapper/withFilter';

import { env } from '@/config';
import { adjust } from '@/utils/style/color';
import { useBreakPoint } from '@/utils/breakpoint';
import FilterTitleLayout from './layout/FilterTitleLayout';

export interface GenreFilterProps extends FilterProps {
  value?: string;
  defaultValue: string;
  onChange?(genre: string | undefined): void;
  disabled?: boolean;
}

const GenreFilter: FC<GenreFilterProps> = ({
  value,
  defaultValue,
  onChange,
}) => {
  const { genres } = useDiscover();
  const [selectedGenre, setSelectedGenre] = useState<string>(
    value ?? defaultValue,
  );
  const display = value ?? selectedGenre;

  const handleClick = (genre: string) => {
    // 같은 거 다시 선택시 초기화
    if (display === genre) {
      setSelectedGenre(defaultValue);
      onChange?.(undefined);
      return;
    }

    setSelectedGenre(genre);
    onChange?.(genre);
  };

  const contentLayout = useBreakPoint(p =>
    p.bigger('md') ? 'flex gap-1 ' : 'grid gap-1 ',
  );

  return (
    <FilterTitleLayout title="장르선택">
      <div
        className={cx(contentLayout)}
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
                'py-2 min-w-[5.4em] flex-1 text-center border rounded-xl cursor-pointer text-lg font-bold select-none transition-all',
              )}
              onClick={() => handleClick(genre)}
            >
              {genre}
            </div>
          );
        })}
      </div>
    </FilterTitleLayout>
  );
};

export default GenreFilter;
