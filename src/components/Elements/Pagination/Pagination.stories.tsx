import { Meta, Story } from '@storybook/react';

import { Pagination, PaginationProps } from './Pagination';

const meta: Meta = {
  title: 'GlobalElement/Pagination',
  component: Pagination,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<PaginationProps> = props => (
  <Pagination {...props}>Pagination</Pagination>
);
export const Default = Template.bind({});
Default.args = {};
