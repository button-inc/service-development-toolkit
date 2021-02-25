import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HtmlOnlyWrapper, HtmlWithCssWrapper, Divider } from '../../../stories/helpers';
import Button from '../src/Button';
import ButtonTypography from './ButtonTypography';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
  },
} as Meta;

const Template: Story = args => (
  <>
    <ButtonTypography />
    <h3>HTML Only</h3>
    <HtmlOnlyWrapper>
      <Button {...args}>Button</Button>
    </HtmlOnlyWrapper>

    <Divider />

    <h3>HTML + CSS</h3>
    <HtmlWithCssWrapper>
      <Button {...args}>Button</Button>
    </HtmlWithCssWrapper>

    <Divider />

    <h3>HTML + CSS + JS</h3>
    <Button {...args}>Button</Button>
  </>
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  size: 'medium',
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  size: 'medium',
  disabled: false,
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  size: 'medium',
  disabled: false,
};

export const Dark = Template.bind({});
Dark.args = {
  variant: 'dark',
  size: 'medium',
  disabled: false,
};
