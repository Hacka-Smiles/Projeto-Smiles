import styled from 'styled-components';

const Container = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100vh;

  .center {
    display: flex;
    justify-content:center;
  }
  .bg-dark-gray{
    background-color: #090909;
  }
`;


export default Container;