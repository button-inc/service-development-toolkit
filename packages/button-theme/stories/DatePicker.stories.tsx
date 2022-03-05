import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HtmlOnlyWrapper, HtmlWithCssWrapper, Divider } from '../../../stories/helpers';
import DatePicker from '../src/DatePicker';
import ButtonTypography from './ButtonTypography';

export default {
  title: 'DatePicker',
  component: DatePicker,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    description: {
      control: {
        type: 'text'
      },
      description: "Optional description text that will be subordinate to the label if present."
    },
  },
} as Meta;

const Template: Story = args => (
  <>
    <ButtonTypography />
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

export const Standard = Template.bind({});
Standard.args = {
  label: 'Birthday',
  size: 'medium',
  required: false,
  rounded: true,
  fullWidth: false,
};
