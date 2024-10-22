import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export const FooterWrapper = styled.div`
  width: 100%;
  position: relative;
`

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center; /* Isso centraliza o conteúdo no eixo horizontal */
  padding: 20px;
  background: linear-gradient(90deg, rgb(0, 47, 82) 35%, rgb(50, 101, 137));
  color: #e0e0e0;
  position: relative;
  text-align: center;

  @media (max-width: 768px) {
    padding: 15px;
  }
`

const TopDivider = styled.div`
  width: 100%;
  height: 5px;
  background-color: #00bcd4;
  position: absolute;
  top: 0;
  left: 0;
`

const Logo = styled.img`
  width: 150px; /* Ajuste o tamanho desejado aqui */
  margin-bottom: 20px;
  align-self: safe center; /* Centraliza a logo no eixo principal */

  @media (max-width: 768px) {
    width: 130px; /* Ajuste o tamanho para telas menores, se necessário */
  }
`

const ColumnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 30px;

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`

const Link = styled.a`
  color: #e0e0e0;
  text-decoration: none;
  margin-bottom: 10px;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #00bcd4;
    text-decoration: underline;
  }
`

const SocialSection = styled.section`
  width: 100%;
  margin-top: 20px;
  padding: 15px;
  border-radius: 8px;
  border-top: 1px solid #fff;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`

const SocialTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 1.2rem;
  color: #e0e0e0;
`

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-top: 10px;

  svg {
    color: #e0e0e0;
    font-size: 1.8rem;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #00bcd4;
    }
  }
`

const Footer = () => {
    return (
        <FooterContainer>
            <TopDivider />
            {/* Logo centralizada e no topo */}
            <Logo src={require('../../imagens/logovetorbranca.png')} alt="Pixel Logo" />

            <ColumnContainer>
                <Column>
                    <Link href="#">Sobre nós</Link>
                    <Link href="#">Dúvidas</Link>
                    <Link href="#">Suporte</Link>
                    <Link href="#">Trabalhe conosco</Link>
                </Column>
                <Column>
                    <Link href="#">Políticas</Link>
                    <Link href="#">Condições de uso do site</Link>
                    <Link href="#">Condições Gerais</Link>
                    <Link href="#">Política de privacidade</Link>
                </Column>
                <Column>
                    <p>Segunda à sexta: 09 às 18h</p>
                    <p>
                        <FontAwesomeIcon icon={faPhone} /> 3539 - 6256
                    </p>
                </Column>
            </ColumnContainer>

            <SocialSection>
                <SocialTitle>Mídias Sociais</SocialTitle>
                <SocialIcons>
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faWhatsapp} />
                </SocialIcons>
            </SocialSection>
        </FooterContainer>
    );
};

export default Footer;
