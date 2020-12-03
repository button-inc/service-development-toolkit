import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HtmlOnlyWrapper, HtmlWithCssWrapper } from '../../../stories/helpers';
import Checkbox from '../src/Checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = args => (
  <>
    <h3>HTML Only</h3>
    <HtmlOnlyWrapper>
      <Checkbox {...args} label="checkbox" />
    </HtmlOnlyWrapper>

    <h3>HTML + CSS</h3>
    <HtmlWithCssWrapper>
      <Checkbox {...args} size="mini" label="checkbox" />
    </HtmlWithCssWrapper>

    <h3>HTML + CSS + JS</h3>
    <Checkbox {...args} label="checkbox" size="large" />
  </>
);

export const Default = Template.bind({});
