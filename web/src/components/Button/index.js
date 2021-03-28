import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const ButtonDefault = styled.button`
  
`;


export default function Button({text, alt, href, type, ...props }) {
  const [variavelEstado, setVariavelEstado] = useState("inicial");
  const [infoAtivo, setInfoAtivo] = useState("inativo");
  const [outraVariavelEstado, setOutraVariavelEstado] = useState("outra");

  const linkTo = (e, href, router) => {
    e.preventDefault()
    router.push(href)
  }

  const router = useRouter()

  if (type = 'link') {
    return (
      <>
        <ButtonDefault alt={alt} onClick={(e) => linkTo(e, href, router)} className={infoAtivo} href={href}>{text}</ButtonDefault>
      </>
    );
  }
  return;
}