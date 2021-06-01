import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import DatePicker from '../src/DatePicker';
import BCGovTypography from './BCGovTypography';

export default {
  title: 'Components/DatePicker',
  component: DatePicker,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
  },
  parameters: {
    details: {
      title: 'Date Picker',
      description: 'The date picker allows users to select a date.',
      allEnabledDescription: `For fully enhanced environments, the date picker can be used with custom event handlers,
      such as onClick and onChange.`,
      cssEnabledDescription: `For users with CSS but not javascript, avoid putting important functionality in custom
      handlers. The input will support form submissions, and pass through name prop.`,
      htmlOnlyDescription: `Without css, the default browser datepicker is used.`,
      usageCode: `
        import DatePicker from '@button-inc/bcgov-theme/DatePicker';

        export default function Component() {
          return (
            <div>
              <DatePicker label="Birthday" name="date-of-birth" size="medium"/>
            </div>
          )
        }
        `,
      props: [
        {
          name: 'label',
          type: 'string',
          description: `The label for the input. If an id is not passed, one will be created to connect the label to the datepicker.`,
        },
        {
          name: 'size',
          type: 'string',
          description: `The size to use. Use one of ['small', 'medium', 'large'].`,
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
          description: `The name to pass on to the input. If not provided, one will be generated with the suffix "-datepicker".`,
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
      ],
    },
  },
} as Meta;

const Template: Story = args => (
  <>
    <BCGovTypography />
    <DatePicker {...args}>DatePicker</DatePicker>
  </>
);

export const Standard = Template.bind({});
Standard.args = {
  label: 'Birthday',
  size: 'medium',
  required: false,
  rounded: true,
  fullWidth: false,
};
