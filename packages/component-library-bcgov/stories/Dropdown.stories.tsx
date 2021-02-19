import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HtmlOnlyWrapper, HtmlWithCssWrapper } from '../../../stories/helpers';
import Dropdown from '../src/Dropdown';

export default {
  title: 'Dropdown',
  component: Dropdown,
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
      <Dropdown {...args}>Dropdown</Dropdown>
    </HtmlOnlyWrapper>

    <h3>HTML + CSS</h3>
    <HtmlWithCssWrapper>
      <Dropdown {...args}>Dropdown</Dropdown>
    </HtmlWithCssWrapper>

    <h3>HTML + CSS + JS</h3>
    <Dropdown {...args}>Dropdown</Dropdown>
  </>
);

export const Standard = Template.bind({});
Standard.args = {
  label: 'Field Label',
  size: 'medium',
  required: false,
};
