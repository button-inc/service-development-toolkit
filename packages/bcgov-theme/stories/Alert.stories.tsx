import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Alert from '../src/Alert';
import BCGovTypography from './BCGovTypography';

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['success', 'info', 'warning', 'danger'],
      },
    },
  },
  parameters: {
    details: {
      title: 'Alert',
      description: `Alert banners notify users of important information or changes on a page. Typically, they appear at the top of a page. The alert can either be passed
      a string to display through the "content" prop, or be passed children to render its content.`,
      allEnabledDescription: `For fully enhanced environments, alerts an be used with custom event handlers,
      such as onClick. The onClose callback prop will work normally.`,
      cssEnabledDescription: `For users with CSS but not javascript, avoid putting important functionality in custom
      handlers or the onClose callback. The ability to close the alert will still work as expected.`,
      htmlOnlyDescription: `Without css, the default browser style is applied. The alert will render and will not be closable.`,
      usageCode: `
        import Alert from "@button-inc/bcgov-theme/Alert";

        export default function Component() {
          return (
            <>
              <Alert variant="info" closable>
                The park will be closed this long weekend.
              </Alert>
            </>
          );
        }
        `,
      props: [
        {
          name: 'variant',
          type: 'string',
          description: `The style variant to use. Use one of ['success', 'info', 'warning', 'danger'].`,
        },
        {
          name: 'size',
          type: 'string',
          description: `The size to use. Use one of ['small', 'medium', 'large'].`,
        },
        {
          name: 'closable',
          type: 'boolean',
          description: `Set to true to allow the alert to be closed by the user.`,
        },
        {
          name: 'content',
          type: 'string',
          description: `Pass text to display in the message.`,
        },
      ],
    },
  },
} as Meta;

const Template: Story = args => (
  <>
    <BCGovTypography />
    <Alert {...args} />
  </>
);

const content =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tincidunt risus. In lectus magna, efficitur nec mi eu.';

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  size: 'medium',
  closable: false,
  content,
};

export const Info = Template.bind({});
Info.args = {
  variant: 'info',
  size: 'medium',
  closable: false,
  content,
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  size: 'medium',
  closable: false,
  content,
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  size: 'medium',
  closable: false,
  content,
};
