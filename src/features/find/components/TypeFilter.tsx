import { FC, useState } from 'react';

import { useDiscover } from '../api/getDiscover';
import { FilterProps } from '@/components/Wrapper/withFilter';

import { Checkbox, CheckboxGroup } from '@chakra-ui/react';
import { css, cx } from '@emotion/css';

interface Props extends FilterProps {
  disabled?: boolean;
}

const TypeFilter: FC<Props> = ({
  defaultValue,
  onChange: onSubmit,
  disabled,
}) => {
  const { discover } = useDiscover();
  const { types } = discover;
  // const [selectedTags, setSelectedTags] = useState<string[]>(defaultValue);

  return (
    <div className="flex flex-col">
      <CheckboxGroup
        colorScheme="molak"
        defaultValue={defaultValue}
        onChange={onSubmit}
      >
        {types.map((type, i) => (
          <Checkbox
            value={type}
            size="lg"
            colorScheme="molak"
            key={i}
            className={cx(checkBg, 'py-1')}
          >
            {type}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </div>
  );
};

export default TypeFilter;

const checkBg = css`
  .chakra-checkbox__control {
    background: #f5f5f5;
  }
`;
