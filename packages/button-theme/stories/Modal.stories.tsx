import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Modal } from '../src/Modal';
import { HtmlOnlyWrapper } from '../../../stories/helpers';

export default {
  title: 'Modal',
  component: Modal,
  argTypes: {
    id: {
      description: 'The id applied to the outer container. Link to this id to open the modal.',
    },
  },
} as Meta;

const Template: Story = args => (
  <Modal {...args} style={{ visibility: 'visible', position: 'relative' }}>
    <Modal.Header>
      I am a modal header placeholder. <Modal.Close>Close</Modal.Close>
    </Modal.Header>
    <Modal.Content>I am modal content placeholder.</Modal.Content>
  </Modal>
);

const HTMLTemplate: Story = args => (
  <HtmlOnlyWrapper>
    <Modal {...args}>
      <Modal.Header>
        I am a modal header. <Modal.Close href="./?path=/story/modal--default">Close</Modal.Close>
      </Modal.Header>
      <Modal.Content>I am modal content.</Modal.Content>
    </Modal>
  </HtmlOnlyWrapper>
);

const args = {
  id: 'modal',
};

export const Default = Template.bind({});
Default.args = args;

export const HTML = HTMLTemplate.bind({});
HTML.args = args;
