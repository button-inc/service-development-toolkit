import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Button from '../../src/Button';
import { HtmlOnlyWrapper } from '../../../../stories/helpers';

export const Template: Story = args => (
  <>
    {args.variant.endsWith('-inverse') ? (
      <div style={{ backgroundColor: '#003366', padding: '15px' }}>
        <Button {...args}>Click Me!</Button>
      </div>
    ) : (
      <Button {...args}>Click Me!</Button>
    )}
  </>
);

const HTMLTemplate: Story = args => (
  <HtmlOnlyWrapper>
    <Button {...args}>Click me!</Button>
  </HtmlOnlyWrapper>
);

const args = {
  variant: 'primary',
  size: 'medium',
  disabled: false,
  fullWidth: false,
  fullHeight: false,
};

export const Default = Template.bind({});
Default.args = args;

export const Secondary = Template.bind({});
Secondary.args = { ...args, variant: 'secondary' };

export const SecondaryInverse = Template.bind({});
SecondaryInverse.args = { ...args, variant: 'secondary-inverse' };

export const PrimaryInverse = Template.bind({});
PrimaryInverse.args = { ...args, variant: 'primary-inverse' };

export const HTML = HTMLTemplate.bind({});
HTML.args = args;
