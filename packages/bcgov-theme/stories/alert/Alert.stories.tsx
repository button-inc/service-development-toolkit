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
