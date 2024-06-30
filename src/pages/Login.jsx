import React, { useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../components/AuthContext';
import styled from 'styled-components';
import TitlePage from '../components/TitlePage';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: var(--background);
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  background: #825555;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  background-color: var(--contactFieldBg);
  color: var(--contactFieldTxt);
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const ButtonConnexion = styled.button`
  margin-top: 25px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: var(--connexionButtonBg);
  color: var(--connexionButtonText);
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: var(--connexionButtonBgHover);
    color: var(--connexionButtonTextHover);
  }
`;

const ButtonDeconnexion = styled.button`
  margin-top: 25px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: var(--deconnexionButtonBg);
  color: var(--deconnexionButtonText);
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: var(--deconnexionButtonBgHover);
    color: var(--deconnexionButtonTextHover);
  }
`;

const DivContainer = styled.div`
  margin-top: 75px;
`;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(username, password);
    if (result.success) {
      const redirectTo = location.state?.from?.pathname || '/';
      navigate(redirectTo);
      window.location.href = redirectTo;
    } else {
      alert(`Informations de connexion incorrectes`);
    }
  };

  return (
    <DivContainer>
      <TitlePage title="Connectez-vous"/>
      <LoginContainer>
        <LoginForm onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ButtonConnexion type="submit">CONNEXION
          </ButtonConnexion>
        </LoginForm>
        <ButtonDeconnexion onClick={ logout }>DÉCONNEXION</ButtonDeconnexion>
      </LoginContainer>
      </DivContainer>
  );
};

export default Login;
