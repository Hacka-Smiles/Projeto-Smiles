/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import db from '../../db.json';
import Button from '../../src/components/Button';
import Formulario from '../../src/components/Formulario';
import { faEnvelopeOpen, faHighlighter } from '@fortawesome/free-solid-svg-icons';


export default function Preferencias() {
  let form1 = [
    {placeholder: 'Digite aqui o seu nome', type: 'text', icone: faEnvelopeOpen },
    {placeholder: 'Digite aqui o seu endereço', type: 'text', icone: faEnvelopeOpen},
    {placeholder: 'Digite aqui o seu campo teste', type: 'text', icone: faEnvelopeOpen},
    {placeholder: 'Digite aqui o seu campo tes4', type: 'text', icone: faEnvelopeOpen}
  ]
  return (
    <>
      <Formulario titulo="Informações pessoais" campos={form1}>
      </Formulario>

      <Formulario titulo="Preferencias de viagem" campos={form1}>
      </Formulario>
      <div className="button-container">
      <Button type="link" text="Enviar"></Button>
      </div>


    </>
  );
}