import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Button from '../../packages/component-library/src/Button';
import { HtmlOnlyWrapper, HtmlWithCssWrapper } from '../helpers';

export default {
  title: 'Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = args => (
  <>
    <h3>HTML Only</h3>
    <HtmlOnlyWrapper>
      <Button {...args} >Button</Button>
    </HtmlOnlyWrapper>

    <h3>HTML + CSS</h3>
    <HtmlWithCssWrapper>
      <Button {...args} >Button</Button>
    </HtmlWithCssWrapper>

    <h3>HTML + CSS + JS</h3>
    <Button {...args} >Button</Button>
  </>
);

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
