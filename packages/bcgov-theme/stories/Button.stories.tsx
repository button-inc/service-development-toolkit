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
  },
  parameters: {
    details: {
      title: 'Button',
      description: 'The base description that always shows up',
      allEnabledDescription: 'Description to show with all fields enabled',
      cssEnabledDescription: 'Description to show with CSS enabled',
      htmlOnlyDescription: 'Description to show with just html enabled',
      usageCode: `
        import component from @button-inc/component
        <Component x={true}/>
        `,
      props: [
        {
          name: 'size',
          type: 'string',
          description: 'size of the element',
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
  disabled: false,
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
