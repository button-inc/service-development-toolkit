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
    variant: {
      description: 'The style variant to use.',
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
    },
  },
} as Meta;

const Component = () => (
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

const JSTemplate: Story = args => (
  <>
    <ButtonTypography />
    <Header {...args}>
      <Component />
    </Header>
  </>
);

const HTMLTemplate: Story = args => (
  <>
    <ButtonTypography />
    <HtmlOnlyWrapper>
      <Header {...args}>
        <Component />
      </Header>
    </HtmlOnlyWrapper>
  </>
);

const CSSTemplate: Story = args => (
  <>
    <ButtonTypography />
    <HtmlWithCssWrapper>
      <Header {...args}>
        <Component />
      </Header>
    </HtmlWithCssWrapper>
  </>
);
const args = {
  variant: 'primary',
  onBannerClick: console.log,
};
export const JS = JSTemplate.bind({});
JS.args = args;

export const CSS = CSSTemplate.bind({});
CSS.args = args;

export const HTML = HTMLTemplate.bind({});
HTML.args = args;
