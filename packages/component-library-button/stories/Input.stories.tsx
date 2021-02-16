import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HtmlOnlyWrapper, HtmlWithCssWrapper } from '../../../stories/helpers';
import Input from '../src/Input';

export default {
  title: 'Input',
  component: Input,
} as Meta;

const Template: Story = args => (
  <>
    <h3>HTML Only</h3>
    <HtmlOnlyWrapper>
      <Input {...args}>Input</Input>
    </HtmlOnlyWrapper>

    <h3>HTML + CSS</h3>
    <HtmlWithCssWrapper>
      <Input {...args}>Input</Input>
    </HtmlWithCssWrapper>

    <h3>HTML + CSS + JS</h3>
    <Input {...args}>Input</Input>
  </>
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  size: {
    type: 'select',
    options: ['small', 'medium', 'large'],
  },
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  size: {
    type: 'select',
    options: ['small', 'medium', 'large'],
  },
  disabled: false,
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  size: {
    type: 'select',
    options: ['small', 'medium', 'large'],
  },
  disabled: false,
};
