import styled from 'styled-components';
import Card from '@button-inc/component-library/Card';
import Datepicker from '@button-inc/component-library/DatePicker';
import FilePicker from '@button-inc/component-library/FilePicker';
import Modal from '@button-inc/component-library/Modal';
import Menu from '@button-inc/component-library/Menu';
import Footer from '@button-inc/component-library/Footer';
import BCGovTypography from '../../components/BCGovTypography';

const Container = styled.div`
  padding: 1rem;
`;

export default function CardPage() {
  return (
    <Container>
      <Modal id="test">
        <Modal.Header>Title</Modal.Header>
        <Modal.Close>Close me</Modal.Close>
        <Modal.Content>Content</Modal.Content>
      </Modal>
      <a href="#test">Open</a>
    </Container>
  );
}
