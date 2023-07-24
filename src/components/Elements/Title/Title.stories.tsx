import { Meta, Story } from '@storybook/react';

import { Title, TitleProps } from './Title';

const meta: Meta = {
  title: 'GlobalElement/Title',
  component: Title,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<TitleProps> = props => (
  <Title {...props}>Title</Title>
);
export const Default = Template.bind({});
Default.args = {};
