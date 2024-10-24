import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Footer, { FooterWrapper } from '../componentes/Rodape'

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

  body {
    font-family: 'Inter', sans-serif;
  }
`

const AppContainer = styled.div`
      width: 100%; 
      align-items: flex-start;
      background-image: linear-gradient(90deg, #002F52 35%, #326589); 
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 30px;
    text-align: center;
    padding-top: 35px; 
    margin-bottom: 20px;
    width: 100%;
`

const VideoContainer = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`

const VideoPlayer = styled.iframe`
    width: 100vw;
    height: 100vh;
    max-width: 1200px;
    max-height: 675px;

    @media (max-width: 768px) {
        max-width: 480px;
        max-height: 270px;
    }

`
const VideoFooter = styled.div`
    display: flex;
    justify-content: flex-end; 
    align-items: center;
    padding: 10px;
    max-width: 1200px;
    margin: 0 auto;
`

const BotaoProximo = styled.button`
    background-color: #FFF;
    color: #000;
    font-size: 16px;
    padding: 10px 20px;
    border: none;
    border-radius: 4px; /*Bordas Levemente arredondas */
    cursor: pointer;
    font-family: 'Inter', sans-serif; /* FONTE INTER */
    font-weight: 500;

    &:hover {
        background-color: #e0e0e0;
    }
`

const Player = () => {
    const location = useLocation(); // Use o hook useLocation para obter a localização atual
    const searchParams = new URLSearchParams(location.search);
    const cursoId = searchParams.get('id'); // Obtenha o ID do curso da query parameter

    const videoUrl = `https://www.youtube.com/embed/h5PNYnwApkM?si=sTxSMbDRHCaTHZqe`;

    return (
        <>
            <GlobalStyle />
            <AppContainer>
                <Titulo>#1 TREINAMENTO DEVELOPER | AZURE</Titulo>
                <VideoContainer>
                    <VideoPlayer
                        title="video"
                        src={videoUrl}
                        frameBorder="0"
                        allowFullScreen
                    />
                </VideoContainer>
                {/* Botão e footer abaixo do vídeo */}
                <VideoFooter>
                    {/* O botão está alinhado à direita */}
                    <BotaoProximo>PRÓXIMO CAPÍTULO</BotaoProximo>
                </VideoFooter>
                <FooterWrapper>
                    <Footer />
                </FooterWrapper>
            </AppContainer>
        </>
    );
}

export default Player