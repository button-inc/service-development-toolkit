import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HtmlOnlyWrapper, HtmlWithCssWrapper, Divider } from '../../../stories/helpers';
import RadioButton from '../src/RadioButton';
import ButtonTypography from './ButtonTypography';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {
    onClick: { action: 'clicked' },
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
    <RadioButton {...args} />
    <RadioButton {...args} />
  </>
);

const HTMLTemplate: Story = args => (
  <>
    <ButtonTypography />
    <HtmlOnlyWrapper>
      <RadioButton {...args} />
      <RadioButton {...args} />
    </HtmlOnlyWrapper>
  </>
);

const CSSTemplate: Story = args => (
  <>
    <ButtonTypography />
    <HtmlWithCssWrapper>
      <RadioButton {...args} />
      <RadioButton {...args} />
    </HtmlWithCssWrapper>
  </>
);

const args = {
  label: 'Lorem ipsum dolor sit amet',
  size: 'medium',
  name: 'samename',
};

export const JS = JSTemplate.bind({});
JS.args = args;

export const CSS = CSSTemplate.bind({});
CSS.args = args;

export const HTML = HTMLTemplate.bind({});
HTML.args = args;
