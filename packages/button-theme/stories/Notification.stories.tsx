import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HtmlOnlyWrapper, HtmlWithCssWrapper, Divider } from '../../../stories/helpers';
import Notification from '../src/Notification';
import ButtonTypography from './ButtonTypography';

export default {
  title: 'Components/Notification',
  component: Notification,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    variant: {
      description: 'The style variant to use.',
      control: {
        type: 'select',
        options: ['success', 'standard', 'warning', 'danger'],
      },
    },
  },
} as Meta;

const Component = ({ args }) => {
  return (
    <Notification {...args}>
      <Notification.Group>
        <Notification.Header>Lectus Magna Efficitur</Notification.Header>
        <Notification.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tincidunt risus. In lectus magna, efficitur
          nec mi eu, placerat lacinia sem.
        </Notification.Content>
      </Notification.Group>
      <Notification.Group align="right">
        <Notification.Close>Close</Notification.Close>
      </Notification.Group>
    </Notification>
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
  variant: 'standard',
  size: 'medium',
  flex: true,
  closable: true,
};

export const JS = JSTemplate.bind({});
JS.args = args;

export const CSS = CSSTemplate.bind({});
CSS.args = args;

export const HTML = HTMLTemplate.bind({});
HTML.args = args;
