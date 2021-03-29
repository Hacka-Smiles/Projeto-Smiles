/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import db from '../../db.json';
import Button from '../../src/components/Button';

export default function Checkout() {
  let titulo = 'Restaurante sabor de SP';
  let descricao = 'loren ipsum loren ipsum loren ipsum loren ipsumloren ipsumloren ipsumloren ipsumloren ipsumloren ipsumloren ipsumloren ipsum';
  let preco = 'R$60,00 ou 4000 Smiles';
  let img = '/restaurante.jpg';
  return (
    <>
    <div className="padding-box">

    <div className="checkout-container">
      <div className="checkout-img-container">
        <img src={img}></img>
      </div>
      <h2>{titulo}</h2>
      <h4>{descricao}</h4>
      <div className="button-container">
      <span>{preco}</span>
      </div>
      <div className="button-container">
        <Button type="link" text="Comprar" href="/navegar"></Button>
      </div>
    </div>
    </div>
    </>
  );
}