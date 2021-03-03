import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HtmlOnlyWrapper, HtmlWithCssWrapper, Divider } from '../../../stories/helpers';
import Modal from '../src/Modal';
import Link from '../src/Link';
import BCGovTypography from './BCGovTypography';

export default {
  title: 'Modal',
  component: Modal,
} as Meta;

const Example = ({ args }) => {
  return (
    <>
      <Modal {...args}>
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
    </>
  );
};

const Template: Story = args => (
  <>
    <BCGovTypography />
    <Example args={args} />

    <a className="button" href="#test-id">
      Click Me
    </a>
  </>
);

export const Default = Template.bind({});
Default.args = {
  id: 'test-id',
};
