import styled from 'styled-components';
import db from '../../../db.json';
import Button from '../../../src/components/Button';

// Titulo e subtitulo (opcional)
const BannerDefault = styled.div`
  position: relative;
  /* width: 100%; */
  &::after{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    /* background-color: #000; */
    background: linear-gradient(to right, black, transparent);
    /* opacity: 0.4; */
    top: 0;
    left: 0;
  }
  img {
    background-size: cover;
    /* position: absolute;
    top: 0;
    left: 0; */
  }
  h1 {
    position: absolute;
    top: 50%;
    color: white;
  }
`;

export default function Banner({img_src, width, height}) {
  return (
    <>
    <BannerDefault>
      {/* <img src={img_src} width={width} height={height}/> */}
      <img src={img_src} />
      <h1>{db.title}</h1>
      <h2>{db.subtitle}</h2>
      <Button href="/checkout" type="link">oi</Button>
    </BannerDefault>
    </>
  );
}
