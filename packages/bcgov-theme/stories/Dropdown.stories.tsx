import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HtmlOnlyWrapper, HtmlWithCssWrapper, Divider } from '../../../stories/helpers';
import Dropdown from '../src/Dropdown';
import BCGovTypography from './BCGovTypography';

export default {
  title: 'Dropdown',
  component: Dropdown,
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
      title: 'Dropdown',
      description: 'Dropdowns allow users to select one option from a list.',
      allEnabledDescription: `For fully enhanced environments, dropdowns an be used with custom event handlers,
      such as onClick or onChange.`,
      cssEnabledDescription: `For users with CSS but not javascript, avoid putting important functionality in custom
      handlers. Dropdowns can receive a name, and will generate one if not provided to work with standard form submissions.`,
      htmlOnlyDescription: `Without css, the default browser style is applied to the dropdown.`,
      usageCode: `
        import Dropdown from '@button-inc/bcgov-theme/Dropdown';

        export default function Component() {
          return (
            <div>
              <Dropdown label="fruits" name="fruit" size="small">
                <option value="banana">banana</option>
                <option value="apple">apple</option>
                <option value="orange">orange</option>
              </Dropdown>
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

const Component = props => (
  <Dropdown {...props}>
    <option value="option1">Option 1</option>
    <option value="option1">Option 2</option>
    <option value="option1">Option 3</option>
    <option value="option1">Option 4</option>
    <option value="option1">Option 5</option>
  </Dropdown>
);

const Template: Story = args => (
  <>
    <BCGovTypography />
    <Component {...args}>Dropdown</Component>
  </>
);

export const Standard = Template.bind({});
Standard.args = {
  label: 'Field Label',
  size: 'medium',
  rounded: true,
  required: false,
};
