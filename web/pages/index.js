import styled from 'styled-components'
import db from '../db.json';
import Banner from '../src/components/Banner';

export default function Home() {

  return (
    <>
      <Banner 
        img_src="/bannerum.jpg" 
        width="600px" 
        height="auto" 
        title={db.title} 
        subtitle={db.description} 
        button1_href={"/entrar"} 
        button2_href={"/cadastrar"} 
        button1_text={"Entrar"}
        button2_text={"Cadastrar"}
        />
    </>
  );

}
