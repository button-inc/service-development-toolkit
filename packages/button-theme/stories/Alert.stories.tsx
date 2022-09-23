import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Alert from '../src/Alert';
import { HtmlOnlyWrapper } from '../../../stories/helpers';

export default {
  title: 'Alert',
  component: Alert,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
      description: 'The size of the alert',
    },
    variant: {
      description: 'The style variant to use.',
      control: {
        type: 'select',
        options: ['success', 'info', 'warning', 'danger'],
      },
    },
    closable: {
      description: 'Set to true to allow the alert to be closed by the user.',
    },
    content: {
      description: 'Pass text to display in the message.',
    },
  },
} as Meta;

const Template: Story = args => <Alert {...args} />;

const HTMLTemplate: Story = args => (
  <>
    <HtmlOnlyWrapper>
      <Alert {...args} />
    </HtmlOnlyWrapper>
  </>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'success',
  size: 'medium',
  closable: false,
  content: 'You have been alerted.',
};

export const HTML = HTMLTemplate.bind({});
HTML.args = {
  variant: 'primary',
  size: 'medium',
  closable: false,
  content: 'You have been alerted.',
};
