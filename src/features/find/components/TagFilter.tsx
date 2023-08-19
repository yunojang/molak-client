import { FC, useState } from 'react';

import { useDiscover } from '../api/getDiscover';
import { FilterProps } from '@/components/Wrapper/withFilter';

import { Checkbox, CheckboxGroup } from '@chakra-ui/react';
import { css, cx } from '@emotion/css';

interface Props extends FilterProps {
  disabled?: boolean;
}

const TagFilter: FC<Props> = ({ defaultValue, onSubmit, disabled }) => {
  const { discover } = useDiscover();
  const { tags } = discover;
  // const [selectedTags, setSelectedTags] = useState<string[]>(defaultValue);

  return (
    <div className="flex flex-col">
      <CheckboxGroup
        colorScheme="molak"
        defaultValue={defaultValue}
        onChange={onSubmit}
      >
        {tags.map((tag, i) => (
          <Checkbox
            value={tag}
            size="lg"
            key={i}
            className={cx(checkBg, 'py-1')}
          >
            {tag}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </div>
  );
};

export default TagFilter;

const checkBg = css`
  .chakra-checkbox__control {
    background: #f5f5f5;
  }
`;
