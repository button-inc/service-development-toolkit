import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Fieldset from '../src/Fieldset';
import Input from '../src/Input';
import BCGovTypography from './BCGovTypography';

export default {
  title: 'Fieldset',
  component: Fieldset,
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
      title: 'Fieldset',
      description: 'The fieldset is used to group related items within a form.',
      allEnabledDescription: `For fully enhanced environments, the fieldset can be used with custom event handlers,
      such as onClick.`,
      cssEnabledDescription: `For users with CSS but not javascript, avoid putting important functionality in custom
      handlers.`,
      htmlOnlyDescription: `Without css, the default browser fieldset style is used.`,
      usageCode: `
        import Fieldset from '@button-inc/bcgov-theme/Fieldset';
        import Input from '@button-inc/bcgov-theme/Input';

        export default function Component() {
          return (
            <div>
              <Fieldset label="Address" size="medium" title="Your Full Name" required>
                <Input label="First Name" />
                <Input label="Last Name" />
              </Fieldset>
            </div>
          )
        }
        `,
      props: [
        {
          name: 'size',
          type: 'string',
          description: `The size to use. Use one of ['small', 'medium', 'large'].`,
        },
        {
          name: 'disabled',
          type: 'boolean',
          description: `Pass this prop to the fieldset to disable all child inputs.`,
        },
        {
          name: 'required',
          type: 'boolean',
          description: `Pass this prop to the fieldset to require all child inputs.`,
        },
        {
          name: 'title',
          type: 'string',
          description: `The title to display in the fieldset's legend.`,
        },
        {
          name: 'variant',
          type: 'string',
          description: `Variants passed to the fieldset will be passed through to its children.`,
        },
      ],
    },
  },
} as Meta;

const Template: Story = args => (
  <>
    <BCGovTypography />
    <Fieldset {...args}>
      <Input label="First Name" />
      <Input label="Last Name" />
    </Fieldset>
  </>
);

export const Standard = Template.bind({});
Standard.args = {
  title: 'Your Full Name',
  size: 'medium',
  disabled: false,
  required: true,
};
