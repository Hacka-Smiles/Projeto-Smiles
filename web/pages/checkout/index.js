/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import db from '../../db.json';
import Button from '../../src/components/Button';

export default function Checkout() {
  let titulo = 'Nome do hotel';
  let descricao = 'descricao do hotel';
  let preco = 'R$500,00';
  let img = 'https://picsum.photos/500/300';
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
        <Button type="link" text="Comprar" href="/sucessoCompra"></Button>
      </div>
    </div>
    </div>
    </>
  );
}