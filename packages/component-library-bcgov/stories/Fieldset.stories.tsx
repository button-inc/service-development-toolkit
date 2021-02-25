import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HtmlOnlyWrapper, HtmlWithCssWrapper, Divider } from '../../../stories/helpers';
import Fieldset from '../src/Fieldset';
import Input from '../src/Input';
import BCGovTypography from './BCGovTypography';

export default {
  title: 'Fieldset',
  component: Fieldset,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
  },
} as Meta;

const Form = () => {
  return (
    <>
      <Input label="First Name" required />
    </>
  );
};

const Template: Story = args => (
  <>
    <BCGovTypography />
    <h3>HTML Only</h3>
    <HtmlOnlyWrapper>
      <Fieldset {...args}>
        <Form />
        <Fieldset />
      </Fieldset>
    </HtmlOnlyWrapper>

    <Divider />

    <h3>HTML + CSS</h3>
    <HtmlWithCssWrapper>
      <Fieldset {...args}>
        <Form />
        <Fieldset />
      </Fieldset>
    </HtmlWithCssWrapper>

    <Divider />

    <h3>HTML + CSS + JS</h3>
    <Fieldset {...args}>
      <Form />
      <Fieldset />
    </Fieldset>
  </>
);

export const Standard = Template.bind({});
Standard.args = {
  title: 'Form Fields',
  size: 'medium',
  disabled: false,
};
