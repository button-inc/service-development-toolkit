import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HtmlOnlyWrapper, HtmlWithCssWrapper } from '../../../stories/helpers';
import Button from '../src/Button';

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
  <div
    style={{
      backgroundColor: args.variant.endsWith('-inverse') ? '#003366' : '#fff',
    }}
  >
    <h3>HTML Only</h3>
    <HtmlOnlyWrapper>
      <Button {...args}>Button</Button>
    </HtmlOnlyWrapper>

    <h3>HTML + CSS</h3>
    <HtmlWithCssWrapper>
      <Button {...args}>Button</Button>
    </HtmlWithCssWrapper>

    <h3>HTML + CSS + JS</h3>
    <Button {...args}>Button</Button>
  </div>
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

export const PrimaryInverse = Template.bind({});
PrimaryInverse.args = {
  variant: 'primary-inverse',
  size: 'medium',
  disabled: false,
};

export const SecondaryInverse = Template.bind({});
SecondaryInverse.args = {
  variant: 'secondary-inverse',
  size: 'medium',
  disabled: false,
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  variant: 'primary-disabled',
  size: 'medium',
  disabled: true,
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  variant: 'secondary-disabled',
  size: 'medium',
  disabled: true,
};
