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
  _?: any;
  width?: string;
}

const Tabs: FC<TabsProps> = ({ children, width = '5em', ...rest }) => {
  const [tabIndex, setTabIndex] = React.useState(0);

  return (
    <ChakraTabs
      {...rest}
      className="relative inline-block"
      variant="unstyled"
      onChange={setTabIndex}
    >
      <TabList>
        {React.Children.map(children, (child, idx) => (
          <div>
            {cloneElement<TabProps>(child as ReactElement, {
              _selected: { color: 'white' },
              width: '24',
              className:
                'font-bold text-lg z-10 transition-all relative easy-in-out',
              style: {
                transition: '500ms cubic-bezier(.77,.15,.39,1.43) 200ms',
              },
            })}
            <div
              className="absolute h-[80%] rounded-full top-1/2"
              style={{
                background: adjust(env.colors.primary, -15),
                width: `calc(${width} - ${constractPx(width) * 0.2}px)`,
                transform: `translate(10%, -50%) scale(${
                  tabIndex === idx ? 1 : 0
                })`,
                transition:
                  tabIndex === idx
                    ? '500ms cubic-bezier(.77,.15,.39,1.43)'
                    : '500ms ease-in-out',
                transformOrigin:
                  tabIndex === idx
                    ? 'center'
                    : tabIndex > idx
                    ? 'right'
                    : 'left',
              }}
            />
          </div>
        ))}
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

const constractPx = (size: string | number) => {
  if (typeof size === 'number') return size;
  return parseInt(size.replace('px', ''));
};
