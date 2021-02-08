import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HtmlOnlyWrapper, HtmlWithCssWrapper } from '../../../stories/helpers';
import FilePicker from '../src/FilePicker';

export default {
  title: 'File Picker',
  component: FilePicker,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = args => (
  <>
    <h3>HTML Only</h3>
    <HtmlOnlyWrapper>
      <FilePicker {...args}>FilePicker</FilePicker>
    </HtmlOnlyWrapper>

    <h3>HTML + CSS</h3>
    <HtmlWithCssWrapper>
      <FilePicker {...args}>FilePicker</FilePicker>
    </HtmlWithCssWrapper>

    <h3>HTML + CSS + JS</h3>
    <FilePicker {...args}>FilePicker</FilePicker>
  </>
);

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
};
export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
};
