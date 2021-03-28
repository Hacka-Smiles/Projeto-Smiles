import styled from 'styled-components';

const Container = styled.div`
  /* background-color: ${({ theme }) => theme.bg}; */
  width: 100%;
  /* height: 100vh; */
  @media(max-width: 768px) {
    width: ${(props) => props.width_mobile};
  }

  .d-flex {
    display: flex;
  }
  .justify-content-center {
    justify-content:center;
  }
  .align-items-center {
    align-items:center;
  }
  .justify-flex-start-mobile {
    @media(max-width: 768px) {
        justify-content:flex-start;
      }
  }
  .flex-direction-column{
    flex-direction:column;
  }
  .text-center {
    text-align:center;
  }
  .bg-dark-gray{
    background-color: #090909;
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
    width: 100%;
  }
  @media(max-width: 600px) {
    flex-direction: column;
  }
`

export default Container;