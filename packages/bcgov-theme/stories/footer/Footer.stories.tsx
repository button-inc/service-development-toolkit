import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Footer from '../../src/Footer';
import { HtmlOnlyWrapper } from '../../../../stories/helpers';
import { argTypes } from './args';

export default {
  title: 'Components/Footer',
  component: Footer,
  argTypes,
} as Meta;

const Template: Story = args => (
  <Footer {...args}>
    <ul>
      <li>
        <a href=".">About</a>
      </li>
      <li>
        <a href=".">Careers</a>
      </li>
      <li>
        <a href=".">Privacy Policy</a>
      </li>
    </ul>
  </Footer>
);

//  Duplication is to make the subcomponents show in all code blocks
const HTMLTemplate: Story = args => (
  <HtmlOnlyWrapper>
    <Footer {...args}>
      <ul>
        <li>
          <a href=".">About</a>
        </li>
        <li>
          <a href=".">Careers</a>
        </li>
        <li>
          <a href=".">Privacy Policy</a>
        </li>
      </ul>
    </Footer>
  </HtmlOnlyWrapper>
);

export const Default = Template.bind({});

export const HTML = HTMLTemplate.bind({});
