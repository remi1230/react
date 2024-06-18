import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import TitlePage from './TitlePage';

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const CartItemDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const CartItemTitle = styled.h3`
  margin: 0;
`;

const CartItemPrice = styled.span`
  color: #888;
`;

const CartButton = styled(Button)`
  margin-top: 20px;
`;

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  return (
    <CartContainer>
      <h2>Mon Paniers</h2>
      {cart.length === 0 ? (
        <p>Votre panier est vide</p>
      ) : (
        cart.map(product => (
          <CartItem key={product.id}>
            <CartItemDetails>
              <CartItemTitle>{product.title}</CartItemTitle>
              <CartItemPrice>{product.price} €</CartItemPrice>
            </CartItemDetails>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleRemove(product)}
            >
              Retirer
            </Button>
          </CartItem>
        ))
      )}
      {cart.length > 0 && (
        <CartButton variant="contained" color="primary">
          Passer à la caisse
        </CartButton>
      )}
    </CartContainer>
  );
};

export default Cart;
