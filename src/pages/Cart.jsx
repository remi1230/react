import React from 'react';
import styled from 'styled-components';
import Kart from '../components/Kart';

const DivContainer = styled.div`
    margin-top: 75px;
`;
const DivCart = styled.div`
    display: flex;
    justify-content: center;
    font-size: 28px;
`;

function Cart() {
  return (
    <DivContainer>
      <DivCart><Kart /></DivCart>
    </DivContainer>
    );
}

export default Cart;