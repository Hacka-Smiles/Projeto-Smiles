import styled from 'styled-components';

const Container = styled.div`
  /* background-color: ${({ theme }) => theme.bg}; */
  width: 100%;
  height: 100vh;

  .d-flex {
    display: flex;
  }
  .justify-content-center {
    justify-content:center;
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
  max-width: 600px;
  margin: 0 auto;
  height: auto;
  display: flex;

  @media(max-width: 600px) {
    flex-direction: column;
  }
`


export default Container;