import styled from 'styled-components';
import Button from '../src/components/Button'
import { useRouter } from 'next/router';
const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {

  return (
    <>
      <Title>My page</Title>
      <Button href="/checkout" type="link">oi</Button>
    </>
  );
}
