import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import livroImg from '../imagens/livro.png'
import { getCursos } from '../servicos/cursos';

const AppContainer = styled.div`
      width: 100vw;
      height: 100vh;
      background-image: linear-gradient(90deg, #002F52 35%, #326589); 
`
const ResultadoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    cursor: pointer;
    text-align: center;
    padding: 0 100px;
    p {
        width: 200px;
        color: #FFF;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`
const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
    padding-top: 35px
`

function CursosPage() {
    const [cursos, setCursos] = useState([]);

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
                            <Resultado>
                                <p>{curso.nome}</p>
                                <img src={livroImg} />
                            </Resultado>
                        )) : null
                    }
                </ResultadoContainer>
            </div>
        </AppContainer>
    );
};

export default CursosPage