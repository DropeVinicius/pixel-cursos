import React from 'react';
import styled from 'styled-components';
import pixelbanner from '../imagens/pixelbanner.png'
import professores from '../imagens/professores.png'
import logonew from '../imagens/logonew.svg'
import andre from '../imagens/andre.jpg'
import ricardo from '../imagens/ricardo.jpg'
import pedro from '../imagens/pedro.jpg'
import Footer, { FooterWrapper } from '../componentes/Rodape'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const SobreNosContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%
    max-width: 1200px;
    padding: 0px;
    background-color: #FFF;
    overflow-x: hidden; /* Previne rolagem horizontal */
    box-sizing: border-box;
`

const IntroducaoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    width: 100%;
    margin-bottom: 40px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        padding: 0 15px; /* Adicionado espaçamento nas laterais no mobile */
    }
`

const TextosContainer = styled.div`
    flex: 1;
    margin-left: 20px; /* Adiciona espaço à esquerda do texto */
    padding-right: 20px; /* Evita que o texto toque a borda direita */
    box-sizing: border-box;

    @media (max-width: 768px) {
        margin-left: 0; /* Remove a margem no mobile */
        margin-bottom: 20px;
        padding: 0 15px; /* Adiciona espaçamento lateral no mobile */
    }
`

const Imagem = styled.img`
    max-width: 300px;
    border-radius: 10px;
    margin-right: 20px; /* Adiciona espaço à direita da imagem */
    
    @media (max-width: 768px) {
        max-width: 100%;
        margin-top: 20px;
        margin-right: 0;
        padding: 0 15px; /* Ajusta o padding lateral para garantir que a imagem não encoste na borda */
        box-sizing: border-box;
    }
`

const Titulo = styled.h1`
    color: #013358;
    font-size: 36px;
    margin-bottom: 25px;

    @media (max-width: 768px) {
        font-size: 28px; /* Reduz o tamanho do título em telas menores */
    }
`

const Texto = styled.p`
    font-size: 18px;
    line-height: 1.5;

    @media (max-width: 768px) {
        font-size: 16px; /* Ajusta o tamanho do texto para telas menores */
    }
`

const Botao = styled.button`
    background-color: #013358;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;

    @media (max-width: 768px) {
        padding: 8px 16px; /* Reduz o tamanho do botão no mobile */
    }
`

const Divider = styled.div`
    width: 100%;
    margin: 20px 0;
    display: flex;
    align-items: center;

    &::before,
    &::after {
        content: '';
        flex: 1;
        height: 2px;
        background-color: #013358;
    }

    &::before {
        margin-right: 10px;
    }

    &::after {
        margin-left: 10px;
    }

     @media (max-width: 768px) {
        margin: 15px 0; /* Ajusta o espaçamento do divisor no mobile */
    }
`

const Logo = styled.img`
  max-width: 100px;
  margin: 0 20px;
`

const EquipeContainer = styled.div`
    text-align: center;
    margin-top: 40px;
    margin-bottom: 40px;

    @media (max-width: 768px) {
        padding: 0 20px; /* Adiciona espaçamento lateral no mobile */
    }
`

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    width: 100%; /* Garante que o container de cards não ultrapasse a tela */
    padding: 0 20px; /* Adiciona espaçamento lateral */
    box-sizing: border-box;

    @media (max-width: 768px) {
        padding: 0 15px; /* Ajusta o espaçamento lateral para telas menores */
    }
`

const Card = styled.div`
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    width: 200px; /* Ajuste conforme necessário */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        width: 100%; /* Cards ocupam toda a largura no mobile */
        max-width: 300px; /* Limita o tamanho dos cards no mobile */
    }
`

const Avatar = styled.img`
    border-radius: 50%;
    width: 100px; /* Ajuste conforme necessário */
    height: 100px; /* Ajuste conforme necessário */
`

const RedesSociais = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;

    svg {
        margin: 0 5px; /* Espaçamento entre os ícones */
        color: #000; /* Cor dos ícones */
        font-size: 24px;
    }
`

const integrantes = [
    {
        nome: 'André Rosa',
        descricao: 'FIAP - SISTEMAS PARA INTERNET',
        avatar: andre,
        linkedin: 'https://www.linkedin.com/in/andre-rosa-ferreira-filho/',
        github: 'https://github.com/dedeferreira',
        instagram: 'https://www.instagram.com/_androsa/'
    },
    {
        nome: 'Ricardo Pinheiro',
        descricao: 'FIAP - SISTEMAS PARA INTERNET',
        avatar: ricardo,
        linkedin: 'https://www.linkedin.com/in/ricardospinheiro/',
        github: 'https://github.com/ricardospin',
        instagram: 'https://www.instagram.com/ricardpin/'
    },
    {
        nome: 'Pedro Vinícius',
        descricao: 'FIAP - SISTEMAS PARA INTERNET',
        avatar: pedro,
        linkedin: 'https://www.linkedin.com/in/pedro-dias-330961221/',
        github: 'https://github.com/DropeVinicius',
        instagram: 'https://www.instagram.com/drope_diass/'
    },
];

function SobreNos() {
    return (
        <SobreNosContainer>
            <IntroducaoContainer>
                <TextosContainer>
                    <Titulo>Somos a Pixel</Titulo>
                    <Texto>
                        Uma plataforma de treinamento e cursos de tecnologias totalmente gratuito que prepara você para suas carreiras e os conecta a empregadores em potencial, enriquecendo seu conhecimento, portfólio e currículo para o vasto mundo corporativo.
                    </Texto>
                    <Botao>SEJA UM ALUNO</Botao>
                </TextosContainer>
                <Imagem src={pixelbanner} alt="Aluna Pixel" />
            </IntroducaoContainer>
            <Divider>
                <Logo src={logonew} alt="Logo da Pixel" />
            </Divider>
            <IntroducaoContainer>
                <Imagem src={professores} alt="Professora Pixel" />
                <TextosContainer>
                    <Titulo>Professor Parceiro</Titulo>
                    <Texto>
                        Seja nosso professor parceiro! Na PIXEL, acreditamos no poder transformador da educação e estamos em busca de profissionais apaixonados por ensinar. Venha fazer parte de uma plataforma inovadora, que valoriza o conhecimento e oferece a oportunidade de impactar vidas por meio de seus cursos. Juntos, podemos construir o futuro da educação!
                    </Texto>
                </TextosContainer>
            </IntroducaoContainer>
            <EquipeContainer>
                <Titulo>NOSSA EQUIPE</Titulo>
                <CardContainer>
                    {integrantes.map((integrante, index) => (
                        <Card key={index}>
                            <Avatar src={integrante.avatar} alt={`Avatar de ${integrante.nome}`} />
                            <h3>{integrante.nome}</h3>
                            <p>{integrante.descricao}</p>
                            <RedesSociais>
                                <a href={integrante.linkedin} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                                <a href={integrante.github} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a href={integrante.instagram} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </RedesSociais>
                        </Card>
                    ))}
                </CardContainer>
            </EquipeContainer>
            <FooterWrapper>
                <Footer />
            </FooterWrapper>
        </SobreNosContainer>
    );
}

export default SobreNos;
