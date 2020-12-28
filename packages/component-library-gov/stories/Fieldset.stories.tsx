import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HtmlOnlyWrapper, HtmlWithCssWrapper } from '../../../stories/helpers';
import Fieldset from '../src/Fieldset';

export default {
  title: 'Fieldset',
  component: Fieldset,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = args => (
  <>
    <h3>HTML Only</h3>
    <HtmlOnlyWrapper>
      <Fieldset {...args} title="Fieldset" />
    </HtmlOnlyWrapper>

    <h3>HTML + CSS</h3>
    <HtmlWithCssWrapper>
      <Fieldset {...args} size="mini" title="Fieldset" />
    </HtmlWithCssWrapper>

    <h3>HTML + CSS + JS</h3>
    <Fieldset {...args} title="Fieldset" size="large" />
  </>
);

export const Default = Template.bind({});
