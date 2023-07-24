import { Meta, Story } from '@storybook/react';

import { Hovering, HoveringProps } from './Hovering';

const meta: Meta = {
  title: 'GlobalElement/Hovering',
  component: Hovering,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<HoveringProps> = props => (
  <Hovering {...props}>Hovering</Hovering>
);
export const Default = Template.bind({});
Default.args = {};
