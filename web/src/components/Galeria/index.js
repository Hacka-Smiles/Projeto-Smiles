import styled from 'styled-components';
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/swiper-bundle.css';
import Navbar from '../Navbar';

// Mostra a primeira foto maior, as outras 3 e se você clica na terceira abre todas

const GaleriaDefault = styled.div`
 
`;

export default function Galeria({imgArray, ...props}){
  var swiper1 = new Swiper('.swiper1', {
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination1',
      clickable: true,
    },
    loop:true
  });


    return (
      <>
  <div className="swiper-container swiper1">
    <div className="swiper-wrapper">
    {imgArray.map((img) => (
       <div className="swiper-slide"> <img src= {img}></img></div>
      ))}

    </div>
    <div className="swiper-pagination swiper-pagination1"></div>
  </div>

    <h2>Nome da pessoa</h2>

  <Navbar page="perfil"></Navbar>
      </>
    );
}