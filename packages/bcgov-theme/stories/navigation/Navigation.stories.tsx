import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Navigation from '../../src/Navigation';
import { HtmlOnlyWrapper } from '../../../../stories/helpers';
import { argTypes } from './args';

export default {
  title: 'Components/Navigation',
  component: Navigation,
  argTypes,
} as Meta;

const Template: Story = args => (
  <Navigation {...args}>
    <ul>
      <li>
        <a href=".">Link 1</a>
      </li>
      <li>
        <a href=".">Link 2</a>
      </li>
      <li>
        <a href=".">Link 3</a>
      </li>
      <li>
        <a href=".">Link 4</a>
      </li>
      <li>
        <a href=".">Link 5</a>
      </li>
      <li>
        <a href=".">Link 6</a>
      </li>
    </ul>
  </Navigation>
);

// Duplication is to needed to make code show up in code blocks
const HTMLTemplate: Story = args => (
  <HtmlOnlyWrapper>
    <Navigation {...args}>
      <ul>
        <li>
          <a href=".">Link 1</a>
        </li>
        <li>
          <a href=".">Link 2</a>
        </li>
        <li>
          <a href=".">Link 3</a>
        </li>
        <li>
          <a href=".">Link 4</a>
        </li>
        <li>
          <a href=".">Link 5</a>
        </li>
        <li>
          <a href=".">Link 6</a>
        </li>
      </ul>
    </Navigation>
  </HtmlOnlyWrapper>
);

const args = {
  mobileBreakPoint: 800,
  title: 'Welcome!',
  header: 'main',
};

export const Default = Template.bind({});
Default.args = args;

export const HTML = HTMLTemplate.bind({});
HTML.args = args;
