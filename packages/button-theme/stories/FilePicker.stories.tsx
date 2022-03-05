import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HtmlOnlyWrapper, HtmlWithCssWrapper, Divider } from '../../../stories/helpers';
import FilePicker from '../src/FilePicker';
import ButtonTypography from './ButtonTypography';

export default {
  title: 'FilePicker',
  component: FilePicker,
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
      <FilePicker {...args}>Choose File</FilePicker>
    </HtmlOnlyWrapper>

    <Divider />

    <h3>HTML + CSS</h3>
    <HtmlWithCssWrapper>
      <FilePicker {...args}>Choose File</FilePicker>
    </HtmlWithCssWrapper>

    <Divider />

    <h3>HTML + CSS + JS</h3>
    <FilePicker {...args}>Choose File</FilePicker>
  </>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Upload a file',
  size: 'medium',
  required: false,
  disabled: false,
  onChange: console.log,
};
