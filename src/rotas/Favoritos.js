import { useEffect, useState } from 'react';
import styled from 'styled-components'
import { deleteFavorito, getFavoritos } from '../servicos/favoritos';
import livroImg from '../imagens/livro.png'
import AdicionarRemoverIcone from '../componentes/AdicionarRemoverIcone/AdicionarRemoverIcone';


//Defina o estilo dos componentes
const AppContainer = styled.div`
    width: 100%; 
    min-height: 100vh; 
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
    overflow-x: hidden; /* Impedir rolagem horizontal */
    padding-top: 20px;
`
const ResultadoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1200px;
    width: 100%;
    padding: 20px;
    margin: 0 auto; /* Centraliza o contêiner */
    flex-direction: row; /* Exibição em linha por padrão */
`
const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-align: center;
    padding: 20px;
    border-radius: 10px;
    transition: box-shadow 0.3s ease;
    background-color: #002F52;
    color: #FFF;
    width: calc(50% - 20px); /* Ajuste para 2 cards por linha */
    box-sizing: border-box;
    margin: 10px; /* Adicionando margem para separar os cards */
    max-width: 300px;
    p {
        width: 200px;
        color: #FFF;
        margin-right: 10px;
        font-size: 14px;
        display: flex;
        justify-content: center;
    }
    
    &:hover {
        border: 0 8px 12px rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 768px) {
        width: calc(100% - 20px); /* Alterando a largura para ocupar toda a largura da tela em dispositivos móveis */
    }
`
const Titulo = styled.h2`
    color: #FFF;
    font-size: 30px;
    text-align: center;
    width: 100%;
    padding-top: 35px
    margin-bottom: 20px;
`
const ImagemContainer = styled.div`
    width: 100%;
    height: auto;
    margin-right: 10px;
`

const IconeContainer = styled.div`
    width: 210px;
`

function Favoritos() {
  const [favoritos, setFavoritos] = useState([])

  async function fetchFavoritos() {
    const favoritosDaAPI = await getFavoritos()
    setFavoritos(favoritosDaAPI)
  }

  async function deletarFavorito(id) {
    await deleteFavorito(id)
    await fetchFavoritos()
    alert(`Curso de id: ${id} deletado com sucesso!`)
  }

  useEffect(() => {
    fetchFavoritos([])
  }, [])

  return (
    <AppContainer>
      <div style={{ width: '100%' }} >
        <Titulo>Aqui estão seus cursos favoritos:</Titulo>
        <ResultadoContainer>
          {
            favoritos.length !== 0 ? favoritos.map(favorito => (
              favorito ? (
              <Resultado onClick={() => deletarFavorito(favorito.id)} key={favorito.id} >
                <ImagemContainer>
                  <IconeContainer>
                    <p>{favorito.nome}</p>
                      <img src={livroImg} alt="descrição da imagem" />
                    <AdicionarRemoverIcone cursoId={favorito.id} isFavoritoInicial={true} />
                  </IconeContainer>
                </ImagemContainer>
              </Resultado>
              ) : null
            )) : null
          }
        </ResultadoContainer>
      </div>
    </AppContainer>
  );
}

export default Favoritos