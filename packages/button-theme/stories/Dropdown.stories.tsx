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

const JSTemplate: Story = args => (
  <>
    <ButtonTypography />
    <Component {...args}>Dropdown</Component>
  </>
);

const HTMLTemplate: Story = args => (
  <>
    <ButtonTypography />
    <HtmlOnlyWrapper>
      <Component {...args}>Dropdown</Component>
    </HtmlOnlyWrapper>
  </>
);

const CSSTemplate: Story = args => (
  <>
    <ButtonTypography />
    <HtmlWithCssWrapper>
      <Component {...args}>Dropdown</Component>
    </HtmlWithCssWrapper>
  </>
);
const args = {
  label: 'Field Label',
  size: 'medium',
  required: false,
};
export const JS = JSTemplate.bind({});
JS.args = args;

export const CSS = CSSTemplate.bind({});
CSS.args = args;

export const HTML = HTMLTemplate.bind({});
HTML.args = args;
