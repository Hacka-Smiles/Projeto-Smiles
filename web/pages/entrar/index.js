/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import db from '../../db.json';
import Button from '../../src/components/Button';

export default function Entrar() {
  return (
    <ThemeProvider theme={db.theme}>
      {/* <QuizScreen
        externalQuestions={db.questions}
        externalBg={db.bg}
      /> */}
      <Button>Login</Button>
    </ThemeProvider>
  );
}