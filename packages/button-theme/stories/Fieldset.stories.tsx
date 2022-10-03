import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Fieldset from '../src/Fieldset';
import Input from '../src/Input';
import { HtmlOnlyWrapper } from '../../../stories/helpers';

export default {
  title: 'Fieldset',
  component: Fieldset,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
      description: 'The size of the checkbox',
    },
    onClick: { action: 'clicked' },
    title: {
      description: "The title to display in the fieldset's legend.",
    },
    disabled: {
      description: 'Indicates whether the field is disabled.',
    },
    required: {
      description: 'Indicates whether the field is required.',
    },
    fullWidth: {
      description: 'Apply 100% width to the element.',
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta;

const Template: Story = args => (
  <Fieldset {...args}>
    <Input label="First Name" />
    <Input label="Last Name" />
  </Fieldset>
);

const HTMLTemplate: Story = args => (
  <>
    <HtmlOnlyWrapper>
      <Fieldset {...args}>
        <Input label="First Name" />
        <Input label="Last Name" />
      </Fieldset>
    </HtmlOnlyWrapper>
  </>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Please enter your name.',
  size: 'medium',
  disabled: false,
  required: false,
};

export const HTML = HTMLTemplate.bind({});
HTML.args = {
  title: 'Please enter your name.',
  size: 'medium',
};
