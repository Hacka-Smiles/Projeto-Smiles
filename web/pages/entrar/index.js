/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from '../../src/components/Button';
import Input from '../../src/components/Input';
import styled from 'styled-components'

import IconeTexto from '../../src/components/IconeETexto';
const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Entrar() {

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