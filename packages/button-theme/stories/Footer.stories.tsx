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
    variant: {
      description: 'The style variant to use.',
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
    },
  },
} as Meta;

const JSTemplate: Story = args => (
  <>
    <ButtonTypography />
    <Footer {...args} />
  </>
);

const HTMLTemplate: Story = args => (
  <>
    <ButtonTypography />
    <HtmlOnlyWrapper>
      <Footer {...args} />
    </HtmlOnlyWrapper>
  </>
);

const CSSTemplate: Story = args => (
  <>
    <ButtonTypography />
    <HtmlWithCssWrapper>
      <Footer {...args} />
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
