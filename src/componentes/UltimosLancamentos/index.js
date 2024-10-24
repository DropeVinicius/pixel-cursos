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

const NovosCursosContainer = styled.div`
    margin-top: 30px;
    margin-bottom: 30px;
    display: flex;
    max-width: 100%; /* Garante que o container se ajuste ao tamanho da tela */
    flex-wrap: wrap; /* Permite que os itens sejam enrolados em telas menores */
    justify-content: center; /* Centraliza os itens */
    cursor: pointer;
`
const CursoLink = styled(NavLink)`
  margin: 10px;
  text-decoration: none; /* Remove o sublinhado do link */
  color: inherit; /* Garante que a cor dos textos seja a mesma que a definida nos filhos */
  
  &:hover {
    text-decoration: none; /* Garante que ao passar o mouse, o sublinhado não apareça */
  }
`
const CursoImagem = styled.img`
  border-radius: 10px;
  width: 100%; /* Garante que a imagem ocupe toda a largura do container */
  max-width: 300px; /* Limita o tamanho máximo da imagem */
  border: 3px solid #002F52; /* Borda sutil com transparência */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra sutil para destacar mais */

`

const CursoTitulo = styled.p`
  font-size: 18px;
  color: #000;
  text-decoration: none; /* Remove o sublinhado */
  font-weight: bold;
  text-align: center; /* Centraliza o texto */
  margin-top: 10px; /* Adiciona um espaçamento superior */
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
                {cursos.map(curso => (
                    <CursoLink to={`/player?id=${curso.id}`} key={curso.id}>
                        <CursoImagem src={curso.src} style={estiloImagem} alt={curso.nome} />
                        <CursoTitulo>{curso.nome}</CursoTitulo>
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