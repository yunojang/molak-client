import React, { FC, useRef, useMemo, useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

import PopOver from './PopOver';

interface OptionObject {
  name: string;
  id: string;
}

interface SelectorProps {
  width?: string;
  fullWidth?: boolean;
  options?: OptionObject[];
  deafultValue?: string;
  onChange?(opt: OptionObject): void;
}

const Selector: FC<SelectorProps> = ({
  width = '160px',
  fullWidth,
  options = [],
  deafultValue,
  onChange,
}) => {
  if (fullWidth) width = '100%';

  const boxRef = useRef<HTMLDivElement>(null);

  // const boxWidth: string = useMemo(() => {
  //   boxRef.current?.clientWidth ?? '200px';
  // }, [boxRef]);

  const idMap = useMemo(() => {
    const map: { [k: string]: string } = {};
    options.forEach(opt => (map[opt.id] = opt.name));
    return map;
  }, [options]);

  const defaultLabel = useMemo(
    () => (deafultValue ? idMap[deafultValue] : ''),
    [idMap, deafultValue],
  );

  const [label, setLabel] = useState(defaultLabel);

  const handleChange = (id: string) => {
    onChange?.({ name: idMap[id], id });
    setLabel(idMap[id]);
  };

  return (
    <PopOver
      trigger={
        <div
          ref={boxRef}
          className="flex items-center justify-between text-gray-400 px-3 py-1 cursor-pointer"
          style={{ width }}
        >
          <div className="flex-1 text-left text-gray-500">{label}</div>
          <AiFillCaretDown />
        </div>
      }
    >
      {close => (
        <div className="flex flex-col border">
          {options.map(opt => (
            <div
              onClick={() => {
                handleChange(opt.id);
                close();
              }}
              className="py-2 px-3 cursor-pointer select-none hover:bg-gray-100 transition-colors"
              style={{ width }}
              key={opt.id}
            >
              {opt.name}
            </div>
          ))}
        </div>
      )}
    </PopOver>
  );
};

export default Selector;
