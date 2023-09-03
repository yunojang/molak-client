import { FC, useState } from 'react';
import { cx } from '@emotion/css';

import { useDiscover } from '../api/getDiscover';
import { FilterProps } from '@/components/Wrapper/withFilter';

import { env } from '@/config';
import { adjust } from '@/utils/style/color';

interface Props extends FilterProps {
  disabled?: boolean;
}

const GenreFilter: FC<Props> = ({ defaultValue, onSubmit, disabled }) => {
  const { genres } = useDiscover();
  const [selectedGenre, setSelectedGenre] = useState<string | undefined>(
    defaultValue,
  );

  const handleClick = (genre: string) => {
    if (selectedGenre === genre) {
      setSelectedGenre(undefined);
      onSubmit?.('all');
      return;
    }

    setSelectedGenre(genre);
    onSubmit?.(genre);
  };

  return (
    <div className="flex gap-1">
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
            'py-2 px-5 border rounded-full cursor-pointer text-lg font-bold select-none transition-all',
          )}
          onClick={() => handleClick(genre)}
        >
          {genre}
        </div>
      ))}
    </div>
  );
};

export default GenreFilter;
