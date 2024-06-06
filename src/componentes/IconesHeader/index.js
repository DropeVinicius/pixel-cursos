import React from 'react'
import perfil from '../../imagens/perfil.svg'
// import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Icone = styled.li`   
    margin-right: 40px;
    width: 25px;
    cursor: pointer; 
`

const Icones = styled.ul`
    display: flex;
    align-items: center;
`

const icones = [perfil]


function IconesHeader () {

    const navigate = useNavigate();

    const handleIconClick = () =>{
        navigate('/login'); // Redireciona para a página de login
    };

    return (
        <Icones>
            { icones.map((icone, index) => (
                    <Icone key={index} onClick={handleIconClick}>
                        <img src={icone} alt="Icone de perfil"></img>
                    </Icone>
            ))}
        </Icones>
    )
}

export default IconesHeader