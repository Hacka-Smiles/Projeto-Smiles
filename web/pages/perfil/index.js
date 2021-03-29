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
  let imgArray =  [''];

  return (
    <>
    <div class="button-container">

    <img className="width" src= "https://rciararaquara.com.br/wp-content/uploads/2019/12/deficiente.jpg"></img>
    </div>

    <div className="nome-cliente">
         <h2>Lucia dos Santos</h2>
    </div>

    <Navbar page="perfil"></Navbar>
    <IconeTexto icone={faEnvelopeOpen} text="Atributo de teste"></IconeTexto>

    <IconeTexto icone={faFlag} text="Brasil"></IconeTexto>


    <IconeTexto icone={faAccessibleIcon} text="Acessibilidade"></IconeTexto>





    </>
  );
}