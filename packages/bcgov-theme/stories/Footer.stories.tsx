import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HtmlOnlyWrapper, HtmlWithCssWrapper } from '../../../stories/helpers';
import Footer from '../src/Footer';
import BCGovTypography from './BCGovTypography';

export default {
  title: 'Footer',
  component: Footer,
} as Meta;

const Menu = () => (
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
);

const Template: Story = args => (
  <>
    <BCGovTypography />
    <Footer {...args}>
      <Menu />
    </Footer>
  </>
);

export const Default = Template.bind({});
