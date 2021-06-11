import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import BaseHead from '../../src/Header';
import { HtmlOnlyWrapper } from '../../../../stories/helpers';
import { argTypes } from './args';

const Header = props => <BaseHead {...props} />;

export default {
  title: 'Components/Header',
  component: Header,
  argTypes,
} as Meta;

const Template: Story = args => <Header {...args} />;

const HTMLTemplate: Story = args => (
  <HtmlOnlyWrapper>
    <Header {...args} />
  </HtmlOnlyWrapper>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Welcome!',
  header: 'main',
};

export const HTML = HTMLTemplate.bind({});
HTML.args = {
  title: 'Welcome!',
  header: 'main',
};
