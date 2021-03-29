import styled from 'styled-components';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

library.add(
  faHome,
  faSearch,
  faUser
  // more icons go here
);

// Recebe icones
const NavbarDefault = styled.nav`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  transition: .3s;
  display: flex;
  align-items: center;
  position:fixed;
  bottom:0;
  left:0;
  right:0;

`;

export default function Navbar({page, ...props}){
  let navItemClass = '';
  let homeClass ='', perfilClass = '', buscaClass;
  if(page == 'home'){
    homeClass = 'active';
  } else if(page == 'perfil'){
    perfilClass = 'active';
  } else if(page == 'busca'){
    buscaClass = 'active'
  }
  return(
    <>
    <NavbarDefault className="navbar">
      <ul>
        <li className={homeClass}>
          <a href="/navegar">
            <FontAwesomeIcon  icon={faHome} style={{color: 'white'}} />  
          </a> 
        </li>
        <li className={buscaClass}>
          <FontAwesomeIcon icon={faSearch} style={{color: 'white'}} />
        </li>
        <li className={perfilClass} >
          <a href="/perfil">
            <FontAwesomeIcon  icon={faUser} style={{color: 'white'}} />
          </a>
        </li>
      </ul>
    </NavbarDefault>
    </>
  );
}