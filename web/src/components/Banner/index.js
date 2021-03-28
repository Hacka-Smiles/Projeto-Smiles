import styled from 'styled-components';
import Button from '../../../src/components/Button';

// Titulo e subtitulo (opcional)
const BannerDefault = styled.div`
margin-top: 10px;
  .container {
    position: relative;
    width: 30%;
    height: auto;

    &__box{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      content: "";
      position: absolute;
      width: 100%;
      height: 99%;
      padding: 0 20px 0 40px;
      background: black;
      top: 0px;
      left: 0;
    }
    &__buttons {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      button {
        min-width: 150px;
        padding: 10px 10px;
        margin-top: 15px;
      }
    }
    h1, h2 {
      color: white;
    }
    h1 {
      font-size: 40px;
      font-weight: bold;
    }
    h2 {
      font-size: 15px;
    }

    img {
      /* max-width: 300px; */
    }
  }
`;




export default function Banner({img_src, img_alt, img_title, width, height, title, subtitle, button1_href, button2_href, button1_text, button2_text}) {
  return (
    <>
    <BannerDefault >
      {/* <img src={img_src} width={width} height={height}/> */}
      <div className="container">
        <div className="container__box">
          <h1>{title !== undefined ? title : null}</h1>
          <h2>{subtitle !== undefined ? subtitle : null}</h2>
          <div className="container__buttons"> 
          { button1_href !== undefined && button1_text !== undefined ? <Button href={button1_href} type="link" text={button1_text}/> : null}
          { button2_href !== undefined && button2_text !== undefined ? <Button href={button2_href} type="link" text={button2_text}/> : null}
          </div>
        </div>
        <img src={img_src} width={width} height={height} img_alt={img_alt} img_title={img_title}/>
      </div>
    </BannerDefault>
    </>
  );
}
