import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589); 
`;

const Titulo = styled.h2`
  color: #fff;
`;

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

const RegisterText = styled.p`
  margin-top: 15px;
  color: #000;
`
const RegisterLink = styled(Link) `
  color: #002F52;
  text-decoration: underline;
  margin-left: 5px;
  cursor: pointer;

  &:hover {
    color: #326589;
  }
`;

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Ambos os campos são obrigatórios');
    } else {
      setError('');
      // Handle login logic here
      console.log('Email:', email);
      console.log('Senha:', password);
    }
  };

  return (
    <Container>
      <Titulo>Login</Titulo>
      <Form onSubmit={handleSubmit}>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Login</Button>
        <RegisterText>
          Não possui conta?
          <RegisterLink to="/register">Cadastrar</RegisterLink>
        </RegisterText>
      </Form>
    </Container>
  );
};

export default LoginPage;
