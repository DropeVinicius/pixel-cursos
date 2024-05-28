import React from 'react';
import styled from 'styled-components';
import telegramIcon from '../../imagens/iconChat.png'; // Substitua pelo caminho correto da sua imagem

const Button = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background: url(${telegramIcon}) no-repeat center center;
  background-size: contain;
  border-radius: 50%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  z-index: 1000;

  &:hover {
    transform: scale(1.1);
  }
`;

const TelegramButton = () => {
    return (
        <Button href="https://t.me/+szsMGPh-mEo2NDUx" target="_blank" rel="noopener noreferrer" />
    );
};

export default TelegramButton;