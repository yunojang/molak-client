import { Meta, Story } from '@storybook/react';
import { PopupWindow, PopupWindowProps } from './PopupWindow';

const meta: Meta = {
  title: 'GlobalElement/Popup',
  component: PopupWindow,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<PopupWindowProps> = props => (
  <PopupWindow {...props}>Alert</PopupWindow>
);
export const Default = Template.bind({});
Default.args = {};
