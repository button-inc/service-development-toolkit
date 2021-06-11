import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Fieldset from '../../src/Fieldset';
import Input from '../../src/Input';
import { HtmlOnlyWrapper } from '../../../../stories/helpers';
import { argTypes } from './args';

export default {
  title: 'Components/Fieldset',
  component: Fieldset,
  argTypes,
} as Meta;

const Template: Story = args => (
  <Fieldset {...args}>
    <Input label="First Name" />
    <Input label="Last Name" />
  </Fieldset>
);

const HTMLTemplate: Story = args => (
  <>
    <HtmlOnlyWrapper>
      <Fieldset {...args}>
        <Input label="First Name" />
        <Input label="Last Name" />
      </Fieldset>
    </HtmlOnlyWrapper>
  </>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Please enter your name.',
  size: 'medium',
  disabled: false,
  required: false,
};

export const HTML = HTMLTemplate.bind({});
HTML.args = {
  title: 'Please enter your name.',
  size: 'medium',
};
