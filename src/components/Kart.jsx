import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Quantite from './quantite';
import Button from '@mui/material/Button';

const CartContainer = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const ProdDetailContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
`;

const CartItem = styled(Card)`
  position: relative;
  display: flex;
  height: 400px;
  margin-bottom: 20px;
  width: 80%;
  justify-content: space-between;
  align-items: center;
`;

const CardContentStyled = styled(CardContent)`
  
`;

const CartItemThumbail = styled(CardMedia)`
  width: 100px;
`;

const CartItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  flex-grow: 1;
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
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  const handleIncrement = (productId, currentQuantity) => {
    const newQuantity = currentQuantity + 1;
    updateQuantity(productId, newQuantity);
  };

  const handleDecrement = (productId, currentQuantity) => {
    const newQuantity = currentQuantity > 1 ? currentQuantity - 1 : 1;
    updateQuantity(productId, newQuantity);
  };

  return (
    <CartContainer>
      <h2>Mon Panier</h2>
      {cart.length === 0 ? (
        <p>Votre panier est vide</p>
      ) : (
        cart.map((product, index) => (
          <CartItem key={product.id}>
            <ButtonContainer>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleRemove(product)}
              >
                Retirer
              </Button>
            </ButtonContainer>
            <CardContentStyled>
              <ProdDetailContainer>
                <CartItemThumbail key={index} component="img" image={product.images[0]} alt={product.title} />
                <CartItemDetails>
                  <CartItemTitle>{product.title}</CartItemTitle>
                  <CartItemPrice>Prix unitaire: {product.price.toFixed(2)} €</CartItemPrice>
                  <Quantite
                    quantity={product.quantity}
                    setQuantity={(newQuantity) => updateQuantity(product.id, newQuantity)}
                    onIncrement={() => handleIncrement(product.id, product.quantity)}
                    onDecrement={() => handleDecrement(product.id, product.quantity)}
                  />
                  <CartItemPrice>Prix total: {(product.price * product.quantity).toFixed(2)} €</CartItemPrice>
                </CartItemDetails>
              </ProdDetailContainer>
            </CardContentStyled>
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
