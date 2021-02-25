import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HtmlOnlyWrapper, HtmlWithCssWrapper, Divider } from '../../../stories/helpers';
import Input from '../src/Input';
import BCGovTypography from './BCGovTypography';

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
  },
} as Meta;

const Template: Story = args => (
  <>
    <BCGovTypography />
    <h3>HTML Only</h3>
    <HtmlOnlyWrapper>
      <Input {...args}>Input</Input>
    </HtmlOnlyWrapper>

    <Divider />

    <h3>HTML + CSS</h3>
    <HtmlWithCssWrapper>
      <Input {...args}>Input</Input>
    </HtmlWithCssWrapper>

    <Divider />

    <h3>HTML + CSS + JS</h3>
    <Input {...args}>Input</Input>
  </>
);

export const Standard = Template.bind({});
Standard.args = {
  label: 'First Name',
  size: 'medium',
  required: false,
  rounded: true,
  fullWidth: false,
};
