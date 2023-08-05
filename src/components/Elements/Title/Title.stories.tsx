import { Meta, Story } from '@storybook/react';

import { PageIntroTitle, TitleProps } from './PageIntroTitle';

const meta: Meta = {
  title: 'GlobalElement/Title',
  component: PageIntroTitle,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<TitleProps> = props => (
  <PageIntroTitle {...props}>Title</PageIntroTitle>
);
export const Default = Template.bind({});
Default.args = {};
