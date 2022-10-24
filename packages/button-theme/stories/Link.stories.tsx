import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Link from '../src/Link';
import { HtmlOnlyWrapper, HtmlWithCssWrapper } from '../../../stories/helpers';
import ButtonTypography from './ButtonTypography';

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

const Component = ({ args }) => {
  return (
    <Link {...args} href={args.href}>
      Access your application
    </Link>
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
  href: '#',
  size: 'medium',
  external: true,
};

export const JS = JSTemplate.bind({});
JS.args = args;

export const CSS = CSSTemplate.bind({});
CSS.args = args;

export const HTML = HTMLTemplate.bind({});
HTML.args = args;
