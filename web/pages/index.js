import styled from 'styled-components'
import db from '../db.json';
import Banner from '../src/components/Banner';

export default function Home() {

  return (
    <>
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
    </>
  );

}
