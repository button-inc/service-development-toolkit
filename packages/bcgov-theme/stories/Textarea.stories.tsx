import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HtmlOnlyWrapper, HtmlWithCssWrapper, Divider } from '../../../stories/helpers';
import Textarea from '../src/Textarea';
import BCGovTypography from './BCGovTypography';

export default {
  title: 'Textarea',
  component: Textarea,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    resize: {
      control: {
        type: 'select',
        options: ['none', 'both', 'horizontal', 'vertical'],
      },
    },
  },
} as Meta;

const Template: Story = args => (
  <>
    <BCGovTypography />
    <h3>HTML Only</h3>
    <HtmlOnlyWrapper>
      <Textarea {...args}>Textarea</Textarea>
    </HtmlOnlyWrapper>

    <Divider />

    <h3>HTML + CSS</h3>
    <HtmlWithCssWrapper>
      <Textarea {...args}>Textarea</Textarea>
    </HtmlWithCssWrapper>

    <Divider />

    <h3>HTML + CSS + JS</h3>
    <Textarea {...args}>Textarea</Textarea>
  </>
);

export const Standard = Template.bind({});
Standard.args = {
  label: 'First Name',
  size: 'medium',
  resize: 'none',
  required: false,
  rounded: true,
  fullWidth: false,
};
