import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Textarea from '../src/Textarea';
import { HtmlOnlyWrapper } from '../../../stories/helpers';

export default {
  title: 'Textarea',
  component: Textarea,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
      description: 'The size of the textarea',
    },
    label: {
      description:
        'The label for the textarea. If an id is not provided, one will be created to connect the label to the textarea.',
    },
    resize: {
      description: 'Whether to allow the textarea to be resized.',
      control: {
        type: 'select',
        options: ['none', 'both', 'horizontal', 'vertical'],
      },
    },
    disabled: {
      description: 'Indicates whether the field is disabled.',
    },
    required: {
      description: 'Indicates whether the field is required.',
    },
    value: {
      description: 'The value to pass on to the input.',
      control: {
        type: 'text',
      },
    },
    name: {
      description: 'The name to pass on to the input. If not provided, one will be generated.',
    },
    id: {
      description:
        'The id to pass on to the input. If not provided but a label is given, one will be generated to connect them.',
    },
    maxLength: {
      description: 'The maximum length for the input.',
    },
    fullWidth: {
      description: 'Apply 100% width to the element.',
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta;

const Template: Story = args => <Textarea {...args} />;

const HTMLTemplate: Story = args => (
  <>
    <HtmlOnlyWrapper>
      <Textarea {...args} />
    </HtmlOnlyWrapper>
  </>
);

const args = {
  label: 'Enter your name.',
  size: 'medium',
  disabled: false,
  required: false,
  name: 'textarea-name',
  id: 'textarea',
  maxLength: 10,
};

export const Default = Template.bind({});
Default.args = args;

export const HTML = HTMLTemplate.bind({});
HTML.args = args;
