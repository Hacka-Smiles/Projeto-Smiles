/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import db from '../../db.json';
import Button from '../../src/components/Button';
import Galeria from '../../src/components/Galeria';
import IconeTexto from '../../src/components/IconeETexto';
import Navbar from '../../src/components/Navbar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen, faStar } from '@fortawesome/free-solid-svg-icons';
import { consultarLocal } from '../../src/services/methods/partnerServices';
import Cookies from 'js-cookie';


library.add(
  faEnvelopeOpen,
  faStar
  // more icons go here
);

function getSession(){
  return Cookies.get("idLocal");
}

export default function Estabelecimento() {
  const obj = [];

  useEffect(()=>{
    obj = consultarLocal(getSession());
  },[])

  setSession('token','teste');
  
  let imgArray =  ['https://picsum.photos/500/300', 'https://picsum.photos/500/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300'];
  let mapsLink = `https://maps.google.com/maps?q=35.856737, 10.606619&z=15&output=embed`;

  return (
    <>
  
    
    <Galeria imgArray={imgArray}></Galeria>
    <div className="nome-cliente prestador-titulo">
         <h2>Hotel de tangamandápio</h2>
         <div className="rating">
              4,9
              <FontAwesomeIcon icon={faStar} style={{color: 'red'}} />
         </div>
    </div>

    <Navbar></Navbar>
    <IconeTexto icone={faEnvelopeOpen} text="Atributo de teste"></IconeTexto>
    <div className="button-container">
         <Button type="link" text="Fazer reserva" href="/checkout?="></Button>
    </div>


    </>
  );
}