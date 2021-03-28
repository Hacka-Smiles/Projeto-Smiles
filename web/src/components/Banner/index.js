import styled from 'styled-components';
import Button from '../../../src/components/Button';

// Titulo e subtitulo (opcional)
const BannerDefault = styled.div`
  max-width: ${(props) => props.width};
  @media(max-width: 768px) {
    flex-direction: column;
  }
  .container {
    position: relative;
    /* width: 30%; */
    /* width: 100%; */
    max-width: 100%;
    height: auto;
    display: flex;
    flex-direction: ${(props) => props.orientation};

    @media(max-width: 768px) {
      flex-direction: column;
    }

    &__margin {
      margin: 0 20px 10px 20px;
      @media(max-width: 768px) {
        display:flex;
        flex-direction: column;
        margin: 0 auto;
        width: 600px;
      }
    }
    &__box{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      content: "";
      /* position: absolute; */
      width: 100%;
      height: auto;
      padding: 0 20px 0 20px;
      background: black;
      top: 0px;
      left: 0;
    }
    &__buttons {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      @media(max-width: 768px) {
        flex-direction: row;
      }

      button {
        min-width: 220px;
        padding: 10px 10px;
        margin-top: 15px;

        @media(max-width: 768px) {
          margin: 30px 30px 30px 0;
        }
      }
    }
    h1, h2 {
      color: white;
    }
    h1 {
      font-size: 40px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    h2 {
      font-size: 15px;
    }

    img {
      object-fit: cover;
      width: auto;
      max-width: 100%;
    }
  }
`;




export default function Banner({
  img_src, img_alt, img_title, img_width,
   width, height, 
   title, subtitle, 
   button1_href, button2_href, button1_text, button2_text, 
   orientation,
   ...props}) {
  return (
    <>
    <BannerDefault width={width} orientation={orientation}>
      <div className="container">
        <div className="container__box">
          <div className="container__margin">
            <div>
              <h1>{title !== undefined ? title : null}</h1>
              <h2>{subtitle !== undefined ? subtitle : null}</h2>
            </div>
            <div className="container__buttons"> 
            { button1_href !== undefined && button1_text !== undefined ? <Button href={button1_href} type="link" text={button1_text}/> : null}
            { button2_href !== undefined && button2_text !== undefined ? <Button href={button2_href} type="link" text={button2_text}/> : null}
            </div>
          </div>
        </div>
        <img src={img_src} width={img_width} height={height} img_alt={img_alt} img_title={img_title}/>
      </div>
    </BannerDefault>
    </>
  );
}
