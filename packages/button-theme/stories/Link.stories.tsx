import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Link from '../src/Link';
import { HtmlOnlyWrapper } from '../../../stories/helpers';

export default {
  title: 'Link',
  component: Link,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
      description: 'The size of the link',
    },
    href: {
      description: 'The url that the hyperlink points to.',
    },
    external: {
      description: 'Link to an external page.',
    },
  },
} as Meta;

const Template: Story = args => (
  <Link {...args} href={args.href}>
    Access your application
  </Link>
);

const HTMLTemplate: Story = args => (
  <>
    <HtmlOnlyWrapper>
      <Link {...args} href={args.href}>
        Access your application
      </Link>
    </HtmlOnlyWrapper>
  </>
);

const args = {
  href: '#',
  size: 'medium',
  external: true,
};

export const Default = Template.bind({});
Default.args = args;

export const HTML = HTMLTemplate.bind({});
HTML.args = args;
