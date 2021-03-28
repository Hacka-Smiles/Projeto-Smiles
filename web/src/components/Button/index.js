import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import servicosParaCliente from '../../services/clientServices';

const ButtonDefault = styled.button`
  
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
    console.log(obj.userName);
    console.log(obj.usuario);
    console.log(obj.senha);
    console.log(obj.flowid);

    var result = await cliente.getLoginAPI(cliente);

    console.log(result);

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