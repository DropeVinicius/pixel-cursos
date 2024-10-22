import Header from '../componentes/Header'
import Pesquisa from '../componentes/Pesquisa'
import UltimosLancamentos from '../componentes/UltimosLancamentos'
import styled from 'styled-components'
import Footer, { FooterWrapper } from '../componentes/Rodape'
import HomeIntro from '../componentes/Introducao'

const AppContainer = styled.div`
      width: 100%
      max-width: 1200px;
      padding: 0px;
      background-image: linear-gradient(90deg, #002F52 35%, #326589); 
`

function Home() {
  return (
    <AppContainer>
      <HomeIntro />
      <Pesquisa />
      <UltimosLancamentos />
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </AppContainer>
  );
}

export default Home