import styled from "styled-components"
import { Titulo } from "../Titulo"

const Card = styled.div`
    align-items: center;
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    flex-direction: column; /* Alterando para coluna para telas menores */
    margin: 20px 0; /* Aumentando a margem inferior */
    max-width: 300px; /* Reduzindo a largura máxima para dispositivos menores */
    padding: 20px;
    width: 100%;
`
const Botao = styled.button`
    background-color: #EB9B00;
    color: #FFF;
    padding: 10px 0px;
    font-size: 16px;
    border: none;
    font-weight: 900;
    display: block;
    text-align: center;
    width: 100% /* Ajustando a largura do botão */
    margin-top: 10px; /* Adicionando margem superior */

    &:hover {
        cursor: pointer;
    }
`
const Descricao = styled.p `
    max-width: 300px;
`
const Subtitulo = styled.h4 `
    color: #002F52;
    font-size: 18px;
    font-weight: bold;
    margin: 15px 0;
`
const ImgLivro = styled.img `
    width: 150px;
    height: auto; /* Permitindo que a altura seja ajustada automaticamente */
`

function CardRecomenda ({titulo, subtitulo, descricao, img}) {
    return (
            <Card>
                <div>
                    <Titulo tamanhoFonte="16px" cor="#EB9B00" alinhamento="left">{titulo}</Titulo>
                    <Subtitulo>{subtitulo}</Subtitulo>
                    <Descricao>{descricao}</Descricao>
                </div>
                <div>
                    <ImgLivro src={img}/>
                    <Botao>Saiba mais</Botao>
                </div>  
            </Card> 
    )
}

export default CardRecomenda