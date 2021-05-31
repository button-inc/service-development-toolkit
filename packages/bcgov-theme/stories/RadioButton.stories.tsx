import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import RadioButton from '../src/RadioButton';
import BCGovTypography from './BCGovTypography';

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
  },
  parameters: {
    details: {
      title: 'Radio Button',
      description: `Radio buttons are a type of input that allow users to select only one option from a list. Ensure to add the same name to radios in a group.`,
      allEnabledDescription: `For fully enhanced environments, custom events such as onChange or onClick can be used.`,
      cssEnabledDescription: `For users with CSS but not javascript, avoid putting important functionality in custom
      handlers. Styling will remain consistent.`,
      htmlOnlyDescription: `Without css, the default browser style is applied to the radio button. Radios can still be submitted as part of a form.`,
      usageCode: `
        import RadioButton from "@button-inc/bcgov-theme/RadioButton";
        import Fieldset from "@button-inc/bcgov-theme/Fieldset";

        export default function Component() {
          return (
            <Fieldset title="Favourite Fruit">
              <RadioButton label="apple" value="apple" name="favourite-fruit" />
              <RadioButton label="orange" value="orange" name="favourite-fruit" />
              <RadioButton label="banana" value="banana" name="favourite-fruit" />
            </Fieldset>
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
          name: 'label',
          type: 'string',
          description: `The label for the input. If an id is not passed, one will be created to connect the label to the radio button.`,
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
          description: `The name to pass on to the input. Provide the same name to each radio button so only one can be selected.`,
        },
        {
          name: 'id',
          type: 'string',
          description: `The id to pass on to the input. If not provided but a label is given, one will be generated to connect them.`,
        },
      ],
    },
  },
} as Meta;

const Template: Story = args => (
  <>
    <BCGovTypography />
    <RadioButton {...args} />
    <RadioButton {...args} label="second" />
  </>
);

export const Default = Template.bind({});
Default.args = {
  label: 'First',
  size: 'medium',
  name: 'name',
};
