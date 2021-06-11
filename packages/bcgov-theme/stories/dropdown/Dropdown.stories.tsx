import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import BaseDropdown from '../../src/Dropdown';
import { HtmlOnlyWrapper } from '../../../../stories/helpers';
import { argTypes } from './args';

export default {
  title: 'Components/Dropdown',
  component: BaseDropdown,
  argTypes,
} as Meta;

const Dropdown = args => (
  <BaseDropdown {...args}>
    <option value="option1">Option 1</option>
    <option value="option1">Option 2</option>
    <option value="option1">Option 3</option>
  </BaseDropdown>
);

const Template: Story = args => (
  <Dropdown {...args}>
    <option value="option1">Option 1</option>
    <option value="option1">Option 2</option>
    <option value="option1">Option 3</option>
  </Dropdown>
);

const HTMLTemplate: Story = args => (
  <HtmlOnlyWrapper>
    <Dropdown {...args}>
      <option value="option1">Option 1</option>
      <option value="option1">Option 2</option>
      <option value="option1">Option 3</option>
    </Dropdown>
  </HtmlOnlyWrapper>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Select a date',
  size: 'medium',
  disabled: false,
  required: false,
  value: 'date',
  name: 'date',
  id: 'date-picker',
  rounded: true,
};

export const HTML = HTMLTemplate.bind({});
HTML.args = {
  label: 'Select a date',
  size: 'medium',
};
