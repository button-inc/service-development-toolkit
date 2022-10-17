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
    variant: {
      description: 'The style variant to use.',
      control: {
        type: 'select',
        options: ['standard', 'warning'],
      },
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
