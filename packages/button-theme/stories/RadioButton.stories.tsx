import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HtmlOnlyWrapper, HtmlWithCssWrapper, Divider } from '../../../stories/helpers';
import RadioButton from '../src/RadioButton';
import ButtonTypography from './ButtonTypography';

export default {
  title: 'RadioButton',
  component: RadioButton,
  argTypes: {
    onClick: { action: 'clicked' },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    description: {
      control: {
        type: 'text',
      },
      description: 'Optional description text that will be subordinate to the label if present.',
    },
  },
} as Meta;

const Template: Story = args => (
  <>
    <ButtonTypography />
    <h3>HTML Only</h3>
    <HtmlOnlyWrapper>
      <RadioButton {...args} />
    </HtmlOnlyWrapper>

    <Divider />

    <h3>HTML + CSS</h3>
    <HtmlWithCssWrapper>
      <RadioButton {...args} />
    </HtmlWithCssWrapper>

    <Divider />

    <h3>HTML + CSS + JS</h3>
    <RadioButton {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Lorem ipsum dolor sit amet',
  size: 'medium',
  name: 'samename',
};
