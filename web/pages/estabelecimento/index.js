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
import { faEnvelopeOpen, faStar, faUmbrellaBeach, faUser } from '@fortawesome/free-solid-svg-icons';
import { consultarLocal } from '../../src/services/methods/partnerServices';
import Cookies from 'js-cookie';


  const estabelecimentos = [{
    id: '1',
    nome: 'Hotel a',
    rating: '4,5',
    img: ['https://picsum.photos/500/300', 'https://picsum.photos/500/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300'],
    atributos: ['Acessivel para pessoas com deficência motora',
    'Acessivel para pessoas com deficência visual']
  }, 
  {
    id: '2',
    nome: 'Hotel b',
    rating: '4,5',
    img: ['https://picsum.photos/500/300', 'https://picsum.photos/500/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300'],
    atributos: ['Acessivel para pessoas com deficência motora',
    'Acessivel para pessoas com deficência visual']
  }, 
  {
    id: '3',
    nome: 'Hotel c',
    rating: '4,5',
    img: ['https://picsum.photos/500/300', 'https://picsum.photos/500/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300']
  }, 
  {
    id: '4',
    nome: 'Hotel d',
    rating: '4,5',
    img: ['https://picsum.photos/500/300', 'https://picsum.photos/500/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300']
  }, 
];

library.add(
  faEnvelopeOpen,
  faStar,
  faUser,
  faUmbrellaBeach
  // more icons go here
);

function getSession(){
  return Cookies.get("idLocal");
}

export default function Estabelecimento() {
  let obj = null;

  useEffect(()=>{
    obj = consultarLocal(getSession());
  },[])

  let imgArray =  ['/restaurante.jpg'];
  let mapsLink = `https://maps.google.com/maps?q=35.856737, 10.606619&z=15&output=embed`;

  let idEstabelecimento = Cookies.get('idEstabelecimento');
  let objEstabelecimento = {};

  for(let i = 0; i < estabelecimentos.length; i++ ){
    if(idEstabelecimento = estabelecimentos[i].id){
        objEstabelecimento = estabelecimentos[i];
        console.log('t');
    }
  }
  return (
    <>
  
    <div class="padding-bottom">

    <Galeria imgArray={imgArray}></Galeria>
    <div className="nome-cliente prestador-titulo">
         <h2>Restaurante sabor de São Paulo</h2>
         <div className="rating">
              4,9
              <FontAwesomeIcon icon={faStar} style={{color: 'red'}} />
         </div>
    </div>
  
    <IconeTexto icone={faUser} text="Acessivel para pessoas com deficiência visual"></IconeTexto>

    <IconeTexto icone={faUser} text="Acessivel para pessoas com deficiência motora"></IconeTexto>





    <div className="button-container">
         <Button type="link" text="Fazer reserva" href="/checkout?="></Button>
    </div>
    </div>

    <Navbar></Navbar>

    </>
  );
}