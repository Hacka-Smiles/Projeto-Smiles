import styled from 'styled-components'

import { useRouter } from 'next/router';
const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
<<<<<<< HEAD

  return (
    <>
      <Title>My page</Title>
      <Button text="enviar" href="/checkout" type="link">oi</Button>
      <Input imgUrl="https://picsum.photos/200" placeholder="Digite o seu e-mail" type="text"/>
      <Input imgUrl="https://picsum.photos/200" placeholder="Digite o seu e-mail" type="text"/>

    </>
  );
=======
  return <Title>My page</Title>
>>>>>>> c8512e979747087cd98ed93a88f719724d7b8665
}
