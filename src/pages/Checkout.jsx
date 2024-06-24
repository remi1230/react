import React from 'react';
import styled from 'styled-components';
import CheckoutForm from '../components/CheckoutForm';

const DivContainer = styled.div`
    display: grid;
    grid-template-columns: 67% 33%;
    gap: 50px;
    margin-top: 75px;
    padding: 15px;
    font-size: 28px;
`;
const DivCheckout = styled.div`
    
`;
const DivCart = styled.div`
    
`;

function Checkout() {
  return (
    <DivContainer>
      <DivCheckout>
        <CheckoutForm />
      </DivCheckout>
      <DivCart>
        Cart infos
      </DivCart>
    </DivContainer>
  );
}

export default Checkout;