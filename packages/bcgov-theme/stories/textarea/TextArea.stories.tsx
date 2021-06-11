import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Textarea from '../../src/Textarea';
import { HtmlOnlyWrapper } from '../../../../stories/helpers';
import { argTypes } from './args';

export default {
  title: 'Components/Textarea',
  component: Textarea,
  argTypes,
} as Meta;

const Template: Story = args => <Textarea {...args} />;

const HTMLTemplate: Story = args => (
  <>
    <HtmlOnlyWrapper>
      <Textarea {...args} />
    </HtmlOnlyWrapper>
  </>
);

const args = {
  label: 'Enter your name.',
  size: 'medium',
  disabled: false,
  required: false,
  name: 'textarea-name',
  id: 'textarea',
  rounded: true,
  maxLength: 10,
};

export const Default = Template.bind({});
Default.args = args;

export const HTML = HTMLTemplate.bind({});
HTML.args = args;
