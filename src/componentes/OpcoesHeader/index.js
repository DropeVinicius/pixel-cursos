import styled from 'styled-components'
import { Link } from 'react-router-dom'

// Definacao do estilo do link
const StyledLink = styled(Link)`
  text-decoration: none; /* Remova o sublinhado */
  color: inherit; /* Use a cor padrão do texto */
`;

// Componente Opcao estilizado
const Opcao = styled.li`   
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 10px; /* Aumenta o espaço ao redor do texto */
    cursor: pointer;
    min-width: 100px; /* Defina uma largura mínima */
`

const Opcoes = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px; /* Adiciona espaço entre as opções */
`

const textoOpcoes = ['CURSOS', 'FAVORITOS', 'SOBRE NÓS']

function OpcoesHeader () {
    return (
        <Opcoes>
            { textoOpcoes.map( (texto) => (
                <StyledLink 
                        to={`/${texto.toLowerCase()}`}>
                    <Opcao>
                        <p>{texto}</p>
                    </Opcao>
                </StyledLink>
            ) ) }
        </Opcoes>
    )
}

export default OpcoesHeader