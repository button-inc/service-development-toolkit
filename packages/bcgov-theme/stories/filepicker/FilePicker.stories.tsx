import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import FilePicker from '../../src/FilePicker';
import { HtmlOnlyWrapper } from '../../../../stories/helpers';
import { argTypes } from './args';

export default {
  title: 'Components/FilePicker',
  component: FilePicker,
  argTypes,
} as Meta;

const Template: Story = args => <FilePicker {...args}>Choose File</FilePicker>;

const HTMLTemplate: Story = args => (
  <HtmlOnlyWrapper>
    <FilePicker {...args}>Choose File</FilePicker>
  </HtmlOnlyWrapper>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Choose a file',
  size: 'medium',
  disabled: false,
  required: false,
  name: 'file',
  id: 'file-picker',
};

export const HTML = HTMLTemplate.bind({});
HTML.args = {
  label: 'Choose a file',
  size: 'medium',
};
