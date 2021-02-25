import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HtmlOnlyWrapper, HtmlWithCssWrapper } from '../../../stories/helpers';
import FilePicker from '../src/FilePicker';

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
  },
} as Meta;

const Template: Story = args => (
  <>
    <h3>HTML Only</h3>
    <HtmlOnlyWrapper>
      <FilePicker {...args}>Choose File</FilePicker>
    </HtmlOnlyWrapper>

    <h3>HTML + CSS</h3>
    <HtmlWithCssWrapper>
      <FilePicker {...args}>Choose File</FilePicker>
    </HtmlWithCssWrapper>

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
