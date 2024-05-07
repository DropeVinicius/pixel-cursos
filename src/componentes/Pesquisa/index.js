import Input from '../Input'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { getCursos } from '../../servicos/cursos'
import { postFavorito } from '../../servicos/favoritos'


const PesquisaContainer = styled.section `
    background-image: linear-gradient (90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 20px;
    height: auto; /* Remover altura fixa */
`
const Titulo = styled.h2 `
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`
const Subtitulo = styled.h3 `
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 20px; /* Reduzindo a margem inferior */
`
const Resultado = styled.div `
    display: flex;
    flex-direction: column; /* Alterando para coluna para telas menores */
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;

    p {
        width: 200px;
    }

    img {
        width: 100px;
        height: auto; /* Permitindo que a altura seja ajustada automaticamente */
    }

    &:hover {
        border: 1px solid white;
    }
`

function Pesquisa () {
    const [cursosPesquisados, setCursosPesquisados] = useState([])
    const [ cursos, setCursos ] = useState([])

    useEffect(() => {
        fetchCursos()
    }, [])

    async function fetchCursos () {
        const cursosDaAPI = await getCursos()
        setCursos(cursosDaAPI)
    }

    async function insertFavorito(id) {
        await postFavorito(id)
        alert(`Curso de id:${id} inserido com sucesso!`)
    } 
        
    return (
        <PesquisaContainer>
            <Titulo>Já sabe qual certificação deseja?</Titulo>
            <Subtitulo>Encontre o curso ideal para trilhar.</Subtitulo>
            <Input
                placeholder="Escreva o tipo de curso"
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = cursos.filter( curso => curso.nome.includes(textoDigitado))
                    setCursosPesquisados(resultadoPesquisa)
                }}
            />
            {cursosPesquisados.map( curso => (
                <Resultado onClick={() => insertFavorito(curso.id)}>
                    <img src={curso.src} />
                    <p>{curso.nome}</p>
                </Resultado>
            ) ) }
        </PesquisaContainer>
    )
}

export default Pesquisa