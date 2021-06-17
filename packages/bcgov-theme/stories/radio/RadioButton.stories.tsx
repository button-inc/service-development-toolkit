import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import RadioButton from '../../src/RadioButton';
import { HtmlOnlyWrapper } from '../../../../stories/helpers';
import { argTypes } from './args';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes,
} as Meta;

const Template: Story = args => (
  <form>
    <RadioButton {...args} />
    <RadioButton label="Red" name="radio" style={{ paddingTop: '10px' }} />
  </form>
);

const HTMLTemplate: Story = args => (
  <>
    <HtmlOnlyWrapper>
      <RadioButton {...args} />
    </HtmlOnlyWrapper>
  </>
);

const args = {
  label: 'Green',
  size: 'medium',
  disabled: false,
  required: false,
  name: 'radio',
  id: 'radio-input',
};

export const Default = Template.bind({});
Default.args = args;

export const HTML = HTMLTemplate.bind({});
HTML.args = { ...args, name: 'radio-html', id: 'radio-html' };
