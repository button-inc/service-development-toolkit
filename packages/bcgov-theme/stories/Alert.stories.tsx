import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HtmlOnlyWrapper, HtmlWithCssWrapper } from '../../../stories/helpers';
import Alert from '../src/Alert';
import BCGovTypography from './BCGovTypography';

export default {
  title: 'Alert',
  component: Alert,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
  },
} as Meta;

const Template: Story = args => (
  <>
    <BCGovTypography />
    <Alert {...args} />
  </>
);

const content =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tincidunt risus. In lectus magna, efficitur nec mi eu.';

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  size: 'medium',
  closable: false,
  content,
};

export const Info = Template.bind({});
Info.args = {
  variant: 'info',
  size: 'medium',
  closable: false,
  content,
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  size: 'medium',
  closable: false,
  content,
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  size: 'medium',
  closable: false,
  content,
};
