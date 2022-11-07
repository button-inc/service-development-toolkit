import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HtmlOnlyWrapper, HtmlWithCssWrapper, Divider } from '../../../stories/helpers';
import Accordion from '../src/Accordion';
import ButtonTypography from './ButtonTypography';

export default {
  title: 'Components/Accordion',
  component: Accordion,
} as Meta;

const Component = ({ args }) => {
  return (
    <>
      <ButtonTypography />
      <Accordion {...args}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tincidunt risus. In lectus magna, efficitur
        nec mi eu.
      </Accordion>
    </>
  );
};

const JSTemplate: Story = args => <Component args={args} />;

const HTMLTemplate: Story = args => (
  <>
    <HtmlOnlyWrapper>
      <Component args={args} />
    </HtmlOnlyWrapper>
  </>
);

const CSSTemplate: Story = args => (
  <>
    <HtmlWithCssWrapper>
      <Component args={args} />
    </HtmlWithCssWrapper>
  </>
);

const args = {
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};
export const JS = JSTemplate.bind({});
JS.args = args;

export const CSS = CSSTemplate.bind({});
CSS.args = args;

export const HTML = HTMLTemplate.bind({});
HTML.args = args;
