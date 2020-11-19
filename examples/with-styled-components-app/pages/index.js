import styled from 'styled-components';
import ButtonGov from 'component-library-gov/lib/Button';
import Button from 'component-library/lib/Button';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  return (
    <>
      <Title>Nextjs Component Preview</Title>
      <Button primary>test</Button>
      <ButtonGov primary>test</ButtonGov>
    </>
  );
}
