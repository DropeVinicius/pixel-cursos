import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import LogoWhite from '../componentes/LogoWhite';
import axios from 'axios';
import { toast } from 'react-toastify';

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
  display: flex;
  justify-content: space-between;
`
const RegisterLink = styled(Link)`
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
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Ambos os campos são obrigatórios');
    } else {
      setError('');
      try {
        const response = await axios.post('https://pixel-cursos-serverv2-dd5c274eb09d.herokuapp.com/login', {
          email,
          password
        });

        // Notificação de sucesso
        console.log('Resposta do servidor', response.data);
        toast.success('Login realizado com sucesso!');

        navigate('/')

        // Redirecionar ou fazer algo após o login
      } catch (err) {
        console.log('Erro ao fazer login:', err.response);
        setError(err.response?.data?.message || 'Erro ao fazer login');
        toast.error(err.response?.data?.message || 'Erro ao fazer login'); // Notificação de erro
      }
    }
  };

  return (
    <Container>
      <LogoWhite /> {LogoWhite}
      <Form onSubmit={handleSubmit}>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Titulo>Faça seu login</Titulo>
        <Input
          type="email"
          placeholder="Digite seu email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Digite sua senha..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">ENTRAR</Button>
        <RegisterText>
          Não possui conta?
          <RegisterLink to="/register">Cadastrar</RegisterLink>
        </RegisterText>
      </Form>
    </Container>
  );
};

export default LoginPage;
