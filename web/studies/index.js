import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Link from '../Link';
import { useRouter } from 'next/router';

const ButtonDefault = styled.button `
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.contrastText};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 0;
  width: 100%;
  padding: 10px 16px;
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


export default function Button({alt, url, ...props}) {
    const [variavelEstado, setVariavelEstado] = useState("inicial");
    const [infoAtivo, setInfoAtivo] = useState("inativo");
    const [outraVariavelEstado, setOutraVariavelEstado] = useState("outra");
    
    useEffect(() => {
        setVariavelEstado("renderizou uma unica vez")
    }, []);

    useEffect(() => {
        setVariavelEstado("renderizou depois que o variavelEstado mudou")

    }, [variavelEstado]);

    // function handleClick() {
    //     setInfoAtivo("ativo");
    // }
    const router = useRouter()
    const handleClick = (e) => {
      e.preventDefault()
      router.push(url)
    }
    return (
       <>
            <ButtonDefault alt={alt} onClick={(e) => handleClick(e)} className={infoAtivo} url={url}>testando</ButtonDefault>
            {/* <ButtonDefault alt={alt} >testando</ButtonDefault> */}
            {/* <p>{variavelEstado}</p> */}
            {/* <p>{infoAtivo}</p> */}
            {/* <Link href="/checkout"/> */}
       </>
    );
}