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
`

const NovosCursosContainer = styled.div `
    margin-top: 30px;
    margin-bottom: 30px;
    display: flex;
    width: 100%;
    justify-content: space-around;
    cursor: pointer;
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
                        <NavLink to={curso.link} key={curso.id}>
                            <img src={curso.src} style={estiloImagem}/>
                        </NavLink>
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