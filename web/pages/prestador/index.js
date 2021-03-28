/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import db from '../../db.json';
import Button from '../../src/components/Button';
import Galeria from '../../src/components/Galeria';
import IconeTexto from '../../src/components/IconeETexto';
import Navbar from '../../src/components/Navbar';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen, faHighlighter, faStar } from '@fortawesome/free-solid-svg-icons';

library.add(
  faEnvelopeOpen,
  faStar
  // more icons go here
);







export default function Prestador() {
  
  let imgArray =  ['https://picsum.photos/500/300', 'https://picsum.photos/500/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300'];
  let mapsLink = `https://maps.google.com/maps?q=35.856737, 10.606619&z=15&output=embed`;
  
  return (
    <>
  
    
    <Galeria imgArray={imgArray}></Galeria>
    <div className="nome-cliente prestador-titulo">
         <h2>João da silva sauro</h2>
         <div className="rating">
              4,0
              <FontAwesomeIcon icon={faStar} style={{color: 'red'}} />
         </div>
    </div>

    <Navbar></Navbar>
    <IconeTexto icone={faEnvelopeOpen} text="Atributo de teste"></IconeTexto>
    <div className="button-container">
         <Button type="link" text="Contratar" href="/checkout?="></Button>
    </div>


    </>
  );
}