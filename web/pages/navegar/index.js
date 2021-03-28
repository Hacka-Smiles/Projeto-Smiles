/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import db from '../../db.json';
import Button from '../../src/components/Button';
import Banner from '../../src/components/Banner';


export default function Navegar() {
  return (
    <ThemeProvider theme={db.theme}>
      <Banner img_src="/bannerum.jpg" width="100%" height="auto"></Banner>
      {/* <Button type="link">Login</Button> */}
    </ThemeProvider>
  );
}