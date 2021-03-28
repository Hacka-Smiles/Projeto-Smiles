/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import db from '../../db.json';
import Button from '../../src/components/Button';
import Banner from '../../src/components/Banner';

export default function Navegar() {
  return (
    <ThemeProvider theme={db.theme}>
      {/* <QuizScreen
        externalQuestions={db.questions}
        externalBg={db.bg}
      /> */}
      {/* <Banner img={""}></Banner> */}
      <Button>Login</Button>
    </ThemeProvider>
  );
}