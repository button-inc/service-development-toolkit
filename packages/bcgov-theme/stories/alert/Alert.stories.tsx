import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Alert from '../../src/Alert';
import { HtmlOnlyWrapper } from '../../../../stories/helpers';
import { argTypes } from './args';

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes,
} as Meta;

const Template: Story = args => <Alert {...args} />;

const HTMLTemplate: Story = args => (
  <>
    <HtmlOnlyWrapper>
      <Alert {...args} />
    </HtmlOnlyWrapper>
  </>
);

const args = {
  variant: 'success',
  size: 'medium',
  closable: false,
  content: 'You have been alerted.',
};

export const Default = Template.bind({});
Default.args = args;

export const Info = Template.bind({});
Info.args = { ...args, variant: 'info' };

export const Warning = Template.bind({});
Warning.args = { ...args, variant: 'warning' };

export const Danger = Template.bind({});
Danger.args = { ...args, variant: 'danger' };

export const HTML = HTMLTemplate.bind({});
HTML.args = args;
