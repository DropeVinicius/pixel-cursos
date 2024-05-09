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
    font-size: 30px;
    text-align: center;
    padding-top: 35px; 
    margin-bottom: 20px;
    width: 100%;
`

const VideoContainer = styled.div `
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
` 

const VideoPlayer = styled.iframe `
    width: 100%; /* Alterado para ocupar toda a largura */
    max-width: 400px; /* Máximo de largura para dispositivos móveis */
    height: 225px; /* Ajustado para uma proporção 16:9 */
    aspect-ratio: 16/9; /* Mantém a proporção 16:9 */
    border: none; /* Removido a borda */

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