import React, { FC, cloneElement, ReactElement } from 'react';
import {
  Tabs as ChakraTabs,
  TabList,
  TabProps,
  TabsProps as ChakraTabsProps,
} from '@chakra-ui/react';
import { adjust } from '@/utils/style/color';
import { env } from '@/config';
import { cx } from '@emotion/css';

interface TabsProps extends ChakraTabsProps {
  width?: string;
}

const Tabs: FC<TabsProps> = ({
  children,
  width = '140px',
  onChange,
  ...rest
}) => {
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleTabChange = (idx: number) => {
    setTabIndex(idx);
    onChange?.(idx);
  };

  return (
    <ChakraTabs
      {...rest}
      className="relative inline-block"
      variant="unstyled"
      onChange={handleTabChange}
    >
      <TabList>
        {React.Children.map(children, (child, idx) => {
          const isSelected = idx === tabIndex;

          return (
            <div>
              {cloneElement<TabProps>(child as ReactElement, {
                className: cx(
                  isSelected ? 'text-white' : 'text-secondary',
                  'font-bold text-[1.3rem] z-10 transition-all relative easy-in-out ',
                ),
                style: {
                  width,
                  // transition: '400ms cubic-bezier(.77,.15,.39,1.43) 200ms',
                  transition: '200ms cubic-bezier(0,0,.5,1)',
                },
              })}
              <div
                className="absolute h-[84%] rounded-xl top-1/2 bg-secondary"
                style={{
                  // background: adjust(env.colors.primary, -20),
                  width: `calc(${width} - ${subPx(width) * 0.1}px)`,
                  transform: `translate(5%, -50%) scale(${isSelected ? 1 : 0})`,
                  transition: isSelected
                    ? '400ms cubic-bezier(0,0,.25,1.45)'
                    : '400ms cubic-bezier(0,0,.5,1)',
                  transformOrigin: isSelected
                    ? 'center'
                    : tabIndex > idx
                    ? 'right'
                    : 'left',
                }}
              />
            </div>
          );
        })}
      </TabList>

      {/* <div
        className="absolute transition-transform rounded-full top-1/2 h-4/5 bg-primary-500"
        style={{
          width: `calc(${width} - ${constractPx(width) * 0.08}px)`,
          transform: `translate(calc(${tabIndex} * ${width} + 4%), -50%)`,
        }}
      /> */}
    </ChakraTabs>
  );
};

export default Tabs;

const subPx = (size: string | number) => {
  if (typeof size === 'number') return size;
  return parseInt(size.replace('px', ''));
};
