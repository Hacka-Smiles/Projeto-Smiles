/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import db from '../../db.json';
import Button from '../../src/components/Button';
import api from "../../src/services/api";

export default function Cadastrar() {
  
  async function createUser(){
    const data = new FormData();

    data.append("", );
    data.append("", );

    await api.post('/', data);
  }

  return (
    <ThemeProvider theme={db.theme}>
      {/* <QuizScreen
        externalQuestions={db.questions}
        externalBg={db.bg}
      /> */}
      <Button>Cadastrar</Button>
    </ThemeProvider>
  );
}