import styled from 'styled-components';
import Button from '../src/components/Button'
import Input from '../src/components/Input'

import { useRouter } from 'next/router';
const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {

  return (
    <>
      <Title>My page</Title>
      <Button text="enviar" href="/checkout" type="link">oi</Button>
      <Input placeholder="Digite o seu e-mail" type="text"/>
    </>
  );
}
