import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HtmlOnlyWrapper, HtmlWithCssWrapper, Divider } from '../../../stories/helpers';
import Accordion from '../src/Accordion';
import ButtonTypography from './ButtonTypography';

export default {
  title: 'Accordion',
  component: Accordion,
} as Meta;

const Example = ({ args }) => {
  return (
    <>
      <Accordion {...args}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tincidunt risus. In lectus magna, efficitur
        nec mi eu.
      </Accordion>
      <Accordion {...args}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tincidunt risus. In lectus magna, efficitur
        nec mi eu.
      </Accordion>
      <Accordion {...args}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tincidunt risus. In lectus magna, efficitur
        nec mi eu.
      </Accordion>
    </>
  );
};

const Template: Story = args => (
  <>
    <ButtonTypography />
    <h3>HTML Only</h3>
    <HtmlOnlyWrapper>
      <Example args={args} />
    </HtmlOnlyWrapper>

    <Divider />

    <h3>HTML + CSS</h3>
    <HtmlWithCssWrapper>
      <Example args={args} />
    </HtmlWithCssWrapper>

    <Divider />

    <h3>HTML + CSS + JS</h3>
    <Example args={args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};
