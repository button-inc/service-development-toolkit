import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HtmlOnlyWrapper, HtmlWithCssWrapper } from '../../../stories/helpers';
import Link from '../src/Link';

export default {
  title: 'Link',
  component: Link,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
  },
} as Meta;

const Template: Story = args => (
  <>
    <Link {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  href: '#',
  size: 'medium',
  content: 'Access your application',
  external: true,
};
