import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HtmlOnlyWrapper, HtmlWithCssWrapper } from '../../../stories/helpers';
import Button from '../src/Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = args => (
  <>
    <h3>HTML Only</h3>
    <HtmlOnlyWrapper>
      <Button {...args}>Button</Button>
    </HtmlOnlyWrapper>

    <h3>HTML + CSS</h3>
    <HtmlWithCssWrapper>
      <Button {...args} variant={args.variant}>
        Button
      </Button>
    </HtmlWithCssWrapper>

    <h3>HTML + CSS + JS</h3>
    <Button {...args}>Button</Button>
  </>
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};
export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
};

export const Default = Template.bind({});
