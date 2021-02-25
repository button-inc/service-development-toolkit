import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HtmlOnlyWrapper, HtmlWithCssWrapper, Divider } from '../../../stories/helpers';
import DatePicker from '../src/DatePicker';
import BCGovTypography from './BCGovTypography';

export default {
  title: 'Date Picker',
  component: DatePicker,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = args => (
  <>
    <BCGovTypography />
    <h3>HTML Only</h3>
    <HtmlOnlyWrapper>
      <DatePicker {...args}>DatePicker</DatePicker>
    </HtmlOnlyWrapper>

    <Divider />

    <h3>HTML + CSS</h3>
    <HtmlWithCssWrapper>
      <DatePicker {...args}>DatePicker</DatePicker>
    </HtmlWithCssWrapper>

    <Divider />

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
