import styled from 'styled-components'
import db from '../db.json';
import Banner from '../src/components/Banner';
import Container from '../src/components/Container';

export default function Home() {

  return (
    <>
    <Container>
      <div className="center bg-dark-gray">
      <Banner 
        img_src="/bannerum.jpg"
        img_alt="Banner principal"
        img_title="Banner principal" 
        width="600px" 
        height="auto" 
        title={db.title} 
        subtitle={db.description} 
        button1_text={"Entrar"}
        button1_href={"/entrar"}
        button2_text={"Cadastrar"}
        button2_href={"/cadastrar"}
        />
      </div>
    </Container>
    </>
  );

}
