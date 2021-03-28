import styled from 'styled-components'
import Banner from '../../src/components/Banner';
import Container from '../../src/components/Container';
import BlocoTexto from '../../src/components/BlocoTexto';
import Input from '../../src/components/Input';
import { useRouter } from 'next/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import db from '../../db.json';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

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
      console.log(search)
        const filter = search.toLowerCase();
        listaFiltradaDestinos = listaDestinos.filter((destino)=>{
          console.log(destino.destino)
          return(destino.destino.toLowerCase().search(filter) !== -1);
        });
    } 
    setListaFiltradaDestinos(listaFiltradaDestinos);
  }, [search, listaDestinos]);

  const filterOptions = [
    { label: "Grapes 🍇", value: "grapes" },
    { label: "Mango 🥭", value: "mango" },
    { label: "Strawberry 🍓", value: "strawberry", disabled: true },
    { label: "Watermelon 🍉", value: "watermelon" },
    { label: "Pear 🍐", value: "pear" },
    { label: "Apple 🍎", value: "apple" },
    { label: "Tangerine 🍊", value: "tangerine" },
    { label: "Pineapple 🍍", value: "pineapple" },
    { label: "Peach 🍑", value: "peach" },
  ];

  const [selectedFilter, setSelectedFilter] = useState([]);

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
        <Container.Carousel>
        <h1>Destinos</h1>
        <Carousel showArrows={true} showStatus={true} showIndicator={true} autoPlay={true} infiniteLoop={true} labels={{leftArrow: "Destino Anterior", rightArrow: "Próximo Destino", item: "teste"}}>
          {
            listaFiltradaDestinos.map((destino) => {
              return (
                <div>
                    <img src={destino.image}/>
                    <div className="legend">
                      <h3>{destino.destino}</h3>
                      <p>{destino.descricao}</p>
                    </div>
                </div>
              )
            })
          }
      </Carousel>
    </Container.Carousel>
    </Container>
    </div>
  );
}
