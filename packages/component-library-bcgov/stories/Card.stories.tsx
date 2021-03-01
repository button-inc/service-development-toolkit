import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HtmlOnlyWrapper, HtmlWithCssWrapper, Divider } from '../../../stories/helpers';
import Card from '../src/Card';
import Link from '../src/Link';
import Button from '../src/Button';
import BCGovTypography from './BCGovTypography';

export default {
  title: 'Card',
  component: Card,
} as Meta;

const Example = ({ args }) => {
  return (
    <>
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
    </>
  );
};

const Template: Story = args => (
  <>
    <BCGovTypography />
    <h3>HTML Only</h3>
    <HtmlOnlyWrapper>
      <Example args={args} />
    </HtmlOnlyWrapper>

    <Divider />

    <h3>HTML + CSS</h3>
    <HtmlWithCssWrapper>
      <Example args={args} />
    </HtmlWithCssWrapper>

    <Divider />

    <h3>HTML + CSS + JS</h3>
    <Example args={args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Online Registration',
};
