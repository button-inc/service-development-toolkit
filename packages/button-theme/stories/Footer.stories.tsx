import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HtmlOnlyWrapper, HtmlWithCssWrapper, Divider } from '../../../stories/helpers';
import Footer from '../src/Footer';
import ButtonTypography from './ButtonTypography';

export default {
  title: 'Footer',
  component: Footer,
  argTypes: {
    onBannerClick: { action: 'clicked' },
  },
} as Meta;

const Template: Story = args => (
  <>
    <ButtonTypography />
    <h3>HTML Only</h3>
    <HtmlOnlyWrapper>
      <Footer {...args} />
    </HtmlOnlyWrapper>

    <Divider />

    <h3>HTML + CSS</h3>
    <HtmlWithCssWrapper>
      <Footer {...args} />
    </HtmlWithCssWrapper>

    <Divider />

    <h3>HTML + CSS + JS</h3>
    <Footer {...args} />
  </>
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  onBannerClick: console.log,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  onBannerClick: console.log,
};
