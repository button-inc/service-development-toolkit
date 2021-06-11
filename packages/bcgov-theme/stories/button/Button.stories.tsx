import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Button from '../../src/Button';
import { HtmlOnlyWrapper } from '../../../../stories/helpers';
import { argTypes } from './args';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes,
} as Meta;

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
  <>
    <HtmlOnlyWrapper>
      <Button {...args}>Click me!</Button>
    </HtmlOnlyWrapper>
  </>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'primary',
  size: 'medium',
  disabled: false,
  fullWidth: false,
  fullHeight: false,
};

export const HTML = HTMLTemplate.bind({});
HTML.args = {
  variant: 'primary',
  size: 'medium',
  disabled: false,
};
