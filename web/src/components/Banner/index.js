import styled from 'styled-components';
import db from '../../../db.json';

// Titulo e subtitulo (opcional)
const BannerDefault = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.contrastText};
  border-radius: ${({ theme }) => theme.borderRadius};
 
`;

export default function Banner() {
  return (
    <>
    <Default>
      <h1>{db.title}</h1>
      <h2>{db.subtitle}</h2>
      <Button href="/checkout" type="link">oi</Button>
    </Default>
    </>
  );
}
