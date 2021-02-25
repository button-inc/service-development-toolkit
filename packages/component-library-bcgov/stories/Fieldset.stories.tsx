import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HtmlOnlyWrapper, HtmlWithCssWrapper, Divider } from '../../../stories/helpers';
import Fieldset from '../src/Fieldset';
import BCGovTypography from './BCGovTypography';

export default {
  title: 'Fieldset',
  component: Fieldset,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = args => (
  <>
    <BCGovTypography />
    <h3>HTML Only</h3>
    <HtmlOnlyWrapper>
      <Fieldset {...args} title="Fieldset" size="large" />
    </HtmlOnlyWrapper>

    <Divider />

    <h3>HTML + CSS</h3>
    <HtmlWithCssWrapper>
      <Fieldset {...args} size="mini" title="Fieldset" />
    </HtmlWithCssWrapper>

    <Divider />

    <h3>HTML + CSS + JS</h3>
    <Fieldset {...args} title="Fieldset" size="large" />
  </>
);

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
};
export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
};
