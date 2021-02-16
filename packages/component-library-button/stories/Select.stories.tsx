import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HtmlOnlyWrapper, HtmlWithCssWrapper } from '../../../stories/helpers';
import Select from '../src/Select';

export default {
  title: 'Select',
  component: Select,
} as Meta;

const Template: Story = args => (
  <>
    <h3>HTML Only</h3>
    <HtmlOnlyWrapper>
      <Select {...args}>Select</Select>
    </HtmlOnlyWrapper>

    <h3>HTML + CSS</h3>
    <HtmlWithCssWrapper>
      <Select {...args}>Select</Select>
    </HtmlWithCssWrapper>

    <h3>HTML + CSS + JS</h3>
    <Select {...args}>Select</Select>
  </>
);

export const Standard = Template.bind({});
Standard.args = {
  label: 'Field Label',
  size: ['small', 'medium', 'large'],
  required: false,
};
