import styled from 'styled-components';

// Inputs: text, search, etc
// Icone (opcional)

const InputDefault = styled.input`
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
    :placeholder{
      opacity:0.5;
    };
  }
  &:disabled {
    background-color: #979797;
    cursor: not-allowed;
  }
`;

export default function Input({ placeholder, imgUrl, type,  ...props }) {
  return(
  <>
  <div>
  <InputDefault placeholder={placeholder} type={type}>
  </InputDefault>
   <img src="" alt="teste"></img>
  </div>
  </>
  );
}