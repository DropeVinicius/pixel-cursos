import styled from "styled-components"
import { Titulo } from "../Titulo"

const Card = styled.div`
    display: flex; /* Flexbox para alinhar os itens lado a lado */
    flex-direction: row; /* Alinha os itens na horizontal */
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    margin: 20px auto; /* Margem centralizada com espaçamento */
    padding: 20px;
    width: 100%;
    max-width: 600px; /* Ajuste da largura máxima */
    box-sizing: border-box; /* Inclui padding e border no width */
    overflow: hidden; /* Garante que não haja overflow */
    
    @media (max-width: 768px) {
        flex-direction: column; /* Muda a direção para coluna em telas menores */
        max-width: 90%; /* Ajusta a largura máxima para se adaptar melhor em mobile */
        margin: 10px auto; /* Reduz a margem em dispositivos móveis */
    }
    }
`
const Botao = styled.button`
   background-color: #EB9B00;
    border-radius: 5px;
    color: #FFF;
    padding: 10px 0;
    font-size: 16px;
    border: none;
    font-weight: 900;
    text-align: center;
    width: 150px;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
        background-color: #d88a00; /* Mudança de cor no hover */
    }
`
const TituloCard = styled(Titulo)`
    font-size: 26px; /* Ajusta o tamanho da fonte do título */
    color: #EB9B00;
    margin: 0 0 10px 0; /* Margem inferior para espaçamento */
`;

const Descricao = styled.p `
    font-size: 14px;
    color: #666;
    margin: 0;
`
const Subtitulo = styled.h4 `
    color: #002F52;
    font-size: 18px;
    font-weight: bold;
    margin: 10px 0;
`
const ImgLivro = styled.img `
    width: 120px; /* Ajusta a largura da imagem */
    border-radius: 10px;
    height: auto;
`
const Conteudo = styled.div `
    flex: 1; /* Ocupa o espaço disponível */
    display: flex;
    flex-direction: column; /* Alinha o título e o texto em coluna */
    justify-content: center;
`

const ImagemEBotao = styled.div `
    display: flex;
    flex-direction: column; /* Alinha a imagem em cima e o botão embaixo */
    align-items: center;
    margin-left: 20px; /* Espaçamento à esquerda do conteúdo */

    @media (max-width: 768px) {
        margin-left: 0; /* Remove a margem à esquerda em telas menores */
        margin-top: 20px; /* Adiciona margem superior para separar da descrição */
    }
`

function CardRecomenda ({titulo, subtitulo, descricao, img}) {
    return (
            <Card>
                <Conteudo>
                    <TituloCard>{titulo}</TituloCard>
                    <Subtitulo>{subtitulo}</Subtitulo>
                    <Descricao>{descricao}</Descricao>
                </Conteudo>    
                <ImagemEBotao>
                    <ImgLivro src={img} alt="Livro" />
                    <Botao>Saiba mais</Botao>
                </ImagemEBotao>  
            </Card> 
    )
}

export default CardRecomenda