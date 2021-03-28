import styled from 'styled-components'
import db from '../db.json';
import Banner from '../src/components/Banner';
import Container from '../src/components/Container';
import BlocoTexto from '../src/components/BlocoTexto';
import { useRouter } from 'next/router';

export default function Home() {
  const linkTo = (e, href, router) => {
    e.preventDefault()
    router.push(href)
  }

  const router = useRouter();

  return (
    <div className="margin-0-auto">
    <Container width_mobile={"max-content"}>
      <div className="d-flex justify-content-flex-start justify-flex-start-mobile bg-dark-gray">
        <Banner 
          img_src="/bannerum.jpg"
          img_alt="Banner principal"
          img_title="Banner principal" 
          img_width="600px" 
          height="auto" 
          title={db.title} 
          subtitle={db.description} 
          button1_text={"Entrar"}
          button1_href={"/entrar"}
          button2_text={"Cadastrar"}
          button2_href={"/preferencias"}
          orientation={"initial"}
          />
      </div>
    </Container>
    <Container width_mobile={"fit-content"}>
      {

        db.funcionalidades.map((funcionalidade) => {
          return (
            <>
              <Container.Block onClick={(e) => linkTo(e, funcionalidade.url, router)}>
                <BlocoTexto.Container className="cursor-pointer d-flex flex-direction-column align-items-center">
                  <BlocoTexto width="700px">
                    <h3>{funcionalidade.title}</h3>
                    <p>{funcionalidade.subtitle}</p>
                  </BlocoTexto>
                  <Banner 
                    img_src={funcionalidade.image}
                    img_alt={funcionalidade.subtitle}
                    img_title={funcionalidade.title} 
                    img_width="700px" 
                    width="700px" 
                    height="auto" 
                    // title={funcionalidade.title} 
                    subtitle={`Clique aqui ou na imagem para se informar sobre o tema "${funcionalidade.title}"`} 
                    // button1_text={"Visualizar"}
                    // button1_href={"/"}
                    orientation={"column-reverse"}
                    />
                </BlocoTexto.Container>
              </Container.Block>
            </>
          );
        })
            
      }
    </Container>
    </div>
  );

}
