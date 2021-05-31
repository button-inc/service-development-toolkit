import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Textarea from '../src/Textarea';
import BCGovTypography from './BCGovTypography';

export default {
  title: 'Textarea',
  component: Textarea,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    resize: {
      control: {
        type: 'select',
        options: ['none', 'both', 'horizontal', 'vertical'],
      },
    },
  },
  parameters: {
    details: {
      title: 'Textarea',
      description: 'A textarea allows users to input multiple lines of text.',
      allEnabledDescription: `For fully enhanced environments, textareas an be used with custom event handlers,
      such as onClick, onBlur or onChange.`,
      cssEnabledDescription: `For users with CSS but not javascript, avoid putting important functionality in custom
      handlers. Textareas will maintain their style and can be used with forms to submit data.`,
      htmlOnlyDescription: `Without css, the default browser style is applied to the textarea. It can still be used within a form.`,
      usageCode: `
        import Textarea from "@button-inc/bcgov-theme/Textarea";

        export default function Component() {
          return (
            <Textarea rows={10} resize="vertical"/>
          );
        }
        `,
      props: [
        {
          name: 'size',
          type: 'string',
          description: `The size to use. Use one of ['small', 'medium', 'large'].`,
        },
        {
          name: 'resize',
          type: 'string',
          description: `Whether to allow the textarea to be resized. Set to "none", "both", "horizontal" or "vertical".`,
        },
        {
          name: 'label',
          type: 'string',
          description: `The label for the input. If an id is not passed, one will be created to connect the label to the input.`,
        },
        {
          name: 'disabled',
          type: 'boolean',
          description: `Indicates whether the field is disabled.`,
        },
        {
          name: 'required',
          type: 'boolean',
          description: `Indicates whether the field is required.`,
        },
        {
          name: 'value',
          type: 'string',
          description: `The value to pass on to the input.`,
        },
        {
          name: 'name',
          type: 'string',
          description: `The name to pass on to the input. If not provided, one will be generated with the suffix "-input".`,
        },
        {
          name: 'id',
          type: 'string',
          description: `The id to pass on to the input. If not provided but a label is given, one will be generated to connect them.`,
        },
        {
          name: 'rounded',
          type: 'boolean',
          description: `Apply a rounded border radius to the input.`,
        },
        {
          name: 'fullWidth',
          type: 'boolean',
          description: `Add a width style of 100%.`,
        },
      ],
    },
  },
} as Meta;

const Template: Story = args => (
  <>
    <BCGovTypography />
    <Textarea {...args}>Textarea</Textarea>
  </>
);

export const Standard = Template.bind({});
Standard.args = {
  label: 'First Name',
  size: 'medium',
  resize: 'none',
  required: false,
  disabled: false,
  rounded: true,
  fullWidth: false,
};
