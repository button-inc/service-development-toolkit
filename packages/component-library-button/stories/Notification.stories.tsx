import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HtmlOnlyWrapper, HtmlWithCssWrapper } from '../../../stories/helpers';
import Notification from '../src/Notification';

export default {
  title: 'Notification',
  component: Notification,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
  },
} as Meta;

const Component = props => (
  <Notification {...props}>
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

const Template: Story = args => (
  <>
    <h3>HTML Only</h3>
    <HtmlOnlyWrapper>
      <Component {...args} />
    </HtmlOnlyWrapper>

    <h3>HTML + CSS</h3>
    <HtmlWithCssWrapper>
      <Component {...args} />
    </HtmlWithCssWrapper>

    <h3>HTML + CSS + JS</h3>
    <Component {...args} />
  </>
);

export const Standard = Template.bind({});
Standard.args = {
  variant: 'standard',
  size: 'medium',
  flex: true,
  closable: true,
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  size: 'medium',
  flex: true,
  closable: true,
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  size: 'medium',
  flex: true,
  closable: true,
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  size: 'medium',
  flex: true,
  closable: true,
};
