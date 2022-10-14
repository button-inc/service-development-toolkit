import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import HeroImage from '../src/HeroImage';
import { HtmlOnlyWrapper } from '../../../stories/helpers';

export default {
  title: 'HeroImage',
  component: HeroImage,
  argTypes: {
    url: {
      description: 'The url of the background image',
    },
  },
} as Meta;

const Template: Story = args => (
  <HeroImage {...args}>
    <h1>Component child header</h1>
    <p>Component child content</p>
  </HeroImage>
);

const HTMLTemplate: Story = args => (
  <HtmlOnlyWrapper>
    <HeroImage {...args}>
      <h1>Component child header</h1>
      <p>Component child content</p>
    </HeroImage>
  </HtmlOnlyWrapper>
);

const bgImage = 'https://picsum.photos/seed/button-inc/1000/100?blur';

export const Default = Template.bind({});
Default.args = {
  url: bgImage,
};

export const HTML = HTMLTemplate.bind({});
