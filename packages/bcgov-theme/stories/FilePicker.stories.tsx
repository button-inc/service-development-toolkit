import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import FilePicker from '../src/FilePicker';
import BCGovTypography from './BCGovTypography';

export default {
  title: 'Components/FilePicker',
  component: FilePicker,
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
      title: 'File Picker',
      description: 'The file picker allows users to select a file to upload.',
      allEnabledDescription: `The filepicker can be used to upload a single file. This component does not yet support showing file names, or
      removing files. With javascript enabled, custom handlers (onChange) can be used to extend this.`,
      cssEnabledDescription: `For users with CSS but not javascript, avoid putting important functionality in custom
      handlers.`,
      htmlOnlyDescription: `In an html only state, the default file input will show beside a non-functional button. This result can be improved,
      but still gives users a path to uploading a file in an html only state.`,
      usageCode: `
        import FilePicker from '@button-inc/bcgov-theme/FilePicker';

        export default function Component() {
          return (
            <div>
              <FilePicker label="Upload a File" size="medium">Choose File</FilePicker>
            </div>
          )
        }
        `,
      props: [
        {
          name: 'label',
          type: 'string',
          description: `The label for the input. If an id is not passed, one will be created to connect the label to the input.`,
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
          name: 'fullWidth',
          type: 'boolean',
          description: `Take up 100% of the width of the parent element.`,
        },
      ],
    },
  },
} as Meta;

const Template: Story = args => (
  <>
    <BCGovTypography />
    <FilePicker {...args}>Choose File</FilePicker>
  </>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Upload a File',
  size: 'medium',
  required: false,
  disabled: false,
  onChange: console.log,
};
