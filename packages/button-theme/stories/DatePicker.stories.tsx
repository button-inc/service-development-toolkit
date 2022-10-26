import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HtmlOnlyWrapper, HtmlWithCssWrapper, Divider } from '../../../stories/helpers';
import DatePicker from '../src/DatePicker';
import ButtonTypography from './ButtonTypography';

export default {
  title: 'Components/DatePicker',
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

const JSTemplate: Story = args => (
  <>
    <ButtonTypography />
    <DatePicker {...args}>DatePicker</DatePicker>
  </>
);

const HTMLTemplate: Story = args => (
  <>
    <ButtonTypography />
    <HtmlOnlyWrapper>
      <DatePicker {...args}>DatePicker</DatePicker>
    </HtmlOnlyWrapper>
  </>
);

const CSSTemplate: Story = args => (
  <>
    <ButtonTypography />
    <HtmlWithCssWrapper>
      <DatePicker {...args}>DatePicker</DatePicker>
    </HtmlWithCssWrapper>
  </>
);
const args = {
  label: 'Birthday',
  size: 'medium',
  required: false,
  rounded: true,
  fullWidth: false,
  value: process.env.STORYBOOK_VISUAL_TESTING ? '2022-11-04' : undefined,
};
export const JS = JSTemplate.bind({});
JS.args = args;

export const CSS = CSSTemplate.bind({});
CSS.args = args;

export const HTML = HTMLTemplate.bind({});
HTML.args = args;
