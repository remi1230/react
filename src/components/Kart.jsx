import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Quantite from './quantite';
import Button from '@mui/material/Button';
import TrashIcon from '@mui/icons-material/DeleteForever';

const CartContainer = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProdDetailContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 5px;
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
  background-color: var(--categorieBg);
  height: fit-content;
`;

const CardContentStyled = styled(CardContent)`
  
`;

const CartItemThumbail = styled(CardMedia)`
  flex: 3;
  width: 100px;
  background: var(--prodBg);
  border-radius: 100%;
  padding: 7px;
  border: 4px #ccc solid;
  box-shadow: 2px 2px 5px #3e3e3e;
`;

const CartItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 500px;
  gap: 20px;
`;

const CartItemTitle = styled.h5`
  color: var(--cartItemTitle);
  margin: 0;
`;

const CartItemPrice = styled.span`
  font-size: 18px;
  color: #888;
`;

const CartButton = styled(Button)`
  
`;

const TitlePanier = styled.h3`
  color: var(--titlePanier);
  margin: 10px 0 10px;
`;

const CaisseContainer = styled.div`
  display: block;
  margin-bottom: 100px;
`;

const PrixTotal = styled.div`
  display: block;
  margin-bottom: 0px;
  color: var(--titlePanier);
  font-weight: bold;
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

  let prixTot = 0;
  if(cart.length){
    prixTot = cart.reduce((acc, val) => acc + (val.price * val.quantity), 0).toFixed(2);
  }

  return (
    <CartContainer>
      <TitlePanier>Mon Panier</TitlePanier>
      {cart.length === 0 ? (
        <p>Votre panier est vide</p>
      ) : (
        cart.map((product, index) => (
          <CartItem key={product.id}>
            <ButtonContainer>
              <Button sx={{ backgroundColor: 'transparent', '&:hover': {
                  backgroundColor: 'transparent',
                  color: '--var(trashHoverColor)',
                }, }}
                variant="contained"
                onClick={() => handleRemove(product)}
              >
                <TrashIcon
                sx={{ backgroundColor: '#transparent', color: 'var(--trashBg)', '&:hover': {
                  backgroundColor: '--var(trashHoverBg)',
                  color: '--var(trashHoverColor)',
                }, }}
                fontSize="large"/>
              </Button>
            </ButtonContainer>
            <CardContentStyled>
              <ProdDetailContainer>
                <CartItemThumbail sx={{ width: '150px' }} key={index} component="img" image={product.images[0]} alt={product.title} />
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
        <CaisseContainer>
          <PrixTotal>Prix total du panier: {prixTot} €</PrixTotal>
          <CartButton sx={{ color: 'var(--addToCartTxt)', marginTop: '20px', backgroundColor: 'var(--addToCartBg)', fontWeight: 900, }} variant="contained">
            Passer à la caisse
          </CartButton>
        </CaisseContainer>
        
      )}
    </CartContainer>
  );
};

export default Cart;
