import React from 'react';
import styled from 'styled-components';

const IntroSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff; /* Fundo branco */
  width: 100%; /* Ocupa toda a largura da tela */
  padding: 60px 80px; /* Aumenta o espaçamento interno */
  box-sizing: border-box; /* Inclui o padding na largura e altura totais */
  margin: 0;

  @media (max-width: 768px) {
    flex-direction: column; /* Coloca os textos e a imagem em coluna no mobile */
    padding: 20px;
    text-align: center;
  }
`;

const TextContainer = styled.div`
  flex: 2;
  padding-right: 40px;
  text-align: left;

  @media (max-width: 768px) {
    padding-right: 0;
    text-align: center;
  }
`;

const MainText = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 2rem; /* Ajusta o tamanho do texto principal para dispositivos menores */
  }
`;

const DescriptionText = styled.p`
  font-size: 1.4rem;
  color: #666;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.1rem; /* Ajusta o tamanho da descrição para dispositivos menores */
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  text-align: right;

  img {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    text-align: center;
    margin-top: 20px;
    img {
      max-width: 80%; /* Reduz o tamanho da imagem em dispositivos menores */
    }
  }
`;

const HomeIntro = () => {
    return (
        <IntroSection>
            <TextContainer>
                <MainText>
                    Pixel: O caminho gratuito para sua carreira em tecnologia,
                    <br />
                    com treinamentos e conexões profissionais.
                </MainText>
                <DescriptionText>
                    Domine a tecnologia, construa seu portfólio e conecte-se ao mercado de trabalho - tudo de forma gratuita.
                </DescriptionText>
            </TextContainer>

            <ImageContainer>
                <img src={require('../../imagens/alunopixel.png')} alt="Introdução Pixel Cursos" />
            </ImageContainer>
        </IntroSection>
    );
};

export default HomeIntro;
