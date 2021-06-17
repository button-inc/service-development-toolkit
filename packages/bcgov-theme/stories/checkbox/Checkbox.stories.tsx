import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Checkbox from '../../src/Checkbox';
import { HtmlOnlyWrapper } from '../../../../stories/helpers';
import { argTypes } from './args';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes,
} as Meta;

const Template: Story = args => (
  <form>
    <Checkbox {...args} style={{ marginBottom: '10px' }} />
    <Checkbox label="Oranges" checked />
  </form>
);

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
