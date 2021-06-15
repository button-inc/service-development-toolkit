import styled from 'styled-components';
import Card from '@button-inc/component-library/Card';
import BCGovTypography from '../../components/BCGovTypography';

const Container = styled.div`
  padding: 1rem;
`;

export default function CardPage() {
  return (
    <Container>
      <BCGovTypography />
      <Card>
        <Card.Header>Title</Card.Header>
        <Card.Content>Contents</Card.Content>
      </Card>
    </Container>
  );
}
