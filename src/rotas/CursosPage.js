import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import livroImg from '../imagens/bannerofc.png'
import { getCursos } from '../servicos/cursos';
import { postFavorito } from '../servicos/favoritos'
import AdicionarRemoverIcone from '../componentes/AdicionarRemoverIcone/AdicionarRemoverIcone';
import Footer, { FooterWrapper } from '../componentes/Rodape'
import azureDeveloperImg from '../imagens/bannerofc.png';
import azureSolutionArchitectImg from '../imagens/bannerofc2.png';
import azureAdministratorImg from '../imagens/bannerofc3.png';
import azureFundamentalsImg from '../imagens/bannerofc4.png';
import azdevbanner from '../imagens/azdevbanner.jpg'
import azadmbanner from '../imagens/azadmbanner.jpg'
import azfundamentalsbanner from '../imagens/azfundamentalsbanner.jpg'
import azengbanner from '../imagens/azengbanner.jpg'

//Defina o estilo dos componentes
const AppContainer = styled.div`
    width: 100%; 
    min-height: 100vh; 
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
    overflow-x: hidden; /* Impedir rolagem horizontal */
    padding-top: 20px;
`
const ResultadoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1200px;
    width: 100%;
    padding: 20px;
    margin: 0 auto; /* Centraliza o contêiner */
    flex-direction: row; /* Exibição em linha por padrão */
`
const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-align: center;
    padding: 20px;
    border-radius: 10px;
    transition: box-shadow 0.3s ease;
    //background-color: #002F52;
    color: #FFF;
    width: calc(50% - 20px); /* Ajuste para 2 cards por linha */
    box-sizing: border-box;
    margin: 10px; /* Adicionando margem para separar os cards */
    max-width: 300px;
    p {
        width: 200px;
        color: #FFF;
        margin-right: 10px;
        font-size: 14px;
        display: flex;
        justify-content: center;
    }
    
    &:hover {
        border: 0 8px 12px rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 768px) {
        width: calc(100% - 20px); /* Alterando a largura para ocupar toda a largura da tela em dispositivos móveis */
    }
`
const Titulo = styled.h2`
    color: #FFF;
    font-size: 30px;
    text-align: center;
    width: 100%;
    padding-top: 35px
    margin-bottom: 20px;
`
const ImagemContainer = styled.div`
    width: 100%;
    height: auto;
    margin-right: 10px;
`

const IconeContainer = styled.div`
    width: 210px;
`
const ImagemBorda = styled.img`
    height: auto;
    border-radius: 10px;
    object-fit: cover;
`

const imagemPorId = {
    "1": azdevbanner,
    "2": azadmbanner,
    "3": azfundamentalsbanner,
    "4": azengbanner
};

//Componente da página de cursos
function CursosPage() {
    const [cursos, setCursos] = useState([]);

    // Função para lidar com a adição de um curso aos favoritos
    async function adicionarFavorito(id) {
        try {
            console.log('ID do curso:', id);
            await postFavorito(id);
            alert('Curso adicionado aos favoritos com sucesso!');
        } catch (error) {
            console.error('Erro ao adicionar curso aos favoritos', error);
            alert('Erro ao adicionar curso aos favoritos. Por favor, tente novamente mais tarde.');
        }
    }

    // Busca os cursos ao montar o componente
    useEffect(() => {
        async function fetchCursos() {
            try {
                const cursosDaAPI = await getCursos();
                setCursos(cursosDaAPI); // Estava passando uma string 'cursosDaAPI'
            } catch (error) {
                console.error('Erro ao buscar os cursos:', error);
            }
        }
        fetchCursos();
    }, []);

    return (
        <AppContainer>
            <div>
                <Titulo>Aqui estão nossos cursos</Titulo>
                <ResultadoContainer>
                    {
                        cursos.length !== 0 ? cursos.map(curso => (
                            <Resultado key={curso.id} onClick={() => adicionarFavorito(curso.id)}>
                                <ImagemContainer>
                                    <IconeContainer>
                                        <p>{curso.nome}</p>
                                        <ImagemBorda src={imagemPorId[curso.id]} alt={`Imagem do curso ${curso.nome}`} />
                                        <AdicionarRemoverIcone cursoId={curso.id} isFavoritoInicial={false} />
                                    </IconeContainer>
                                </ImagemContainer>
                            </Resultado>
                        )) : null
                    }
                </ResultadoContainer>
            </div>
            <FooterWrapper>
                <Footer />
            </FooterWrapper>
        </AppContainer>
    );
};

export default CursosPage