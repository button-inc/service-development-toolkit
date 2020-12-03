import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HtmlOnlyWrapper, HtmlWithCssWrapper } from '../helpers';

export default function storyBuilder(Button, label) {
  const metaData = {
    title: 'Button',
    component: Button,
    argTypes: { onClick: { action: 'clicked' } },
  } as Meta;

  const Template: Story = args => (
    <>
      <h3>HTML Only</h3>
      <HtmlOnlyWrapper>
        <Button {...args}>{label}</Button>
      </HtmlOnlyWrapper>

      <h3>HTML + CSS</h3>
      <HtmlWithCssWrapper>
        <Button {...args}>{label}</Button>
      </HtmlWithCssWrapper>

      <h3>HTML + CSS + JS</h3>
      <Button {...args}>{label}</Button>
    </>
  );

  const Primary = Template.bind({});
  Primary.args = {
    primary: true,
  };

  const Secondary = Template.bind({});
  Secondary.args = {
    secondary: true,
  };

  const Large = Template.bind({});
  Large.args = {
    large: true,
  };

  const Small = Template.bind({});
  Small.args = {
    small: true,
  };

  return {
    default: metaData,
    Primary,
    Secondary,
    Large,
    Small,
  };
}
