/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import Button from "../../src/components/Button";
import Input from "../../src/components/Input";
import styled from "styled-components";
import Cookies from 'js-cookie';

import IconeTexto from "../../src/components/IconeETexto";
import { faEnvelopeOpen, faLock } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../src/components/Navbar";
const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

function setSession(chave, valor){
  Cookies.set("idCliente","")
}

export default function Entrar() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <>
      <div className="capa-login">
        <img src="capa-login.jpg"></img>
        <h3>NomeDaEmpresa</h3>
        <h4>Slogan da emppresa</h4>
      </div>
      <div className="form-container">
        <Input
          icone={faEnvelopeOpen}
          placeholder="Digite aqui o seu e-mail"
          onChange={(event) => setEmail(event.target.value)}
          type="text"
          id="email"
          value={email}
        />
        <Input
          icone={faLock}
          placeholder="Digite aqui a sua senha"
          onChange={(event) => setSenha(event.target.value)}
          type="password"
          id="senha"
          value={senha}
        />
      </div>
      <div className="button-container">
        <Button text="enviar" href="/navegar" type="login" params={{idCliente:Cookies.get("idCliente"),usuario:email,senha:senha}}></Button>
      </div>
    </>
  );
}
