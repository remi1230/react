import React from 'react';
import styled from 'styled-components';
import AccueilImage from '../components/accueilImage';
import LastProdsPresentation from '../components/lastProdsPresentation';
import AccueilValeurs from '../components/accueilValeurs';

const DivContent = styled.div`
    padding: 50px;
`;

function Accueil() {
  return (
    <div>
      <AccueilImage />
      <DivContent>
        <LastProdsPresentation number="6" random="true" title="Nos derniers produits" />
        <AccueilValeurs />
      </DivContent>
    </div>
  );
}

export default Accueil;