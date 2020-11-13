import React from 'react';
import Button from '../components/Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: { onClick: { action: 'click' } },
};

const Template = (args) => <Button {...args}>Click!</Button>

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = {
  primary: true,
  large: false
};

Secondary.args = {
  secondary: true,
  large: false
};
