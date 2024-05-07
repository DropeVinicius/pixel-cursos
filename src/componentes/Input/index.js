import styled from "styled-components"

const Input = styled.input `
    order: 1px solid #FFF;
    background: transparent;
    border: 1px solid #FFF;
    padding: 15px 20px;
    border-radius: 30px;
    width: 100%;
    max-width: 300px; /*Define uma largura máxima */
    color: #FFF;
    font-size: 16px;
    margin-bottom: 10px;

    &::placeholder {
        color: #FFF;
        font-size: 16px;
    }
`

export default Input