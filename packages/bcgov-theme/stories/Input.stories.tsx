import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Input from '../src/Input';
import BCGovTypography from './BCGovTypography';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    type: {
      control: {
        type: 'select',
        options: ['email', 'number', 'password', 'tel', 'text', 'url'],
      },
    },
  },
  parameters: {
    details: {
      title: 'Input',
      description: 'Text inputs allow users to enter a single line of text.',
      allEnabledDescription: `For fully enhanced environments, inputs can be used with custom event handlers,
      such as onClick , onChange and onBlur.`,
      cssEnabledDescription: `For users with CSS but not javascript, avoid putting important functionality in custom
      handlers. Use inputs within a form to post data.`,
      htmlOnlyDescription: `Without css, the default browser style is applied to the input. Inputs can still be used when submitting a form.`,
      usageCode: `
        import Input from "@button-inc/bcgov-theme/Input";

        export default function Component() {
          return (
            <Input label="First Name" name="first-name"/>
          );
        }

        `,
      props: [
        {
          name: 'type',
          type: 'string',
          description: `The type of input to use. Use one of ['email', 'number', 'password', 'tel', 'text', 'url'].`,
        },
        {
          name: 'size',
          type: 'string',
          description: `The size to use. Use one of ['small', 'medium', 'large'].`,
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
    <Input {...args}>Input</Input>
  </>
);

export const Standard = Template.bind({});
Standard.args = {
  label: 'First Name',
  size: 'medium',
  required: false,
  rounded: true,
  fullWidth: false,
  type: 'text',
};
