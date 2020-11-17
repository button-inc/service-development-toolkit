import React from 'react';
import components from 'components-library';
const { Button } = components;


export default {
  title: 'Button',
  component: Button,
  argTypes: { onClick: { action: 'click' } },
};

const Template = args => <Button {...args}>Click!</Button>;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Warning = Template.bind({});
export const Danger = Template.bind({});
export const Success = Template.bind({});
export const Small = Template.bind({});
export const Large = Template.bind({});

Primary.args = {
  primary: true,
};

Secondary.args = {
  secondary: true,
};

Small.args = {
  primary: true,
  small: true,
};

Large.args = {
  primary: true,
  large: true,
};

Warning.args = {
  warning: true,
};

Danger.args = {
  danger: true,
};

Success.args = {
  success: true,
};
