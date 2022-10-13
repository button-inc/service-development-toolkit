import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HtmlOnlyWrapper, HtmlWithCssWrapper, Divider } from '../../../stories/helpers';
import NotificationV2 from '../src/NotificationV2';
import ButtonTypography from './ButtonTypography';

export default {
  title: 'NotificationV2',
  component: NotificationV2,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
  },
} as Meta;

const ExampleNotification = props => (
  <NotificationV2 {...props}>
    <NotificationV2.Group>
      <NotificationV2.Header>Lectus Magna Efficitur</NotificationV2.Header>
      <NotificationV2.Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tincidunt risus. In lectus magna, efficitur
        nec mi eu, placerat lacinia sem.
      </NotificationV2.Content>
    </NotificationV2.Group>
    <NotificationV2.Group align="right">
      <NotificationV2.Close>Close</NotificationV2.Close>
    </NotificationV2.Group>
  </NotificationV2>
);

const Template: Story = args => (
  <>
    <ButtonTypography />
    <h3>HTML Only</h3>
    <HtmlOnlyWrapper>
      <ExampleNotification {...args} />
    </HtmlOnlyWrapper>

    <Divider />

    <h3>HTML + CSS + JS</h3>
    <ExampleNotification {...args} />
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
