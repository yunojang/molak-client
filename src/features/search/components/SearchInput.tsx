import { FC, forwardRef, useState } from 'react';

interface SearchInputProps {
  onSearch?(query: string): void;
}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ onSearch }, ref) => {
    const [query, setQuery] = useState('');

    return (
      <form
        className="flex gap-2 items-center w-full mb-12"
        onSubmit={e => {
          e.preventDefault();
          onSearch?.(query);
        }}
      >
        <input
          ref={ref}
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="작품명, 장르, 태그로 검색하세요"
          className={` py-4 px-7 text-lg focus:border-gray-500 border-gray-300 
        rounded-full shadow-md border transition-all outline-none flex-1`}
        />
      </form>
    );
  },
);

SearchInput.displayName = 'SearchInput';
export default SearchInput;
