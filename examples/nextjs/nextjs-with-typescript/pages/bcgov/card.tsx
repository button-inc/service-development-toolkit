import styled from 'styled-components';
import Card from '@button-inc/bcgov-theme/Card';
import Link from '@button-inc/bcgov-theme/Link';
import Button from '@button-inc/bcgov-theme/Button';
import BCGovTypography from '../../components/BCGovTypography';

const Container = styled.div`
  padding: 1rem;
`;

export default function CardPage() {
  return (
    <Container>
      <BCGovTypography />
      <Card title="Online Registration">
        If you'd like to register online please ensure that you have the{' '}
        <Link href="#link1" content="supporting documents" /> available
        <br /> <br />
        <Button>Click here to register</Button>
        <br /> <br />
        <Link href="#link1">
          Already registered? Click here to <strong>login</strong>
        </Link>
      </Card>
    </Container>
  );
}
