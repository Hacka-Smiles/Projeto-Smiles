import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import servicosParaCliente from '../../services/clientServices';

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
  transition: .3s;
  margin-top: 25px;
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: .5;
  }
  &:disabled {
    background-color: #979797;
    cursor: not-allowed;
  }
  &.ativo {
      background-color: black;
  }
`;


export default function Button({text, alt, href, type, params, ...props }) {
  const [variavelEstado, setVariavelEstado] = useState("inicial");
  const [infoAtivo, setInfoAtivo] = useState("inativo");
  const [outraVariavelEstado, setOutraVariavelEstado] = useState("outra");

  const linkTo = (e, href, router) => {
    e.preventDefault()
    router.push(href)
  }

  const router = useRouter()

  async function postClient(e, obj, href){
    e.preventDefault();
    var cliente = new servicosParaCliente(obj.userName, obj.usuario, obj.senha, obj.flowid);
    
    // -> MUDAR METODO DO CLIENTE PARA POSTCLIENT <- //
    var result = await cliente.getClientAPI(cliente);
    //////////////////////////////////////////////////

    if(result === 200){
      router.push(href);
    }
  }

  if (type == 'link') {
    return (
      <>
        <ButtonDefault alt={alt} onClick={(e) => linkTo(e, href, router)} className={infoAtivo} href={href}>{text}</ButtonDefault>
      </>
    );
  } else if(type == 'postClient'){
    return (
      <>
        <ButtonDefault alt={alt} onClick={(e) => postClient(e, params, href)} className={infoAtivo} href={href}>{text}</ButtonDefault>
      </>
    );
  }
  return;
}