import styled from 'styled-components';
import Button from '../src/components/Button'
import Link from '../src/components/Link';
const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return (
    <>
      <Title>My page</Title>
      <Button url="/checkout">oi</Button>
    </>
  );
}
