import styled from 'styled-components';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen, faHighlighter } from '@fortawesome/free-solid-svg-icons';

library.add(
  faEnvelopeOpen 
  // more icons go here
);

// Inputs: text, search, etc
// Icone (opcional)

const InputDefault = styled.input`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.contrastText};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  width: 100%;
  padding: 10px 16px;
  font-weight: bold;
  font-size: 14px;
  line-height: 1;
  outline: 0;
  transition: .3s;
  cursor: pointer;
  &:hover,
  &:focus {
  opacity:0.8
  }
  &:disabled {
    background-color: #979797;
    cursor: not-allowed;
  }
`;

export default function Input({ placeholder, icone, type,  ...props }) {
  return(
  <>
  <div className="input-container">
  <InputDefault placeholder={placeholder} type={type}>
  </InputDefault>
  <FontAwesomeIcon icon={icone} style={{color: 'red'}} />
</div>
  </>
  );
}