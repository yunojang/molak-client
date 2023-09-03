import React, { FC, cloneElement, ReactElement } from 'react';
import {
  Tabs as ChakraTabs,
  TabIndicator,
  TabList,
  TabProps,
  TabsProps as ChakraTabsProps,
} from '@chakra-ui/react';
import { adjust } from '@/utils/style/color';
import { env } from '@/config';

interface TabsProps extends ChakraTabsProps {
  width?: string;
}

const Tabs: FC<TabsProps> = ({ children, width = '112px', ...rest }) => {
  const [tabIndex, setTabIndex] = React.useState(0);

  return (
    <ChakraTabs
      {...rest}
      className="relative inline-block"
      variant="unstyled"
      onChange={setTabIndex}
    >
      <TabList>
        {React.Children.map(children, (child, idx) => {
          const isSelected = idx === tabIndex;

          return (
            <div>
              {cloneElement<TabProps>(child as ReactElement, {
                _selected: { color: 'white' },
                className:
                  'font-bold text-[1.2rem] z-10 transition-all relative easy-in-out',
                style: {
                  width,
                  transition: '500ms cubic-bezier(.77,.15,.39,1.43) 200ms',
                },
              })}
              <div
                className="absolute h-[84%] rounded-full top-1/2"
                style={{
                  background: adjust(env.colors.primary, -20),
                  width: `calc(${width} - ${subPx(width) * 0.1}px)`,
                  transform: `translate(5%, -50%) scale(${isSelected ? 1 : 0})`,
                  transition: isSelected
                    ? '500ms cubic-bezier(.77,.15,.39,1.43)'
                    : '500ms ease-in-out',
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
