import styled from 'styled-components'
import Banner from '../../src/components/Banner';
import Container from '../../src/components/Container';
import BlocoTexto from '../../src/components/BlocoTexto';
import Input from '../../src/components/Input';
import { useRouter } from 'next/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import db from '../../db.json';

export default function Navegar() {
  const linkTo = (e, href, router) => {
    e.preventDefault()
    router.push(href)
  }

  const router = useRouter();
  const [ search, setSearch ] = useState("");
  // const [ listaEstabelecimentos, setListaEstabelecimentos ] = useState(db.estabelecimentos);
  // const [ listaFiltradaEstabelecimentos, setListaFiltradaEstabelecimento ] = useState("");
  const [ listaDestinos, setListaDestinos ] = useState(db.destinos);
  const [ listaFiltradaDestinos, setListaFiltradaDestinos ] = useState([]);
  useEffect(() => {
    var listaFiltradaDestinos = listaDestinos;
    if (search !== '') {
        const filter = search.toLowerCase();
        listaFiltradaDestinos = listaDestinos.filter((destino)=>{
          return(pokemon.local.search(filter) !== -1);
        });
    } 
    setListaFiltradaDestinos(listaFiltradaDestinos);
}, [search, listaDestinos]);

  function handleInputChange(event) {
    setSearch(event.target.value);
  }

  return (
    <div className="margin-0-auto">
      <Container width_mobile={"fit-content"}>
        <Container.Form>
          <BlocoTexto.Container className="cursor-pointer d-flex flex-direction-column align-items-center">
            <Input type="search" placeholder={"Digite aqui para onde você quer viajar"} icon={faSearch} onChange={(e) => handleInputChange(e)}/>
            <BlocoTexto width="700px">
              {/* <h3>{funcionalidade.title}</h3> */}
              {/* <p>{funcionalidade.subtitle}</p> */}
            </BlocoTexto>
          </BlocoTexto.Container>
        </Container.Form>
      </Container>
      <Container width_mobile={"fit-content"}>
      {

        listaDestinos.map((destino) => {
          return (
            <>
              {console.log(destino)}
              {/* <Container.Block onClick={(e) => linkTo(e, destino.url, router)}>
                <BlocoTexto.Container className="cursor-pointer d-flex flex-direction-column align-items-center">
                  <BlocoTexto width="700px">
                    <h3>{destino.title}</h3>
                    <p>{destino.subtitle}</p>
                  </BlocoTexto>
                  <Banner 
                    img_src={destino.image}
                    img_alt={destino.subtitle}
                    img_title={destino.title} 
                    img_width="700px" 
                    width="700px" 
                    height="auto" 
                    // title={destino.title} 
                    subtitle={`Clique aqui ou na imagem para se informar sobre o tema "${destino.title}"`} 
                    // button1_text={"Visualizar"}
                    // button1_href={"/"}
                    orientation={"column-reverse"}
                    />
                </BlocoTexto.Container>
              </Container.Block> */}
            </>
          );
        })
            
      }
    </Container>
    </div>
  );

}
