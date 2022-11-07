import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Callout from '../src/Callout';
import { HtmlOnlyWrapper, HtmlWithCssWrapper } from '../../../stories/helpers';
import ButtonTypography from './ButtonTypography';

export default {
  title: 'Components/Callout',
  component: Callout,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
      description: 'The size of the callout',
    },
    content: {
      control: {
        type: 'text',
      },
      description: 'String content to show in the callout. To render more complex content, pass it as children.',
    },
  },
} as Meta;

const JSTemplate: Story = args => (
  <>
    <ButtonTypography />
    <Callout {...args}>I'm text being passed as children</Callout>
  </>
);

const HTMLTemplate: Story = args => (
  <>
    <ButtonTypography />
    <HtmlOnlyWrapper>
      <Callout {...args}>I'm text being passed as children</Callout>
    </HtmlOnlyWrapper>
  </>
);

const CSSTemplate: Story = args => (
  <>
    <ButtonTypography />
    <HtmlWithCssWrapper>
      <Callout {...args}>I'm text being passed as children</Callout>
    </HtmlWithCssWrapper>
  </>
);
const args = {
  size: 'medium',
  content: 'I am content',
};
export const JS = JSTemplate.bind({});
JS.args = args;

export const CSS = CSSTemplate.bind({});
CSS.args = args;

export const HTML = HTMLTemplate.bind({});
HTML.args = args;
