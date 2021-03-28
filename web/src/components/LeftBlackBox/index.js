import styled from 'styled-components';
import Button from '../../../src/components/Button';

// Titulo e subtitulo (opcional)
const BannerDefault = styled(BannerDefault)`
  .container {
    position: relative;
    width: 30%;
    height: auto;

    &__box{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      padding-left: 30px;
      background: black;
      top: 0;
      left: 0;
    }
    &__buttons {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    h1, h2 {
      color: white;
    }
    h1 {
      font-size: 60px;
      font-weight: bold;
    }
    h2 {
      font-size: 25px;
    }
  }
`;

export default function Banner({img_src, width, height, title, subtitle, button1_href, button2_href}) {
  return (
    <>
    <BannerDefault>
      {/* <img src={img_src} width={width} height={height}/> */}
      <div className="container">
        <div className="container__box">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <div className="container__buttons"> 
            <Button href="/entrar" type="link">oi</Button>
            <Button href="/cadastrar" type="link">oi</Button>
          </div>
        </div>
        <img src={img_src} />
      </div>
    </BannerDefault>
    </>
  );
}
