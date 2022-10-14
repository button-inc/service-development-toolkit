import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Callout from '../src/Callout';
import { HtmlOnlyWrapper } from '../../../stories/helpers';

export default {
  title: 'Callout',
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

const Template: Story = args => <Callout {...args}>I'm text being passed as children</Callout>;

const HTMLTemplate: Story = args => (
  <>
    <HtmlOnlyWrapper>
      <Callout {...args}>I'm text being passed as children</Callout>
    </HtmlOnlyWrapper>
  </>
);

export const Default = Template.bind({});
Default.args = {
  size: 'medium',
  content: 'I am content',
};

export const HTML = HTMLTemplate.bind({});
HTML.args = {
  size: 'medium',
  content: 'I am content',
};
