import { useEffect, useState } from 'react';
import styled from 'styled-components'
import { deleteFavorito, getFavoritos } from '../servicos/favoritos';
import livroImg from '../imagens/livro.png'
import AdicionarRemoverIcone from '../componentes/AdicionarRemoverIcone/AdicionarRemoverIcone';


const AppContainer = styled.div`
      width: 100%; 
      min-height: 100vh; 
      display: flex;
      justify-content: center;
      align-items: flex-start;
      background-image: linear-gradient(90deg, #002F52 35%, #326589); 
`

const ResultadoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1200px;
    width: 100%;
    padding: 20px;
`
const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px;
    cursor: pointer;
    text-align: center;
    padding: 20px;
    border-radius: 10px;
    transition: box-shadow 0.3s ease;
    p {
        width: 200px;
        color: #FFF;
        margin-right: 10px;
        display: flex;
        justify-content: center;
    }
    
    &:hover {
        border: 0 8px 12px rgba(0, 0, 0, 0.1);
    }
`
const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    padding-top: 35px
    margin-bottom: 20px;
    width: 100%;
`
const ImagemContainer = styled.div`
    width: 100px;
    margin-right: 30px;
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
      <div>
        <Titulo>Aqui estão seus cursos favoritos:</Titulo>
        <ResultadoContainer>
          {
            favoritos.length !== 0 ? favoritos.map(favorito => (
              favorito ? (
              <Resultado onClick={() => deletarFavorito(favorito.id)} key={favorito.id} >
                <ImagemContainer>
                  <IconeContainer>
                    <p>{favorito.nome}</p>
                    <img src={livroImg} />
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