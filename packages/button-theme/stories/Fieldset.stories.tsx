import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Fieldset from '../src/Fieldset';
import Input from '../src/Input';
import { HtmlOnlyWrapper, HtmlWithCssWrapper } from '../../../stories/helpers';
import ButtonTypography from './ButtonTypography';

export default {
  title: 'Fieldset',
  component: Fieldset,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
      description: 'The size of the input field.',
    },
    onClick: { action: 'clicked' },
    title: {
      description: "The title to display in the fieldset's legend.",
    },
    disabled: {
      description: 'Indicates whether the field is disabled.',
    },
    required: {
      description: 'Indicates whether the field is required.',
    },
    fullWidth: {
      description: 'Apply 100% width to the element.',
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta;

const Component = ({ args }) => {
  return (
    <Fieldset {...args}>
      <Input label="First Name" />
      <Input label="Last Name" />
    </Fieldset>
  );
};

const JSTemplate: Story = args => (
  <>
    <ButtonTypography />
    <Component args={args} />
  </>
);

const HTMLTemplate: Story = args => (
  <>
    <ButtonTypography />
    <HtmlOnlyWrapper>
      <Component args={args} />
    </HtmlOnlyWrapper>
  </>
);

const CSSTemplate: Story = args => (
  <>
    <ButtonTypography />
    <HtmlWithCssWrapper>
      <Component args={args} />
    </HtmlWithCssWrapper>
  </>
);
const args = {
  title: 'Please enter your name.',
  size: 'medium',
  disabled: false,
  required: false,
};
export const JS = JSTemplate.bind({});
JS.args = args;

export const CSS = CSSTemplate.bind({});
CSS.args = args;

export const HTML = HTMLTemplate.bind({});
HTML.args = args;
