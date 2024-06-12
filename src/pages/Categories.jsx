import React from 'react';
import styled from 'styled-components';
import CategoriesComp from '../components/Categories';

const DivContainer = styled.div`
    margin-top: 75px;
    display: flex;
    flex-direction: column;
`;

function Categories() {
  return (
    <DivContainer>
        <CategoriesComp title="Catégories" />
    </DivContainer>
    
  );
}

export default Categories;