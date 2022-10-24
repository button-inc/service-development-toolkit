import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HtmlOnlyWrapper, HtmlWithCssWrapper, Divider } from '../../../stories/helpers';
import FilePicker from '../src/FilePicker';
import ButtonTypography from './ButtonTypography';

export default {
  title: 'FilePicker',
  component: FilePicker,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
  },
} as Meta;

const JSTemplate: Story = args => (
  <>
    <ButtonTypography />
    <FilePicker {...args}>Choose File</FilePicker>
  </>
);

const HTMLTemplate: Story = args => (
  <>
    <ButtonTypography />
    <HtmlOnlyWrapper>
      <FilePicker {...args}>Choose File</FilePicker>
    </HtmlOnlyWrapper>
  </>
);

const CSSTemplate: Story = args => (
  <>
    <ButtonTypography />
    <HtmlWithCssWrapper>
      <FilePicker {...args}>Choose File</FilePicker>
    </HtmlWithCssWrapper>
  </>
);
const args = {
  label: 'Upload a file',
  size: 'medium',
  required: false,
  disabled: false,
  onChange: console.log,
};
export const JS = JSTemplate.bind({});
JS.args = args;

export const CSS = CSSTemplate.bind({});
CSS.args = args;

export const HTML = HTMLTemplate.bind({});
HTML.args = args;
