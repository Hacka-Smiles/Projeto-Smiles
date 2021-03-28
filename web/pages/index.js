import styled from 'styled-components'
import Button from '../src/components/Button'
import Input from '../src/components/Input'



import { useRouter } from 'next/router';
import IconeTexto from '../src/components/IconeETexto';
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

      <IconeTexto text="Texto de testezi" urlImg="https://picsum.photos/id/237/200/300"></IconeTexto>
    </>
  );

}
