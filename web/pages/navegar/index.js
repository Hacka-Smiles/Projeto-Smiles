import styled from 'styled-components'
import Banner from '../../src/components/Banner';
import Container from '../../src/components/Container';
import BlocoTexto from '../../src/components/BlocoTexto';
import Input from '../../src/components/Input';
import Navbar from '../../src/components/Navbar';
import { useRouter } from 'next/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import db from '../../db.json';
import { Carousel } from 'react-responsive-carousel';
import MultiSelect from "react-multi-select-component";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function Navegar() {
  const linkTo = (e, href, router) => {
    e.preventDefault()
    router.push(href)
  }

  const router = useRouter();
  const [ search, setSearch ] = useState("");
  const [ listaServicos, setListaServicos ] = useState(db.servicos);
  const [ listaFiltradaServicos, setListaFiltradaServicos ] = useState([]);
  const [ listaDestinos, setListaDestinos ] = useState(db.destinos);
  const [ listaFiltradaDestinos, setListaFiltradaDestinos ] = useState([]);

  const filtroAcessibilidade = db.filtros.acessibilidade;
  const filtroEstiloViagem = db.filtros.estilo_viagem;
  const [selectedFilterAcessibilidade, setSelectedFilterAcessibilidade] = useState([]);
  const [selectedFilterEstiloViagem, setSelectedFilterEstiloViagem] = useState([]);

  useEffect(() => {
    var listaFiltradaDestinos = listaDestinos;
    if (search !== '') {
        const filter = search.toLowerCase();
        listaFiltradaDestinos = listaDestinos.filter((destino)=>{
          console.log(destino.destino)
          return(destino.destino.toLowerCase().search(filter) !== -1);
        });
    } 
    setListaFiltradaDestinos(listaFiltradaDestinos);
  }, [search, listaDestinos]);

  useEffect(() => {
    var listaFiltradaServicos = listaServicos;
    // console.log(selectedFilterEstiloViagem)
    if (search !== '') {
        const filter = search.toLowerCase();
        listaFiltradaServicos = listaServicos.filter((servico)=>{
          return(servico.pais.toLowerCase().search(filter) !== -1);
        });
    } 
    setListaFiltradaServicos(listaFiltradaServicos);
  }, [search, listaServicos]);

  // useEffect(() => {
  //   var listaFiltradaServicos = listaServicos;
  //   selectedFilterEstiloViagem.map((filtros_estilo) => {
  //     console.log(filtros_estilo.value)
  //   });
  //   listaFiltradaServicos = listaServicos.filter((servico)=>{
  //     return(
  //       servico.filtros.acessibilidade.map((acessibilidade) => {
  //         acessibilidade.value
  //       })
  //     .toLowerCase().search(filter) !== -1);
  //   });
  //   setListaFiltradaServicos(listaFiltradaServicos);
  // }, [search, selectedFilterAcessibilidade, selectedFilterEstiloViagem]);




  // useEffect(() => {
  //   var listaFiltradaServicos = listaServicos;
  //   selectedFilterEstiloViagem.map((filtros_estilo) => {

      
  //     (filtros_estilo.value)
  //     listaFiltradaServicos = listaServicos.filter((servico)=>{
  //       return(
  //         servico.filtros.acessibilidade.map((acessibilidade) => {
  //           acessibilidade.value
  //         })
  //       .toLowerCase().search(filter) !== -1);
  //     });
  //   });
  //   console.log()
  //   if (search !== '') {
  //       const filter = search.toLowerCase();
  //       listaFiltradaServicos = listaServicos.filter((servico)=>{
  //         return(
  //           servico.filtros.acessibilidade.map((acessibilidade) => {
  //             acessibilidade.value
  //           })
  //         .toLowerCase().search(filter) !== -1);
  //       });
  //   } 
  //   setListaFiltradaServicos(listaFiltradaServicos);
  // }, [search, selectedFilterAcessibilidade, selectedFilterEstiloViagem]);

  // const filtroAcessibilidade = [
  //   { label: "Grapes 🍇", value: "grapes" },
  //   { label: "Mango 🥭", value: "mango" },
  //   { label: "Strawberry 🍓", value: "strawberry", disabled: true },
  //   { label: "Watermelon 🍉", value: "watermelon" },
  //   { label: "Pear 🍐", value: "pear" },
  //   { label: "Apple 🍎", value: "apple" },
  //   { label: "Tangerine 🍊", value: "tangerine" },
  //   { label: "Pineapple 🍍", value: "pineapple" },
  //   { label: "Peach 🍑", value: "peach" },
  // ];

  function handleInputChange(event) {
    setSearch(event.target.value);
  }

  return (
    <div className="margin-0-auto d-flex justify-content-center flex-direction-column-small-size">
      <div className="margin-0-auto m-30 width-50percent d-flex justify-content-flex-start align-items-center flex-direction-column">
        <Container width_desktop={"70%"} width_mobile={"fit-content"}>
            <Container.Form>
              <div className="cursor-pointer d-flex flex-direction-column align-items-center">
                <h1>Estabelecimentos e Serviços</h1>
                <p>Filtre por categorias como "Estilo de Viagem" e "Acessibilidade" para encontrar a experiência ideal para você!</p>
                {/* <Input type="search" placeholder={"Digite aqui para onde você quer viajar"} icon={faSearch} onChange={(e) => handleInputChange(e)}/> */}
                {/* <pre>{JSON.stringify(selectedFilterAcessibilidade)}</pre> */}
                <div className="mt-30">
                  <p><strong>Acessibilidade</strong></p>
                  <MultiSelect
                    options={filtroAcessibilidade}
                    value={selectedFilterAcessibilidade}
                    onChange={setSelectedFilterAcessibilidade}
                    labelledBy="Select"
                    selectAllLabel={"Selecionar todos"}
                    overrideStrings={{
                      "allItemsAreSelected": "Todos os itens foram selecionados",
                      "clearSearch": "Limpar pesquisa",
                      "noOptions": "Nenhuma opção foi encontrada",
                      "search": "Pesquisar",
                      "selectAll": "Selecionar Todos",
                      "selectSomeItems": "Clique aqui e selecione quantos itens quiser"
                    }}
                  /> 
                </div>
                <div className="mt-30">
                  <p><strong>Seu estilo de viagem</strong></p>
                  <MultiSelect
                    options={filtroEstiloViagem}
                    value={selectedFilterEstiloViagem}
                    onChange={setSelectedFilterEstiloViagem}
                    labelledBy="Select"
                    selectAllLabel={"Selecionar todos"}
                    overrideStrings={{
                      "allItemsAreSelected": "Todos os itens foram selecionados",
                      "clearSearch": "Limpar pesquisa",
                      "noOptions": "Nenhuma opção foi encontrada",
                      "search": "Pesquisar",
                      "selectAll": "Selecionar Todos",
                      "selectSomeItems": "Clique aqui e selecione quantos itens quiser"
                    }}
                  />
                </div>
                <BlocoTexto width="400px">
                  {/* <h1>{funcionalidade.title}</h1> */}
                  {/* <p>{funcionalidade.subtitle}</p> */}
                </BlocoTexto>
              </div>
            </Container.Form>
          </Container>
          <Container width_mobile={"fit-content"}>
          {
            listaFiltradaServicos.map((servico) => {
              return (
                <Container.Block onClick={(e) => linkTo(e, servico.url, router)}>
                  <BlocoTexto.Container className="cursor-pointer d-flex flex-direction-column align-items-center">
                    <BlocoTexto width="400px">
                      <h2 className="font-size-20px"><strong>{servico.local}</strong></h2>
                      <p>{servico.descricao}</p>
                      <p><strong>Categoria:</strong> {servico.categoria}</p>
                      <p><strong>Localização:</strong> {servico.cidade} - {servico.estado}, {servico.pais} </p>
                      <p><strong>Nota:</strong> {servico.nota} </p>
                      <p><strong>Nota Acessibilidade:</strong></p>
                        {servico.acessibilidade.map((acessibilidade) => {
                          return (
                            `${acessibilidade.tipo}:  ${acessibilidade.rating}, `
                            )
                        })} 
                      <br/>
                    </BlocoTexto>
                    <Banner 
                      img_src={servico.image}
                      img_alt={servico.title}
                      img_title={servico.title} 
                      img_width="400px" 
                      width="400px" 
                      height="auto" 
                      // title={funcionalidade.title} 
                      subtitle={servico.descricao} 
                      // button1_text={"Visualizar"}
                      // button1_href={"/"}
                      orientation={"column-reverse"}
                      />
                  </BlocoTexto.Container>
                </Container.Block>
              )
            })
          }
        </Container>
        </div>
      <div className="margin-0-auto m-30 width-50percent d-flex justify-content-flex-start align-items-center flex-direction-column">
        <Container width_desktop={"70%"} width_mobile={"fit-content"}>
          <Container.Form>
            <div className="cursor-pointer d-flex flex-direction-column align-items-center">
              <h1>Destinos</h1>
              <p>Encontre destinos para as suas próximas viagens! Digite abaixo o nome de algum lugar que você deseja conhecer.</p>
              <Input type="search" placeholder={"Digite aqui"} icon={faSearch} onChange={(e) => handleInputChange(e)}/>
              <BlocoTexto width="400px">
                {/* <h1>{funcionalidade.title}</h1> */}
                {/* <p>{funcionalidade.subtitle}</p> */}
              </BlocoTexto>
            </div>
          </Container.Form>
        </Container>
        <Container width_mobile={"fit-content"}>
          <Container.Carousel>
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
      <Navbar/>
    </div>
  );
}
