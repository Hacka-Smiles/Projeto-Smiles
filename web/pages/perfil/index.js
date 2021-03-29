/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import db from '../../db.json';
import Button from '../../src/components/Button';
import Navbar from '../../src/components/Navbar';
import Galeria from '../../src/components/Galeria';
import IconeTexto from '../../src/components/IconeETexto';
import { faEnvelopeOpen, faFlag, faHighlighter, faUser } from '@fortawesome/free-solid-svg-icons';
import { faAccessibleIcon } from '@fortawesome/free-brands-svg-icons';




export default function Perfil() {
  let imgArray =  ['https://picsum.photos/500/300', 'https://picsum.photos/500/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300'];

  return (
    <>
    <Galeria imgArray={imgArray}></Galeria>
    <div className="nome-cliente">
         <h2>João da silva sauro</h2>
    </div>

    <Navbar page="perfil"></Navbar>
    <IconeTexto icone={faEnvelopeOpen} text="Atributo de teste"></IconeTexto>

    <IconeTexto icone={faFlag} text="Brasil"></IconeTexto>


    <IconeTexto icone={faAccessibleIcon} text="Acessibilidade"></IconeTexto>




    <div className="button-container">
      <Button type="link" text="Editar perfil" href="/preferencias"></Button>
    </div>
    </>
  );
}