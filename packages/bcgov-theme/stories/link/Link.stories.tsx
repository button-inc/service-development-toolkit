import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Link from '../../src/Link';
import { HtmlOnlyWrapper } from '../../../../stories/helpers';
import { argTypes } from './args';

export default {
  title: 'Components/Link',
  component: Link,
  argTypes,
} as Meta;

const Template: Story = args => <Link {...args} />;

const HTMLTemplate: Story = args => (
  <>
    <HtmlOnlyWrapper>
      <Link {...args} />
    </HtmlOnlyWrapper>
  </>
);

const args = {
  href: '#',
  size: 'medium',
  content: 'Access your application',
  external: true,
};

export const Default = Template.bind({});
Default.args = args;

export const HTML = HTMLTemplate.bind({});
HTML.args = args;
