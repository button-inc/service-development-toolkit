import styled from 'styled-components';
import Modal from '@button-inc/component-library/Modal';

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
