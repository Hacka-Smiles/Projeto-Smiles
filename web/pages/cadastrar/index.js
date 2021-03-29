/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import db from "../../db.json";
import Button from "../../src/components/Button";

import Input from '../../src/components/Input';
import styled from 'styled-components'

import IconeTexto from '../../src/components/IconeETexto';
import { faEnvelopeOpen, faLock } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../../src/components/Navbar';

export default function Cadastrar() {
  // const [userName, setUsername] = useState("");
  // const [usuario, setUsuario] = useState("");
  // const [senha, setSenha] = useState("");
  // const [flowid, setFlowid] = useState("");

  const obj = {
    idCliente: "123",
    token: "NuT5pwsVtfkT1zNeadcQmtfZim-PuMGm"
  };

  return (
      <>
      <div  className="capa-login">
          <img src="capa-login.jpg"></img>
          <h3>NomeDaEmpresa</h3>
          <h4>Slogan da emppresa</h4>
      </div>
        <div className="form-container">
        <Input icone={faEnvelopeOpen} placeholder="Digite aqui o seu nome" type="text"/>
        <Input icone={faEnvelopeOpen} placeholder="Digite aqui a sua idade" type="text"/>
        <Input icone={faEnvelopeOpen} placeholder="Digite aqui o seu CPF" type="text"/>
        <Input icone={faEnvelopeOpen} placeholder="Digite aqui o seu e-mail" type="text"/>
        <Input icone={faLock} placeholder="Digite aqui a sua senha" type="text"/>
        <div class="custom-select" style="width:200px;">
            <select>
              <option value="0">Select car:</option>
              <option value="1">Audi</option>
              <option value="2">BMW</option>
              <option value="3">Citroen</option>
              <option value="4">Ford</option>
              <option value="5">Honda</option>
              <option value="6">Jaguar</option>
              <option value="7">Land Rover</option>
              <option value="8">Mercedes</option>
              <option value="9">Mini</option>
              <option value="10">Nissan</option>
              <option value="11">Toyota</option>
              <option value="12">Volvo</option>
          </select>
</div>



        <Input icone={faLock} placeholder="Digite aqui a sua senha novamente" type="password"/>

        </div>
        <div className="button-container">
        <Button text="enviar" href="/checkout" type="link"></Button>      
        </div>
      </>
  );
}
