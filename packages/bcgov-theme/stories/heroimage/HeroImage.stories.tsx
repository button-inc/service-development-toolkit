import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import HeroImage from '../../src/HeroImage';
import { HtmlOnlyWrapper } from '../../../../stories/helpers';
import { argTypes } from './args';

export default {
  title: 'Components/HeroImage',
  component: HeroImage,
  argTypes,
} as Meta;

const Template: Story = args => (
  <HeroImage {...args}>
    <h1>BC Parks.</h1>
    <p>Welcome to BC Parks!</p>
  </HeroImage>
);

// duplication in template is to make code block show the children
const HTMLTemplate: Story = args => (
  <HtmlOnlyWrapper>
    <HeroImage {...args}>
      <h1>BC Parks.</h1>
      <p>Welcome to BC Parks!</p>
    </HeroImage>
  </HtmlOnlyWrapper>
);

export const Default = Template.bind({});
Default.args = {
  url: 'https://bcparks.ca/_shared/images/backgrounds/Tunkwa-Iain-Robert-Reid.jpg',
};

export const HTML = HTMLTemplate.bind({});
HTML.args = {
  url: 'https://bcparks.ca/_shared/images/backgrounds/Tunkwa-Iain-Robert-Reid.jpg',
};
