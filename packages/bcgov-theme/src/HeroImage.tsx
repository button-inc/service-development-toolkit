import React from 'react';
import styled from 'styled-components';

type Props = {
  url?: string;
  children?: React.ReactNode;
  [key: string]: any;
};

const Container = styled.div`
  background-image: url(${(props: Props) => props.url});
  background-size: cover;
  padding: 2rem 4rem;
  border: 1px solid #707070;
`;

const InnerContainer = styled.div`
  background: rgba(0, 51, 102, 0.8);
  padding: 1rem 2rem;
  color: #fff;

  & a {
    color: #fff;
  }
`;

export default function Component(props: Props) {
  const { url, children, ...rest } = props;

  return (
    <Container {...rest} url={url}>
      <InnerContainer>{children}</InnerContainer>
    </Container>
  );
}
