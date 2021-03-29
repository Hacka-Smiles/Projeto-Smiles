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
    margin: 0px 0 20px;
  }
  strong {
    font-weight: bold;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .margin-0-auto {
    margin: 0 auto;
  }

  .d-flex {
    display: flex;
  }
  .justify-content-center {
    justify-content:center;
  }
  .align-items-center {
    align-items:center;
  }
  .justify-flex-start-mobile {
    @media(max-width: 768px) {
      justify-content:flex-start;
    }
  }
  .flex-direction-column{
    flex-direction:column;
  }
  .flex-direction-column-small-size{
    @media(max-width: 1000px) {
      flex-direction:column;
    }
  }
  .text-center {
    text-align:center;
  }
  .bg-dark-gray{
    background-color: #090909;
  }
  .p-30 {
    padding: 30px;
  }
  .width-50percent{
    width: 50%;
  }
  .mt-30{
    margin-top:30px;
  }



  .carousel {
    img {
    width: 100%;
    height: auto;
    }
    .slide {
      height: 400px;
      max-width: 300px;
      .legend {
        opacity: 0.85;
      }
    }
  }
  .rmsc {
    --rmsc-gray: white !important;
    --rmsc-bg: ${({ theme }) => theme.bg} !important;
    --rmsc-selected: black !important;
    --rmsc-main: yellow !important;
    --rmsc-hover: black !important;
    --rmsc-border: green !important;
    --rmsc-p: 10px !important; /* Spacing */
    --rmsc-radius: 15px !important; /* Radius */
    --rmsc-h: 38px !important; /* Height */
  }
  .dropdown-container {
    width: 420px;
    background-color: transparent !important;
    color: ${({ theme }) => theme.colors.white} !important;
    border-radius: ${({ theme }) => theme.borderRadius} !important;
    border: 2px solid ${({ theme }) => theme.colors.primary} !important;
  }
`;

const { theme } = db;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
        <link href="/css/join.css" rel="stylesheet" />
    

      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* GlobalStyle dentro do theme para que o db json seja lido em todos os componentes */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}