import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Button from '../src/Button';
import BCGovTypography from './BCGovTypography';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: [
          'primary',
          'secondary',
          'primary-inverse',
          'secondary-inverse',
          'primary-disabled',
          'secondary-disabled',
        ],
      },
    },
  },
  parameters: {
    details: {
      title: 'Button',
      description: 'Buttons allow users to carry out an important action on your service, such as Download or Submit.',
      allEnabledDescription: `For fully enhanced environments, buttons an be used with custom event handlers,
      such as onClick.`,
      cssEnabledDescription: `For users with CSS but not javascript, avoid putting important functionality in custom
      handlers. Buttons can still be used as a link or to submit a form.`,
      htmlOnlyDescription: `Without css, the default browser style is applied to the button. Buttons can still be used as a link or to submit a form.`,
      usageCode: `
        import Button from '@button-inc/bcgov-theme/Button';

        export default function Component() {
          return (
            <div>
              <Button>Click Me!</Button>
            </div>
          )
        }
        `,
      props: [
        {
          name: 'variant',
          type: 'string',
          description: `The style variant to use. Use one of ['primary', 'primary-inverse', 'primary-disabled', 'secondary', 'secondary-inverse', 'secondary-disabled'].`,
        },
        {
          name: 'size',
          type: 'string',
          description: `The size to use. Use one of ['small', 'medium', 'large'].`,
        },
      ],
    },
  },
} as Meta;

const Template: Story = args => (
  <div style={{ backgroundColor: args.variant.endsWith('-inverse') ? '#003366' : '#fff', padding: '15px' }}>
    <BCGovTypography />
    <Button {...args}>Button</Button>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  size: 'medium',
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  size: 'medium',
};

export const PrimaryInverse = Template.bind({});
PrimaryInverse.args = {
  variant: 'primary-inverse',
  size: 'medium',
  disabled: false,
};

export const SecondaryInverse = Template.bind({});
SecondaryInverse.args = {
  variant: 'secondary-inverse',
  size: 'medium',
  disabled: false,
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  variant: 'primary-disabled',
  size: 'medium',
  disabled: true,
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  variant: 'secondary-disabled',
  size: 'medium',
  disabled: true,
};
