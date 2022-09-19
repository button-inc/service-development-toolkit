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
      description: 'The size of the checkbox',
    },
    content: {
      control: {
        type: 'text',
      },
      description: 'String content to show in the callout. To render more complex content, pass them as children.',
    },
  },
} as Meta;

export const Template = args => (
  <Callout args={args}>We're passionate about cultivating long-term digital partnerships.</Callout>
);

const HTMLTemplate: Story = args => (
  <>
    <HtmlOnlyWrapper>
      <Callout {...args}>We're passionate about cultivating long-term digital partnerships.</Callout>
    </HtmlOnlyWrapper>
  </>
);

export const Default = Template.bind({});
Default.args = {
  size: 'medium',
};

export const HTML = HTMLTemplate.bind({});
HTML.args = {
  size: 'medium',
};
