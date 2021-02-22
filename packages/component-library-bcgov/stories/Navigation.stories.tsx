import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HtmlOnlyWrapper, HtmlWithCssWrapper } from '../../../stories/helpers';
import Navigation from '../src/Navigation';

export default {
  title: 'Navigation',
  component: Navigation,
} as Meta;

const Menu = () => (
  <ul>
    <li>
      <a href=".">Link 2</a>
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
);

const Template: Story = args => (
  <>
    <Navigation {...args}>
      <Menu />
    </Navigation>
    <div style={{ border: '1px solid black', height: '100vw' }}>Content Body</div>
  </>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Hello British Columbia',
  onBannerClick: console.log,
};
