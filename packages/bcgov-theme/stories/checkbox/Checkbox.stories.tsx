import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Checkbox from '../../src/Checkbox';
import { HtmlOnlyWrapper } from '../../../../stories/helpers';

// export default {
//   title: 'Components/Checkbox',
//   component: Checkbox,
//   argTypes: {
//     onClick: { action: 'clicked' },
//     size: {
//       control: {
//         type: 'select',
//         options: ['small', 'medium', 'large'],
//       },
//     },
//   },
//   parameters: {
//     details: {
//       title: 'Checkbox',
//       description: 'Checkboxes are a type of input that allow users to select one or more options from a list.',
//       allEnabledDescription: `For fully enhanced environments, checkboxes can be used with custom event handlers,
//       such as onClick and onChange.`,
//       cssEnabledDescription: `For users with CSS but not javascript, avoid putting important functionality in custom
//       handlers. Use checkboxes within a form to post data.`,
//       htmlOnlyDescription: `Without css, the default browser style is applied to the checkbox. Checkboxes can still be used when submitting a form.`,
//       usageCode: `
//         import Checkbox from "@button-inc/bcgov-theme/Checkbox";

//         export default function Component() {
//           return (
//             <>
//               <Checkbox label="Apples" name="apples"/>
//             </>
//           );
//         }
//         `,
//       props: [
//         {
//           name: 'size',
//           type: 'string',
//           description: `The size to use. Use one of ['small', 'medium', 'large'].`,
//         },
//         {
//           name: 'label',
//           type: 'string',
//           description: `The label for the checkbox. If an id is not passed, one will be created to connect the label to the checkbox.`,
//         },
//         {
//           name: 'disabled',
//           type: 'boolean',
//           description: `Indicates whether the field is disabled.`,
//         },
//         {
//           name: 'required',
//           type: 'boolean',
//           description: `Indicates whether the field is required.`,
//         },
//         {
//           name: 'value',
//           type: 'string',
//           description: `The value to pass on to the input.`,
//         },
//         {
//           name: 'name',
//           type: 'string',
//           description: `The name to pass on to the input. If not provided, one will be generated with the suffix "-input".`,
//         },
//         {
//           name: 'id',
//           type: 'string',
//           description: `The id to pass on to the input. If not provided but a label is given, one will be generated to connect them.`,
//         },
//       ],
//     },
//   },
// } as Meta;

const Template: Story = args => <Checkbox {...args} />;

const HTMLTemplate: Story = args => (
  <>
    <HtmlOnlyWrapper>
      <Checkbox {...args} />
    </HtmlOnlyWrapper>
  </>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Apples',
  size: 'medium',
  disabled: false,
  required: false,
  value: 'apples',
  name: 'apples',
  id: 'apples-checkbox',
};

export const HTML = HTMLTemplate.bind({});
HTML.args = {
  label: 'Apples',
  size: 'large',
};
