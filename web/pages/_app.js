import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  // Reset
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family: 'Lato, sans-serif';
    // Branco no começo
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.bg};
  }
  p {
    margin: 0px 0 10px;
  }
  /* h1 {
    font-size: 30px;
  } */
`;

const { theme } = db;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
        <link href="/css/join.css" rel="stylesheet" />
        <script>

    
</script>

      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* GlobalStyle dentro do theme para que o db json seja lido em todos os componentes */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}