import styled from 'styled-components';


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
  text-transform: uppercase;
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

export default function Input({ placeholder, imgUrl, type,  ...props }) {
  return(
  <>
  <div className="input-container">
  <InputDefault placeholder={placeholder} type={type}>
  </InputDefault>
  <img className="teste" src={imgUrl}></img>
</div>
  </>
  );
}