/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import db from '../../db.json';
import Button from '../../src/components/Button';
import Galeria from '../../src/components/Galeria';
import IconeTexto from '../../src/components/IconeETexto';
import Navbar from '../../src/components/Navbar';
import { faEnvelopeOpen, faHighlighter } from '@fortawesome/free-solid-svg-icons';




export default function Estabelecimento() {
  
  let imgArray =  ['https://picsum.photos/500/300', 'https://picsum.photos/500/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300'];
  let mapsLink = `https://maps.google.com/maps?q=35.856737, 10.606619&z=15&output=embed`;
  
  return (
    <>
  
    
    <Galeria imgArray={imgArray}></Galeria>
    <div className="nome-cliente">
         <h2>Nome do Estabelecimento</h2>
    </div>

    <Navbar></Navbar>
    <IconeTexto icone={faEnvelopeOpen} text="Atributo de teste"></IconeTexto>
    <div className="button-container">
         <Button type="link" text="Fazer reserva" href="/checkout?="></Button>
    </div>


    </>
  );
}