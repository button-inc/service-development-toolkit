import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HtmlOnlyWrapper, HtmlWithCssWrapper, Divider } from '../../../stories/helpers';
import HeroImage from '../src/HeroImage';
import BCGovTypography from './BCGovTypography';

export default {
  title: 'HeroImage',
  component: HeroImage,
} as Meta;

const Sample = ({ args }) => {
  return (
    <HeroImage {...args}>
      <h2>Header Text</h2>
      <p>This is a subtitle with some extra information</p>
      <a href="#link1">This is a link</a>
    </HeroImage>
  );
};

const Template: Story = args => (
  <>
    <BCGovTypography />
    <h3>HTML Only</h3>
    <HtmlOnlyWrapper>
      <Sample args={args} />
    </HtmlOnlyWrapper>

    <Divider />

    <h3>HTML + CSS</h3>
    <HtmlWithCssWrapper>
      <Sample args={args} />
    </HtmlWithCssWrapper>

    <Divider />

    <h3>HTML + CSS + JS</h3>
    <Sample args={args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  url: 'https://bcparks.ca/_shared/images/backgrounds/Tunkwa-Iain-Robert-Reid.jpg',
};
