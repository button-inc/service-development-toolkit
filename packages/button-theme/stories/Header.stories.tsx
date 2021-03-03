import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HtmlOnlyWrapper, HtmlWithCssWrapper, Divider } from '../../../stories/helpers';
import Header from '../src/Header';
import ButtonTypography from './ButtonTypography';

export default {
  title: 'Header',
  component: Header,
  argTypes: {
    onBannerClick: { action: 'clicked' },
  },
} as Meta;

const Menu = () => (
  <ul>
    <li>
      <a href=".">HOME</a>
    </li>
    <li>
      <a href=".">ABOUT US</a>
    </li>
    <li>
      <a href=".">CONTACT</a>
    </li>
  </ul>
);

const Template: Story = args => (
  <>
    <ButtonTypography />
    <h3>HTML Only</h3>
    <HtmlOnlyWrapper>
      <Header {...args}>
        <Menu />
      </Header>
    </HtmlOnlyWrapper>

    <Divider />

    <h3>HTML + CSS</h3>
    <HtmlWithCssWrapper>
      <Header {...args}>
        <Menu />
      </Header>
    </HtmlWithCssWrapper>

    <Divider />

    <h3>HTML + CSS + JS</h3>
    <Header {...args}>
      <Menu />
    </Header>
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
