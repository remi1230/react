import React, { useState, useContext } from 'react';
import { CartContext } from './CartContext';
import styled from 'styled-components';
import Button from '@mui/material/Button';

const AddToCartButt = styled(Button)`
    width: 400px;
    font-size: 18px;
`;

const AddToCartButton = ({ product, quantity }) => {
  const { addToCart, removeFromCart, cart } = useContext(CartContext);
  const [isInCart, setIsInCart] = useState(cart.some(item => item.id === product.id));
  const [buttonText, setButtonText] = useState(isInCart ? "- PANIER" : "+ PANIER");

  const handleClick = () => {
    if (isInCart) {
      removeFromCart(product);
      setButtonText("+ PANIER");
    } else {
      addToCart({ ...product, quantity });
      setButtonText("- PANIER");
    }
    setIsInCart(!isInCart);
  };

  return (
    <AddToCartButt
      variant="contained"
      color="primary"
      style={{
        margin: 'auto',
        marginTop: '-25px',
        backgroundColor: 'var(--addToCartBg)',
        color: 'var(--addToCartTxt)',
        fontWeight: 'bold'
      }}
      onClick={handleClick}
    >
      {buttonText}
    </AddToCartButt>
  );
};

export default AddToCartButton;
