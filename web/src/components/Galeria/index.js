import styled from 'styled-components';

// Mostra a primeira foto maior, as outras 3 e se você clica na terceira abre todas

const GaleriaDefault = styled.div`
 
`;

export default function Galeria({imgArray, ...props}){
  let fotoPrincipal = {url: 'perfil-padrao.jpg', display: 'display-none'};
  let segundaFoto = {url: '', display: 'display-none'};
  let terceiraFoto = {url: '', display: 'display-none'};
  let quartaFoto = {url: '', display: 'display-nonenone'};


  if(imgArray[0] != null){
    fotoPrincipal.url = imgArray[0];
    fotoPrincipal.display = '';
  }
  if(imgArray[1] != null){
    segundaFoto.url = imgArray[1];
    segundaFoto.display = '';
  }
  
  if(imgArray[2] != null){
    terceiraFoto.url = imgArray[2];
    terceiraFoto.display = '';
  }

  if(imgArray[3] != null){
    quartaFoto.url = imgArray[3];
    quartaFoto.display = '';
  }
  

    return (
      <>
     
      <div className="galeria">
        <div className="foto-principal-container">
            <img src= {fotoPrincipal.url} className={fotoPrincipal.display}></img>
        </div>
        <div class="miniaturas-container">
            <div>
              <img src={segundaFoto.url} />
            </div>
        </div>
      </div>
      </>
    );
}