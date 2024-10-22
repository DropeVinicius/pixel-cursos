import Header from '../componentes/Header'
import Pesquisa from '../componentes/Pesquisa'
import UltimosLancamentos from '../componentes/UltimosLancamentos'
import styled from 'styled-components'
import Footer, { FooterWrapper } from '../componentes/Rodape'

const AppContainer = styled.div`
      width: 100%
      max-width: 1200px;
      padding: 20px;
      background-image: linear-gradient(90deg, #002F52 35%, #326589); 
`

function Home() {
  return (
    <AppContainer>
      <Pesquisa />
      <UltimosLancamentos />
      <FooterWrapper>
        <Footer/>
      </FooterWrapper>
    </AppContainer>
  );
}

export default Home