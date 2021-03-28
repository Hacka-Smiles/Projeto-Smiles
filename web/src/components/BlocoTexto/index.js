import styled from 'styled-components';
import Button from '../Button';

// Titulo e subtitulo (opcional)
const BlocoTextoDefault = styled.div`
    width: ${(props) => props.width};
    display: flex;
    justify-content:center;
    flex-direction:column;
    text-align:left;
`;
BlocoTextoDefault.Container = styled.div`
  width: 900px;
`;

export default BlocoTextoDefault;
