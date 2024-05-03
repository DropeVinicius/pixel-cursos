import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import livroImg from '../imagens/livro.png'
import { getCursos } from '../servicos/cursos';
import { postFavorito } from '../servicos/favoritos'
import AdicionarRemoverIcone from '../componentes/AdicionarRemoverIcone/AdicionarRemoverIcone';

 //Defina o estilo dos componentes
const AppContainer = styled.div`
    width: 100%; 
    min-height: 100vh; 
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
`
const ResultadoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1200px;
    width: 100%;
    padding: 20px;
`
const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px;
    cursor: pointer;
    text-align: center;
    padding: 20px;
    border-radius: 10px;
    transition: box-shadow 0.3s ease;
    p {
        width: 200px;
        color: #FFF;
        margin-right: 10px;
        display: flex;
        justify-content: center;
    }
    
    &:hover {
        border: 0 8px 12px rgba(0, 0, 0, 0.1);
    }
`
const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
    padding-top: 35px
    margin-bottom: 20px;
`
const ImagemContainer = styled.div `
    width: 100px;
    margin-right: 30px;
`

const IconeContainer = styled.div `
    width: 210px;
`

//Componente da página de cursos
function CursosPage() {
    const [cursos, setCursos] = useState([]);

    // Função para lidar com a adição de um curso aos favoritos
    async function adicionarFavorito(id){
        try {
            await postFavorito(id);
            alert('Curso adicionado aos favoritos com sucesso!');
        }   catch (error) {
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
                                        <img src={livroImg} />
                                        <AdicionarRemoverIcone cursoId={curso.id} isFavoritoInicial={false}/>  
                                    </IconeContainer>
                                </ImagemContainer>
                            </Resultado>     
                        )) : null
                    } 
                </ResultadoContainer>
            </div>
        </AppContainer>
    );
};

export default CursosPage