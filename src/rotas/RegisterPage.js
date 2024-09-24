import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LogoWhite from '../componentes/LogoWhite';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589); 

`;

const Titulo = styled.h2`
    color: #013358;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #002F52;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #326589;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 15px;
`;

const BackLink = styled(Link)`
  margin-top: 15px;
  color: #002F52;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #326589;
  }
`;

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // Estado para confirmar senha
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validação para garantir que as senhas coincidam
    if (!name || !email || !password || !confirmPassword) {
      setError('Todos os campos são necessários');
    } else if (password !== confirmPassword) {
      setError('As senhas não coincidem');
    } else {
      setError('');
      // Handle registration logic here
      console.log('Nome:', name);
      console.log('Email:', email);
      console.log('Senha:', password);
    }
  };

  return (
    <Container>
      <LogoWhite /> {LogoWhite}
      <Form onSubmit={handleSubmit}>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Titulo>Cadastre-se</Titulo>
        <Input
          type="text"
          placeholder="Digite o seu nome..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Digite o seu email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Digite sua senha..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Confirme sua senha..."
          value={confirmPassword} // Campo para confirmar a senha
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button type="submit">CADASTRAR</Button>
        <BackLink to="/login">Voltar</BackLink>
      </Form>
    </Container>
  );
};

export default RegisterPage;