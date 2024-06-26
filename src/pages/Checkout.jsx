import React, { useContext } from 'react';
import styled from 'styled-components';
import CheckoutForm from '../components/CheckoutForm';
import CheckoutCart from '../components/CheckoutCart';
import TitlePage from '../components/TitlePage';
import { CartContext } from '../components/CartContext';

const DivSuperContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  margin-top: 75px;
  width: 90%;
`;

const DivContainer = styled.div`
  margin: auto;
  width: 100%;
  display: grid;
  grid-template-columns: 67% 33%;
  gap: 50px;
  padding: 0 15px 15px 15px;
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

const TitlePageStyled = styled(TitlePage)`
  border-radius: 9999px;
  background-color: #dddbd0;
  padding: 8px;
`;

const DivCheckout = styled.div``;

const DivCart = styled.div``;

function Checkout() {
  const { cart } = useContext(CartContext);
  const prixTot = cart.reduce((acc, val) => acc + (val.price * val.quantity), 0).toFixed(2) + "€";

  return (
    <DivSuperContainer>
      <TitlePage 
        title={"Payer - " + prixTot} 
        additionalstyles={`
          border-radius: 9999px;
          background-color: var(--checkoutTitleBg);
          padding: 8px;
        `}
      />
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
