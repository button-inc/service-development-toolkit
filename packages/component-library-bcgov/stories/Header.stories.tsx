import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HtmlOnlyWrapper, HtmlWithCssWrapper, Divider } from '../../../stories/helpers';
import Header from '../src/Header';
import BCGovTypography from './BCGovTypography';

export default {
  title: 'Header',
  component: Header,
} as Meta;

const Template: Story = args => (
  <>
    <BCGovTypography />
    <h3>HTML Only</h3>
    <HtmlOnlyWrapper>
      <Header {...args} />
    </HtmlOnlyWrapper>

    <Divider />

    <h3>HTML + CSS</h3>
    <HtmlWithCssWrapper>
      <Header {...args} />
    </HtmlWithCssWrapper>

    <Divider />

    <h3>HTML + CSS + JS</h3>
    <Header {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Hello British Columbia',
  onBannerClick: console.log,
};
