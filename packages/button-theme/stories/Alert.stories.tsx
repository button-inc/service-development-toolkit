import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Alert from '../src/Alert';
import { HtmlOnlyWrapper, HtmlWithCssWrapper } from '../../../stories/helpers';
import ButtonTypography from './ButtonTypography';

export default {
  title: 'Components/Alert',
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

const Template: Story = args => (
  <>
    <ButtonTypography />
    <Alert {...args} />
  </>
);

const HTMLTemplate: Story = args => (
  <>
    <ButtonTypography />
    <HtmlOnlyWrapper>
      <Alert {...args} />
    </HtmlOnlyWrapper>
  </>
);

const CSSTemplate: Story = args => (
  <>
    <ButtonTypography />
    <HtmlWithCssWrapper>
      <Alert {...args} />
    </HtmlWithCssWrapper>
  </>
);
const args = {
  variant: 'success',
  size: 'medium',
  closable: false,
  content: 'You have been alerted.',
};

export const JS = Template.bind({});
JS.args = args;

export const CSS = CSSTemplate.bind({});
CSS.args = args;

export const HTML = HTMLTemplate.bind({});
HTML.args = args;
