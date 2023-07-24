import { Meta, Story } from '@storybook/react';

import { Form, FormProps } from './Form';

const meta: Meta = {
  title: 'GlobalElement/Form',
  component: Form,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<FormProps> = props => <Form {...props}>Form</Form>;
export const Default = Template.bind({});
Default.args = {};
