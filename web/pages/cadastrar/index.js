/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import db from "../../db.json";
import Button from "../../src/components/Button";

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
    <ThemeProvider theme={db.theme}>
      <Button type="postClient" params={obj} href="/checkout"/>
    </ThemeProvider>
  );
}
