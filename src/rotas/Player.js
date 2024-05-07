import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';


const AppContainer = styled.div`
      width: 100%; 
      align-items: flex-start;
      background-image: linear-gradient(90deg, #002F52 35%, #326589); 
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    padding-top: 35px; 
    margin-bottom: 20px;
    width: 100%;
`

const VideoContainer = styled.div `
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
` 

const VideoPlayer = styled.iframe `
    width: 1200px; /* Ajuste o tamanho do player conforme necessário */
    height: 720px; /* Ajuste o tamanho do player conforme necessário */
` 


const Player = () => {
    const location = useLocation(); // Use o hook useLocation para obter a localização atual
    const searchParams = new URLSearchParams(location.search);
    const cursoId = searchParams.get('id'); // Obtenha o ID do curso da query parameter

   const videoUrl = `https://www.youtube.com/embed/h5PNYnwApkM?si=sTxSMbDRHCaTHZqe`; 
    
    return (
        <AppContainer>
            <Titulo>Player</Titulo>
            <VideoContainer>  
                <VideoPlayer 
                    title="video"
                    src={videoUrl}
                    frameBorder="0"
                    allowFullScreen
                />
            </VideoContainer>  
        </AppContainer>
    );
}

export default Player