import React, { useContext } from 'react';
import styled from 'styled-components';
import CheckoutForm from '../components/CheckoutForm';
import CheckoutCart from '../components/CheckoutCart';
import TitlePage from '../components/TitlePage';
import { CartContext } from '../components/CartContext';

const DivSuperContainer = styled.div`
    margin-top: 75px;
`;
const DivContainer = styled.div`
    display: grid;
    grid-template-columns: 67% 33%;
    gap: 50px;
    padding: 15px;
    font-size: 28px;
    @media (max-width: 900px) {
        grid-template-columns: 50% 50%;
        padding-right: 0px;
    }
    @media (max-width: 580px) {
    display: flex;
        flex-direction: column-reverse;
    }
`;
const DivCheckout = styled.div`
    
`;
const DivCart = styled.div`
    
`;

function Checkout() {
  const { cart } = useContext(CartContext);
  const prixTot  = cart.reduce((acc, val) => acc + (val.price * val.quantity), 0).toFixed(2) + "€";

  return (
    <DivSuperContainer>
      <TitlePage title={"Payer - " + prixTot} />
      <DivContainer>
        <DivCheckout>
          <CheckoutForm />
        </DivCheckout>
        <DivCart>
          <CheckoutCart />
        </DivCart>
      </DivContainer>
    </DivSuperContainer>
  );
}

export default Checkout;