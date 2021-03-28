/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import db from '../../db.json';
import Button from '../../src/components/Button';
import Navbar from '../../src/components/Navbar';
import Galeria from '../../src/components/Galeria';


export default function Perfil() {
  let imgArray =  ['https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300'];

  return (
    <>
    <Galeria imgArray={imgArray}></Galeria>
    <Navbar page="perfil"></Navbar>
    </>
  );
}