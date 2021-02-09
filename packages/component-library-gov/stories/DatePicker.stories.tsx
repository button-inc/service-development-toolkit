import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HtmlOnlyWrapper, HtmlWithCssWrapper } from '../../../stories/helpers';
import DatePicker from '../src/DatePicker';

export default {
  title: 'Date Picker',
  component: DatePicker,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = args => (
  <>
    <h3>HTML Only</h3>
    <HtmlOnlyWrapper>
      <DatePicker {...args}>DatePicker</DatePicker>
    </HtmlOnlyWrapper>

    <h3>HTML + CSS</h3>
    <HtmlWithCssWrapper>
      <DatePicker {...args}>DatePicker</DatePicker>
    </HtmlWithCssWrapper>

    <h3>HTML + CSS + JS</h3>
    <DatePicker {...args}>DatePicker</DatePicker>
  </>
);

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
};
export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
};
