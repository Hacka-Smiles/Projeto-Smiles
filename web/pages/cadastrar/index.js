/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import db from "../../db.json";
import Button from "../../src/components/Button";

import Input from "../../src/components/Input";
import styled from "styled-components";

import IconeTexto from "../../src/components/IconeETexto";
import { faEnvelopeOpen, faLock } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../src/components/Navbar";

export default function Cadastrar() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [cpf, setCpf] = useState("");
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
          onChange={(event) => setNome(event.target.value)}
          placeholder="Digite aqui o seu nome"
          type="text"
          id="nome"
          value={nome}
        />
        <Input
          icone={faEnvelopeOpen}
          onChange={(event) => setIdade(event.target.value)}
          placeholder="Digite aqui a sua idade"
          type="text"
          id="idade"
          value={idade}
        />
        <Input
          icone={faEnvelopeOpen}
          onChange={(event) => setCpf(event.target.value)}
          placeholder="Digite aqui o seu CPF"
          type="text"
          id="cpf"
          value={cpf}
        />
        <Input
          icone={faEnvelopeOpen}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Digite aqui o seu e-mail"
          type="text"
          id="email"
          value={email}
        />
        <Input
          icone={faLock}
          onChange={(event) => setSenha(event.target.value)}
          placeholder="Digite aqui a sua senha"
          type="password"
          id="senha"
          value={senha}
        />

        <Input
          icone={faLock}
          placeholder="Digite aqui a sua senha novamente"
          type="password"
        />
      </div>
      <div className="button-container">
        <Button text="enviar" href="/" type="postClient" params={{nome:nome,idade:idade,cpf:cpf,email:email,senha:senha}}/>
      </div>
    </>
  );
}
