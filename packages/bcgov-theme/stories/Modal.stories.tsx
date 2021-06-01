import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Modal from '../src/Modal';
import Link from '../src/Link';
import BCGovTypography from './BCGovTypography';

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    details: {
      title: 'Date Picker',
      description: `The modal displays content on an overlay requireing action. Modals can have usability issues, and other callouts should be preferred.
      To use the component, it requires an id, and a linking href to that id. See below for an example. Note that storybook reloads the iframe
      when linking to anchors within the page, causing a delay compared to the normal functionality. The modal can be given Modal.Header and Modal.Content as children to display content nicely.
      `,
      allEnabledDescription: `For fully enhanced environments, the modal can be used with custom event handlers,
      such as onClick and onChange.`,
      cssEnabledDescription: `For users with CSS but not javascript, avoid putting important functionality in custom
      handlers. The modal will work the same with just CSS.`,
      htmlOnlyDescription: `Without css, the modal contents will be rendered on the page where the modal was embedded. To support this use case keep modal content
      in a location of the page that will make sense when open.`,
      usageCode: `
        import Modal from "@button-inc/bcgov-theme/Modal";
        import Link from "@button-inc/bcgov-theme/Link";

        export default function Component() {
          return (
            <>
              <Modal id="my-modal">
                <Modal.Header>
                  Need Help? <Modal.Close>Close</Modal.Close>
                </Modal.Header>
                <Modal.Content>
                  If you have specific questions, contact the Ministry of Children and
                  Family Development.
                </Modal.Content>
              </Modal>

              <Link href="#my-modal">Open Modal</Link>
            </>
          );
        }
        `,
      props: [],
    },
  },
} as Meta;

const Example = ({ args }) => {
  return (
    <>
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
