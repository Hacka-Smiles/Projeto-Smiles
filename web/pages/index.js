import styled from 'styled-components'
import Button from '../src/components/Banner'
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
      <Button text="enviar" href="/checkout" type="link"></Button>
      <Input imgUrl="https://picsum.photos/200" placeholder="Digite o seu e-mail" type="text"/>
      <Input imgUrl="https://picsum.photos/200" placeholder="Digite o seu e-mail" type="text"/>
    </>
  );

}
