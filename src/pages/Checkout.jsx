import React, { useContext } from 'react';
import styled from 'styled-components';
import CheckoutForm from '../components/CheckoutForm';
import CheckoutCart from '../components/CheckoutCart';
import TitlePage from '../components/TitlePage';
import { CartContext } from '../components/CartContext';
import { userConnectInfos } from '../services/authInfos';

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

const LineSeparator = styled.hr`
  width: 50%;
  margin-bottom: 20px;
  border: 0;
  height: 1px;
  background: #333;
  background-image: linear-gradient(to right, #ccc, #333, #ccc);
`;

const DivCheckout = styled.div``;

const DivCart = styled.div``;

function Checkout() {
  const { cart }     = useContext(CartContext);
  const { username } = userConnectInfos();

  const cartUser = cart.filter(prod => prod.username === username);
  const prixTot  = cartUser.reduce((acc, val) => acc + (val.price * val.quantity), 0).toFixed(2) + "€";

  return (
    <DivSuperContainer>
      <TitlePage 
        title={username + " - payer " + prixTot} 
        additionalstyles={`
          border-radius: 15px;
          padding: 8px;
          font-size: 22px;
          margin-bottom: 0;
        `}
      />
      <LineSeparator />
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
