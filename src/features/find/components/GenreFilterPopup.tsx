import { FC, useState } from 'react';
import { cx } from '@emotion/css';

import { useDiscover } from '../api/getDiscover';
import { FilterProps } from '@/components/Wrapper/withFilter';

import { env } from '@/config';
import { adjust } from '@/utils/style/color';
import { PopOver } from '@/components/Elements/Selector';
import SelectOpenBox from '@/components/Elements/SelectOpenBox/SelectOpenBox';

interface Props extends FilterProps {
  disabled?: boolean;
}

const GenreFilter: FC<Props> = ({
  defaultValue = '모든 장르',
  onChange,
  disabled,
}) => {
  const { genres } = useDiscover();
  const [selectedGenre, setSelectedGenre] = useState<string>(defaultValue);

  const handleClick = (genre: string) => {
    if (selectedGenre === genre) {
      setSelectedGenre('모든 장르');
      onChange?.('all');
      return;
    }

    setSelectedGenre(genre);
    onChange?.(genre);
  };

  const isSelected = selectedGenre !== '모든 장르';

  return (
    <PopOver
      trigger={
        <SelectOpenBox
          className={isSelected ? 'font-bold' : ''}
          display={selectedGenre}
        />
      }
      placement="bottom"
    >
      {close => (
        <div className="flex gap-1 p-5 shadow-xl">
          {genres.map((genre, i) => (
            <div
              key={i}
              style={{
                backgroundColor:
                  selectedGenre === genre
                    ? adjust(env.colors.primary, -30)
                    : 'white',
              }}
              className={cx(
                selectedGenre === genre ? `text-white` : '',
                'py-2 w-[5.2em] text-center border rounded-xl cursor-pointer text-lg font-bold select-none transition-all',
              )}
              onClick={() => handleClick(genre)}
            >
              {genre}
            </div>
          ))}
        </div>
      )}
    </PopOver>
  );
};

export default GenreFilter;
