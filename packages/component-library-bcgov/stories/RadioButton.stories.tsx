import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HtmlOnlyWrapper, HtmlWithCssWrapper } from '../../../stories/helpers';
import RadioButton from '../src/RadioButton';

export default {
  title: 'Radio',
  component: RadioButton,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = args => (
  <>
    <h3>HTML Only</h3>
    <HtmlOnlyWrapper>
      <RadioButton {...args} label="radio" />
    </HtmlOnlyWrapper>

    <h3>HTML + CSS</h3>
    <HtmlWithCssWrapper>
      <RadioButton {...args} label="radio" />
    </HtmlWithCssWrapper>

    <h3>HTML + CSS + JS</h3>
    <RadioButton {...args} label="radio" />
  </>
);

export const Default = Template.bind({});
