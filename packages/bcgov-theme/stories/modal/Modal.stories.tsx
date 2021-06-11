import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Modal from '../../src/Modal';
import Link from '../../src/Link';
import { HtmlOnlyWrapper } from '../../../../stories/helpers';
import { argTypes } from './args';

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes,
} as Meta;

const Template: Story = args => (
  <Modal {...args} style={{ visibility: 'visible', position: 'relative' }}>
    <Modal.Header>
      Need Help? <Modal.Close>Close</Modal.Close>
    </Modal.Header>
    <Modal.Content>
      If you have specific questions, contact the Ministry of Children and Family Development.
      <br />
      <br />
      <strong>Phone</strong>
      <br />
      <Link href="#link1">1-888-654-1234,</Link> toll free
      <br />
      <Link href="#link2">250-123-4567,</Link> in the Greater Victoria
      <br />
      <br />
      <strong>Email</strong>
      <br />
      <Link href="#link3">info@gov.ca</Link>
    </Modal.Content>
  </Modal>
);

const HTMLTemplate: Story = args => (
  <HtmlOnlyWrapper>
    <Modal {...args}>
      <Modal.Header>
        Need Help? <Modal.Close href="./?path=/story/modal--default">Close</Modal.Close>
      </Modal.Header>
      <Modal.Content>
        If you have specific questions, contact the Ministry of Children and Family Development.
        <br />
        <br />
        <strong>Phone</strong>
        <br />
        <Link href="#link1">1-888-654-1234,</Link> toll free
        <br />
        <Link href="#link2">250-123-4567,</Link> in the Greater Victoria
        <br />
        <br />
        <strong>Email</strong>
        <br />
        <Link href="#link3">info@gov.ca</Link>
      </Modal.Content>
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
