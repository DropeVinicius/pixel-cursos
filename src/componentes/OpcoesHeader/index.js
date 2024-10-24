import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Definição do estilo do link
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

// Componente Opcao estilizado
const Opcao = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 10px;
  cursor: pointer;
  min-width: 100px;
`

// Componente da lista de opções
const Opcoes = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;

  @media (max-width: 768px) {
    display: none; /* Esconde as opções no mobile */
  }
`

// Estilização do menu hambúrguer
const HamburgerIcon = styled.div`
  display: none; /* Escondido por padrão em telas maiores */
  align-items: center;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    font-size: 24px;
    margin-left: auto; /* Empurra o ícone para a direita */
    padding: 10px;
  }
`

// Estilização do menu aberto no mobile
const MobileMenu = styled.ul`
  display: ${(props) => (props.open ? 'block' : 'none')};
  position: absolute;
  top: 50px;
  right: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px;
  z-index: 1000;

  li {
    margin-bottom: 10px;
  }

  @media (min-width: 769px) {
    display: none;
  }
`

const textoOpcoes = ['CURSOS', 'FAVORITOS', 'SOBRE-NÓS'];

function OpcoesHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Ícone do menu hambúrguer */}
      <HamburgerIcon onClick={toggleMenu}>
        &#9776;
      </HamburgerIcon>

      {/* Menu desktop */}
      <Opcoes>
        {textoOpcoes.map((texto) => (
          <StyledLink to={`/${texto.toLowerCase()}`} key={texto}>
            <Opcao>
              <p>{texto}</p>
            </Opcao>
          </StyledLink>
        ))}
      </Opcoes>

      {/* Menu mobile */}
      <MobileMenu open={menuOpen}>
        {textoOpcoes.map((texto) => (
          <StyledLink to={`/${texto.toLowerCase()}`} key={texto}>
            <Opcao>
              <p>{texto}</p>
            </Opcao>
          </StyledLink>
        ))}
      </MobileMenu>
    </>
  );
}

export default OpcoesHeader;
