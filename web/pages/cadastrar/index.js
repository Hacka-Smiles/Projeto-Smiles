/* eslint-disable react/prop-types */
import React, {useState, useEffect} from "react";
import { ThemeProvider } from "styled-components";
import db from "../../db.json";
import Button from "../../src/components/Button";
import api from "../../src/services/api";

export default function Cadastrar() {
  // const [userName, setUsername] = useState("");
  // const [usuario, setUsuario] = useState("");
  // const [senha, setSenha] = useState("");
  // const [flowid, setFlowid] = useState("");

  /// FIXO PARA TESTES ///
  const userName = "Robertinho";
  const usuario = "noia123";
  const senha = "123";
  const flowid = "12345";
  ///////////////////////

  useEffect(() => {
    async function RoleTesteApi() {
      console.log("Estabelecendo conexão com o servidor...");

      await api
        .get(
          `https://projeto-smiles.herokuapp.com/login/${userName}?usuario=${usuario}&senha=${senha}&flowid=${flowid}`
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    RoleTesteApi();
  }, []);

  return (
    <ThemeProvider theme={db.theme}>
      {/* <QuizScreen
        externalQuestions={db.questions}
        externalBg={db.bg}
      /> */}
      <Button/>
    </ThemeProvider>
  );
}
