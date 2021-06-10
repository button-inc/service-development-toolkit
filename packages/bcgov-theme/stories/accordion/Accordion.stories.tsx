import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Accordion from '../../src/Accordion';
import { HtmlOnlyWrapper } from '../../../../stories/helpers';
import { argTypes } from './args';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  argTypes,
} as Meta;

const text = `
An apple is an edible fruit produced by an apple tree (Malus domestica). Apple trees are cultivated worldwide
and are the most widely grown species in the genus Malus.
`;

const Template: Story = args => <Accordion {...args}>{text}</Accordion>;
const HTMLTemplate: Story = args => (
  <>
    <HtmlOnlyWrapper>
      <Accordion {...args}>{text}</Accordion>
    </HtmlOnlyWrapper>
  </>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Apples',
  defaultToggled: true,
  onToggle: () => {},
};

export const HTML = HTMLTemplate.bind({});
HTML.args = {
  Title: 'Apples',
};
