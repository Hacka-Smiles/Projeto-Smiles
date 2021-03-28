import styled from 'styled-components';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen, faHighlighter } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';
import Input from '../Input';

library.add(
  faEnvelopeOpen 
  // more icons go here
);

const IconeETexto = styled.button`
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
`;

export default function Formulario({campos,titulo, ...props }) {
  return(
    <>
        <h2 className="nome-cliente">
          {titulo}
        </h2>
        {campos.map((campo) => (
              <Input placeholder={campo.placeholder} type={campo.type} icone={campo.icone}></Input>
      ))}
    </>
  );
}