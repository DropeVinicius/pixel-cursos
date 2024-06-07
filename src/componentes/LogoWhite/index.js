import logowhite from '../../imagens/logowhite.png'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`

const LogoImage = styled.img`
    margin-right: 10px;
`

function LogoWhite() {
    return (
        <LogoContainer>
            <LogoImage
                src={logowhite}
                alt='logo'
            />
        </LogoContainer>
    )
}

export default LogoWhite