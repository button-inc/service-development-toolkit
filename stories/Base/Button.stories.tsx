import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import Button from '../../packages/component-library/src/Button';

export default {
  title: 'Button',
  component: Button,
} as Meta;

// const Template: Story<ButtonProps> = (args) => <Button {...args} />;
const Template: Story = (args) => <Button {...args}>Button</Button>;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  secondary: true,
};

export const Large = Template.bind({});
Large.args = {
  large: true,
};

export const Small = Template.bind({});
Small.args = {
  small: true,
};
