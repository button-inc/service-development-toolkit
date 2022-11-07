import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import HeroImage from '../src/HeroImage';
import { HtmlOnlyWrapper, HtmlWithCssWrapper } from '../../../stories/helpers';
import ButtonTypography from './ButtonTypography';

export default {
  title: 'Components/HeroImage',
  component: HeroImage,
  argTypes: {
    url: {
      description: 'The url of the background image',
    },
  },
} as Meta;

const Component = ({ args }) => {
  return (
    <HeroImage {...args}>
      <h1>Component child header</h1>
      <p>Component child content</p>
    </HeroImage>
  );
};

const JSTemplate: Story = args => (
  <>
    <ButtonTypography />
    <Component args={args} />
  </>
);

const HTMLTemplate: Story = args => (
  <>
    <ButtonTypography />
    <HtmlOnlyWrapper>
      <Component args={args} />
    </HtmlOnlyWrapper>
  </>
);

const CSSTemplate: Story = args => (
  <>
    <ButtonTypography />
    <HtmlWithCssWrapper>
      <Component args={args} />
    </HtmlWithCssWrapper>
  </>
);

const args = {
  url: 'https://picsum.photos/seed/buttoninc/1000/100?blur',
};
export const JS = JSTemplate.bind({});
JS.args = args;

export const CSS = CSSTemplate.bind({});
CSS.args = args;

export const HTML = HTMLTemplate.bind({});
HTML.args = args;
