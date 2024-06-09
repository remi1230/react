import React from 'react';
import styled from 'styled-components';
import ProdsPresentation from '../components/ProdsPresentation';

const DivContainer = styled.div`
    margin-top: 75px;
    font-size: 28px;
`;

function Produits() {
  return (
    <DivContainer>
      <ProdsPresentation number="30" random="false" title="Tous nos produits" />
    </DivContainer>
    );
}

export default Produits;