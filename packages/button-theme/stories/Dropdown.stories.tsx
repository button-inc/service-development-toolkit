import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HtmlOnlyWrapper, HtmlWithCssWrapper, Divider } from '../../../stories/helpers';
import Dropdown from '../src/Dropdown';
import ButtonTypography from './ButtonTypography';

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
    description: {
      control: {
        type: 'text'
      },
      description: "Optional description text that will be subordinate to the label if present."
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
    <ButtonTypography />
    <h3>HTML Only</h3>
    <HtmlOnlyWrapper>
      <Component {...args}>Dropdown</Component>
    </HtmlOnlyWrapper>

    <Divider />

    <h3>HTML + CSS</h3>
    <HtmlWithCssWrapper>
      <Component {...args}>Dropdown</Component>
    </HtmlWithCssWrapper>

    <Divider />

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
