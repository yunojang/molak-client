import { Meta, Story } from '@storybook/react';

import { FileInput, FileInputProps } from './FileInput';

const meta: Meta = {
  title: 'GlobalElement/FileInput',
  component: FileInput,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<FileInputProps> = props => (
  <FileInput {...props}>FileInput</FileInput>
);
export const Default = Template.bind({});
Default.args = {};
