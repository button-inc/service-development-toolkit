import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Card from '../../src/Card';
import Link from '../../src/Link';
import Button from '../../src/Button';
import { HtmlOnlyWrapper } from '../../../../stories/helpers';
import { argTypes } from './args';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes,
} as Meta;

const Template: Story = args => (
  <Card {...args}>
    If you'd like to register online please ensure that you have the{' '}
    <Link href="#link1" content="supporting documents" /> available
    <br /> <br />
    <Button>Click here to register</Button>
    <br /> <br />
    <Link href="#link1">
      Already registered? Click here to <strong>login</strong>
    </Link>
  </Card>
);

// duplication in template is to make code block show the children
const HTMLTemplate: Story = args => (
  <HtmlOnlyWrapper>
    <Card {...args}>
      If you'd like to register online please ensure that you have the{' '}
      <Link href="#link1" content="supporting documents" /> available
      <br /> <br />
      <Button>Click here to register</Button>
      <br /> <br />
      <Link href="#link1">
        Already registered? Click here to <strong>login</strong>
      </Link>
    </Card>
  </HtmlOnlyWrapper>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Online Registration',
};

export const HTML = HTMLTemplate.bind({});
HTML.args = {
  title: 'Online Registration',
};
