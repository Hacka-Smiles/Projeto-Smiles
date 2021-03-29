import styled from 'styled-components';

const Container = styled.div`
  /* background-color: ${({ theme }) => theme.bg}; */
  width: 100%;
  /* height: 100vh; */
  width: ${(props) => props.width_desktop};
  @media(max-width: 768px) {
    width: ${(props) => props.width_mobile};
  }
`;

Container.Block = styled.div`
  position: relative;
  /* width: 30%; */
  /* width: 100%; */
  /* max-width: 600px; */
  margin: 60px auto;
  height: auto;
  display: flex;
  display: flex;
    justify-content: center;
  

  @media(max-width: 600px) {
    flex-direction: column;
  }
`
Container.Form = styled.div`
  position: relative;
  margin: 30px auto;
  height: auto;
  display: flex;
  display: flex;
  justify-content: center;
  
  .input-container {
    width: -webkit-fill-available;
    text-align: center;
    @media(max-width: 768px) {
      width: 77%;
    }
  }
  @media(max-width: 768px) {
    flex-direction: column;
  }
`

Container.Carousel = styled.div`
  max-width: 600px;
  position: relative;
  margin: 30px auto;
  height: auto;
  display: flex;
  flex-direction:column;
  justify-content: center;
  
  .input-container {
    width: 100%;
  }
  @media(max-width: 600px) {
    flex-direction: column;
  }
`

export default Container;