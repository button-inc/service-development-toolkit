import Modal from 'bcgov-theme/Modal';
import Link from 'bcgov-theme/Link';
import BCGovTypography from '../../components/BCGovTypography';

export default function AlertPage() {
  return (
    <>
      <BCGovTypography />
      <Modal id="test-id">
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

      <Link href="#test-id">Open Modal</Link>
    </>
  );
}
