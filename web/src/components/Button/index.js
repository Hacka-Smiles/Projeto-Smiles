import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  iniciarSessaoAPI,
  verificarSessao,
  cadastrarLogin
} from "../../services/methods/authenticationServices";
import { cadastrarCliente, consultarClientId } from "../../services/methods/clientServices";

const ButtonDefault = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 0;
  padding: 18px 70px;
  font-weight: bold;
  font-size: 17px;
  line-height: 1;
  text-transform: uppercase;
  outline: 0;
  transition: 0.3s;
  margin-top: 25px;
  border: 1px solid white;
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: 0.5;
  }
  &:disabled {
    background-color: #979797;
    cursor: not-allowed;
  }
  &.ativo {
    background-color: black;
  }
`;

export default function Button({ text, alt, href, type, params, ...props }) {
  const [variavelEstado, setVariavelEstado] = useState("inicial");
  const [infoAtivo, setInfoAtivo] = useState("inativo");
  const [outraVariavelEstado, setOutraVariavelEstado] = useState("outra");

  const linkTo = (e, href, router) => {
    e.preventDefault();
    router.push(href);
  };

  const router = useRouter();

  const postClient = async (e, obj, href) => {
    e.preventDefault();
    console.log(obj);
    obj.idCliente = "";
    var result_0 = await cadastrarLogin(obj);
    obj.idCliente = result_0.idCliente;
    var result = await cadastrarCliente(obj);

    if (result === 200) {
      router.push(href);
    }
  }

  const loginClient = async (e,obj,href) => {
    e.preventDefault();
    console.log(obj);
    await consultarClientId(obj);
    var result = await iniciarSessaoAPI(obj);

    if (result === 200) {
      router.push(href);
    }
  }

  if (type == "link") {
    return (
      <>
        <ButtonDefault
          alt={alt}
          onClick={(e) => linkTo(e, href, router)}
          className={infoAtivo}
          href={href}
        >
          {text}
        </ButtonDefault>
      </>
    );
  } else if (type == "postClient") {
    return (
      <>
        <ButtonDefault
          alt={alt}
          onClick={(e) => postClient(e, params, href)}
          className={infoAtivo}
          href={href}
        >
          {text}
        </ButtonDefault>
      </>
    );
  } else if(type == "login"){
    return (
      <>
        <ButtonDefault
          alt={alt}
          onClick={(e) => loginClient(e, params, href)}
          className={infoAtivo}
          href={href}
        >
          {text}
        </ButtonDefault>
      </>
    );
  }

  return;
}
