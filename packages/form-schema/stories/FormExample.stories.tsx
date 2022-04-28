import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import FormExample from './FormExample';

export default {
  title: 'FormExample',
  component: FormExample,
  argTypes: {
    onClick: { action: 'clicked' },
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
    <FormExample />
  </>
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  size: 'medium',
  disabled: false,
};
