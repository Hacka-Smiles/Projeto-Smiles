/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from '../../src/components/Button';
import Input from '../../src/components/Input';
import styled from 'styled-components'

import IconeTexto from '../../src/components/IconeETexto';
import { faEnvelopeOpen, faLock } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../../src/components/Navbar';
const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Entrar() {
  const obj = {
    userName: "Bobby",
    usuario: "Robertinho",
    senha: "123",
    flowid: "12345",
  };

  return (
    <>
    <div  className="capa-login">
        <img src="capa-login.jpg"></img>
        <h3>NomeDaEmpresa</h3>
        <h4>Slogan da emppresa</h4>
    </div>
      <div className="form-container">
      <Input icone={faEnvelopeOpen} placeholder="Digite aqui o seu e-mail" type="text"/>
      <Input icone={faLock} placeholder="Digite aqui a sua senha" type="password"/>
      </div>
      <div className="button-container">
      <Button text="enviar" href="/checkout" type="link"></Button>      
      </div>
    </>
  );

}