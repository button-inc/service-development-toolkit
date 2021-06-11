import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Datepicker from '../../src/DatePicker';
import { HtmlOnlyWrapper } from '../../../../stories/helpers';
import { argTypes } from './args';

export default {
  title: 'Components/DatePicker',
  component: Datepicker,
  argTypes,
} as Meta;

const Template: Story = args => <Datepicker {...args} />;

const HTMLTemplate: Story = args => (
  <>
    <HtmlOnlyWrapper>
      <Datepicker {...args} />
    </HtmlOnlyWrapper>
  </>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Select a date',
  size: 'medium',
  disabled: false,
  required: false,
  value: 'date',
  name: 'date',
  id: 'date-picker',
};

export const HTML = HTMLTemplate.bind({});
HTML.args = {
  label: 'Date',
  size: 'large',
};
