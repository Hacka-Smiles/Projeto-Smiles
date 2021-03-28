import styled from 'styled-components'
import db from '../db.json';
import Banner from '../src/components/Banner';
import Container from '../src/components/Container';
import BlocoTexto from '../src/components/BlocoTexto';

export default function Home() {

  return (
    <>
    <Container>
        <div className="d-flex justify-content-center bg-dark-gray">
          <Banner 
            img_src="/bannerum.jpg"
            img_alt="Banner principal"
            img_title="Banner principal" 
            img_width="600px" 
            width="600px" 
            height="auto" 
            title={db.title} 
            subtitle={db.description} 
            button1_text={"Entrar"}
            button1_href={"/entrar"}
            button2_text={"Cadastrar"}
            button2_href={"/cadastrar"}
            orientation={"initial"}
            />
        </div>
          <Container.Block>
        <BlocoTexto.Container>
          <BlocoTexto>
            <h3>Conheça as funções do nosso aplicativo</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </BlocoTexto>
          <Banner 
            img_src="/bannerum.jpg"
            img_alt="Função 1"
            img_title="Função 1" 
            img_width="350px" 
            width="350px" 
            height="auto" 
            title={db.title} 
            subtitle={db.description} 
            button1_text={"Visualizar"}
            button1_href={"/"}
            orientation={"column-reverse"}
            />
        </BlocoTexto.Container>
      </Container.Block>
    </Container>
    </>
  );

}
