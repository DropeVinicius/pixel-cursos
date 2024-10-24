import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './componentes/Header'
import Home from './rotas/Home'
import Favoritos from './rotas/Favoritos'
import CursosPage from './rotas/CursosPage'
import Player from './rotas/Player'
import LoginPage from './rotas/LoginPage'
import RegisterPage from './rotas/RegisterPage'
import SobreNos from './rotas/SobreNos'

const App = () => {
    const location = useLocation();
    const noHeaderPaths = ['/login', '/register'];

    return (
        <>
            {!noHeaderPaths.includes(location.pathname) && <Header />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/favoritos" element={<Favoritos />} />
                <Route path="/cursos" element={<CursosPage />} />
                <Route path="/player" element={<Player />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/sobre-nós" element={<SobreNos />} /> 
            </Routes>
        </>
    );
}

export default App;
