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

const Component = props => (
  <Dropdown {...props}>
    <option value="option1">Option 1</option>
    <option value="option1">Option 2</option>
    <option value="option1">Option 3</option>
    <option value="option1">Option 4</option>
    <option value="option1">Option 5</option>
  </Dropdown>
);

const Template: Story = args => (
  <>
    <h3>HTML Only</h3>
    <HtmlOnlyWrapper>
      <Component {...args}>Dropdown</Component>
    </HtmlOnlyWrapper>

    <h3>HTML + CSS</h3>
    <HtmlWithCssWrapper>
      <Component {...args}>Dropdown</Component>
    </HtmlWithCssWrapper>

    <h3>HTML + CSS + JS</h3>
    <Component {...args}>Dropdown</Component>
  </>
);

export const Standard = Template.bind({});
Standard.args = {
  label: 'Field Label',
  size: 'medium',
  required: false,
};
