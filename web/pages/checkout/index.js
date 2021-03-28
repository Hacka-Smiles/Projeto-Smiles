/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import db from '../../db.json';

export default function Checkout() {
  return (
    <ThemeProvider theme={db.theme}>
      {/* <QuizScreen
        externalQuestions={db.questions}
        externalBg={db.bg}
      /> */}
    </ThemeProvider>
  );
}