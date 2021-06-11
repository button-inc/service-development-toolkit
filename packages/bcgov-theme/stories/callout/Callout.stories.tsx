import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Callout from '../../src/Callout';
import { HtmlOnlyWrapper } from '../../../../stories/helpers';
import { argTypes } from './args';

export default {
  title: 'Components/Callout',
  component: Callout,
  argTypes,
} as Meta;

export const Template = args => (
  <Callout args={args}>
    By March 1, 2018, eligible residents of B.C. are expected to renew enrolment in the Medical Services Plan (MSP) and
    get a BC Services Card.
  </Callout>
);

const HTMLTemplate: Story = args => (
  <>
    <HtmlOnlyWrapper>
      <Callout {...args}>
        By March 1, 2018, eligible residents of B.C. are expected to renew enrolment in the Medical Services Plan (MSP)
        and get a BC Services Card.
      </Callout>
    </HtmlOnlyWrapper>
  </>
);

export const Default = Template.bind({});
Default.args = {
  size: 'medium',
};

export const HTML = HTMLTemplate.bind({});
HTML.args = {
  size: 'medium',
};
