import React from 'react';
import styled from 'styled-components';
import TitlePage from '../components/TitlePage';

const DivContainer = styled.div`
  margin: 10% 25%;
  margin-bottom: 1000px;
  @media (max-width: 1200px) {
      margin: 20% 20%;
  }
  @media (max-width: 900px) {
      margin: 20% 15%;
  }
  @media (max-width: 600px) {
      margin: 20% 10%;
  }
`;

function Page404() {
  return (
    <DivContainer>
      <TitlePage title="Erreur 404 - La page demandée n'existe pas" />
    </DivContainer>
);
}

export default Page404;