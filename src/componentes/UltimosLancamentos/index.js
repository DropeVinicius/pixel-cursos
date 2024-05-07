import React from 'react'
import { cursos } from './dadosUltimosLancamentos'
import { Titulo } from '../Titulo'
import CardRecomenda from '../CardRecomenda'
import imagemLivro from '../../imagens/livro3.png'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const NovosCursosContainer = styled.div `
    margin-top: 30px;
    margin-bottom: 30px;
    display: flex;
    max-width: 100%; /* Garante que o container se ajuste ao tamanho da tela */
    flex-wrap: wrap; /* Permite que os itens sejam enrolados em telas menores */
    justify-content: center; /* Centraliza os itens */
    cursor: pointer;
`
const CursoLink = styled(NavLink) `
    margin: 10px;
`
const CursoImagem = styled.img `
    border-radius: 10px;
    width: 100%; /* Garante que a imagem ocupe toda a largura do container */
    max-width: 300px; /* Limita o tamanho máximo da imagem */
`

const estiloImagem = {
    borderRadius: '10px'
}

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo 
                cor="#EB9B00" 
                tamanhoFonte="36px" 
            >
                ÚLTIMOS LANÇAMENTOS
            </Titulo>
            <NovosCursosContainer>
                {cursos.map (curso => (
                        <CursoLink to={`/player?id=${curso.id}`} key={curso.id}>
                            <CursoImagem src={curso.src} style={estiloImagem} alt={curso.nome}/>
                        </CursoLink>
                ))}
            </NovosCursosContainer>     
            <CardRecomenda
                titulo="Talvez você se interesse por"
                subtitulo="Microsoft Certified: Azure Fundamentals"
                descricao="Demonstrar conhecimento fundamental dos conceitos de nuvem e dos principais serviços do Azure, além de recursos e ferramentas de gerenciamento e governança do Azure."
                img={imagemLivro}
            />   
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos