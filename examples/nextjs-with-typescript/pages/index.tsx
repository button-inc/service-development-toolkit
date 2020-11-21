import styled from 'styled-components'
import Button2 from 'component-library-gov/Button'
import Input from 'component-library-gov/Input'

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

export default function Home() {
  return <>
    <Title>My page</Title>
    <form action="">
      <Input large placeholder="placeholder" required type="email"></Input>
      <Button2 large primary type="submit">Click!</Button2>
    </form>
    </>
}
