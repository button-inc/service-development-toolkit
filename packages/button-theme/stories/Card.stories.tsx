import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Card from '../src/Card';
import Link from '../src/Link';
import Button from '../src/Button';
import { HtmlOnlyWrapper, HtmlWithCssWrapper } from '../../../stories/helpers';
import ButtonTypography from './ButtonTypography';

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    title: {
      description: 'The title of the card to display in its header.',
    },
  },
} as Meta;

const Component = ({ args }) => {
  return (
    <>
      {' '}
      <Card {...args}>
        If you'd like to register online please ensure that you have the <Link href="#link1">supporting documents</Link>{' '}
        available
        <br /> <br />
        <Button>Click here to register</Button>
        <br /> <br />
        <Link href="#link1">
          Already registered? Click here to <strong>login</strong>
        </Link>
      </Card>
    </>
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
  title: 'Online Registration',
};
export const JS = JSTemplate.bind({});
JS.args = args;

export const CSS = CSSTemplate.bind({});
CSS.args = args;

export const HTML = HTMLTemplate.bind({});
HTML.args = args;
