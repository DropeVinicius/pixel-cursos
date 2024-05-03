import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import iconAdd from '../../imagens/iconadd.png';
import iconDelete from '../../imagens/icondelete.png';
import { getFavoritos, postFavorito, deleteFavorito } from '../../servicos/favoritos';

    const Icone = styled.img `
        cursor: pointer;
`
    const AdicionarRemoverIcone = ({ cursoId, isFavoritoInicial}) => {
        const [isFavorito, setIsFavorito] = useState(isFavoritoInicial);
        
        useEffect(() => {
            setIsFavorito(isFavoritoInicial);
        }, [isFavoritoInicial]);

        React.useEffect(() => {
            async function verificaFavorito() {
                try {
                const favoritos = await getFavoritos();
                console.log('Favoritos:', favoritos);
                const favoritoIds = favoritos.map(favorito => favorito ? favorito.id : null);
                setIsFavorito(favoritoIds.includes(cursoId));
            } catch (error) {
                console.error('Erro ao buscar favoritos:', error);
            }
        }
           verificaFavorito(); 
        }, [cursoId]); 

        const handleToggleFavorito = async () => {
            try {
                if (isFavorito) {
                    await deleteFavorito(cursoId);
                } else {
                    await postFavorito(cursoId);
                }
                setIsFavorito(prevState => !prevState);
            } catch (error) {
                console.error('Erro ao adicionar/remover curso aos favoritos:', error);
            }
        };

        return (
            <Icone
            src={isFavorito ? iconDelete : iconAdd}
            alt={isFavorito ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
            onClick={handleToggleFavorito}
            />
        );
    };

    AdicionarRemoverIcone.propTypes = {
        cursoId: PropTypes.string.isRequired,
        isFavoritoInicial: PropTypes.bool.isRequired,
    };

    export default AdicionarRemoverIcone;
        
    
    
    
    
    
    
    
    

