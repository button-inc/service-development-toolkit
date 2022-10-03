import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Input from '../../src/Input';
import { HtmlOnlyWrapper } from '../../../../stories/helpers';
import { argTypes } from './args';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes,
} as Meta;

const Template: Story = args => <Input {...args} />;

const HTMLTemplate: Story = args => (
  <>
    <HtmlOnlyWrapper>
      <Input {...args} />
    </HtmlOnlyWrapper>
  </>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Enter your name.',
  size: 'medium',
  disabled: false,
  required: false,
  name: 'name',
  id: 'name-input',
  rounded: true,
  maxLength: 10,
  fullWidth: true,
};

export const HTML = HTMLTemplate.bind({});
HTML.args = {
  label: 'Enter your name.',
};
