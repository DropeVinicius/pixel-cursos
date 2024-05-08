import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components'
import { BrowserRoute, Routes, Route, BrowserRouter } from "react-router-dom"
import Header from './componentes/Header';
import Home from './rotas/Home';
import Favoritos from './rotas/Favoritos';
import CursosPage from './rotas/CursosPage';
import Player from './rotas/Player';
import Login from './componentes/Auth/Login';
import Cadastro from './componentes/Auth/Cadastro';

const GlobalStyle = createGlobalStyle`
    body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  li   {
      list-style: none;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cadastro" element={<Cadastro/>} />
        <Route path="/favoritos" element={<Favoritos/>} />
        <Route path="/cursos" element={<CursosPage/>} />
        <Route path="/player" element={<Player/>} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
