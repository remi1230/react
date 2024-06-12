import React from 'react';
import styled from 'styled-components';
import ProdsByCategoriePresentation from '../components/ProdsByCategoriePresentation';
import { useParams } from 'react-router-dom';

const DivContainer = styled.div`
    margin-top: 75px;
    font-size: 28px;
`;

function ProduitsByCategorie() {
  const { categorie  } = useParams();
  return (
    <DivContainer>
      <ProdsByCategoriePresentation categorie={categorie } title={"Catégorie " + categorie } />
    </DivContainer>
    );
}

export default ProduitsByCategorie;