import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const ButtonDefault = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 0;
  padding: 18px 20px;
  font-weight: bold;
  font-size: 14px;
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


export default function Button({ alt, href, type, ...props }) {
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
        <ButtonDefault alt={alt} onClick={(e) => linkTo(e, href, router)} className={infoAtivo} href={href}>testando</ButtonDefault>
      </>
    );
  }
  return;
}