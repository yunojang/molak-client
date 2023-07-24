import { Meta, Story } from '@storybook/react';

import { Preparing, PreparingProps } from './Preparing';

const meta: Meta = {
  title: 'GlobalElement/Preparing',
  component: Preparing,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<PreparingProps> = props => (
  <Preparing {...props}>Preparing</Preparing>
);
export const Default = Template.bind({});
Default.args = {};
