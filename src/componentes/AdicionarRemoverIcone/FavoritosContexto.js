import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getFavoritos, postFavorito, deleteFavorito } from '../../servicos/favoritos';

const FavoritosContext = createContext();

export const useFavoritos = () => useContext(FavoritosContext);

export const FavoritosProvider = ({ children }) => {
    const [favoritos, setFavoritos] = useState ([]);

    const fetchFavoritos = async () => {
        const favoritosDaAPI = await getFavoritos();
        setFavoritos(favoritosDaAPI);
    };

    const adicionarFavorito = async (id) => {
        await postFavorito(id);
        await fetchFavoritos();
    };

    const removerFavorito = async (id) => {
        await deleteFavorito(id);
        await fetchFavoritos();
    };

    useEffect(() => {
        fetchFavoritos();
    }, []);

    return (
        <FavoritosContext.Provider value={{ favoritos, adicionarFavorito, removerFavorito, fetchFavoritos}}>
            {children}
        </FavoritosContext.Provider>
    );
};

FavoritosProvider.propTypes = {
    children: PropTypes.node.isRequired,
};