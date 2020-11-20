import styled from 'styled-components'
import Button from 'component-library/Button'
import Button2 from 'component-library-gov/Button'

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

export default function Home() {
  return <>
    <Title>My page</Title>
    <Button primary>Click!</Button>
    <Button2 primary>Click!</Button2>
    </>
}
