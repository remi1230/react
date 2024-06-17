import React, { useState, useContext } from 'react';
import { purple, red } from '@mui/material/colors';
import { CartContext } from './CartContext';
import styled from 'styled-components';
import Button from '@mui/material/Button';

const primary = red[500];

const AddToCartButt = styled(Button)`
    width: 400px;
    font-size: 18px;
    background-color: var(--addToCartBg);
    color: var(--addToCartTxt);
    font-weight: bold;
    margin: auto;
    margin-top: -25px;
    ${props => props.styles}
    ${props => props.mediaQueries}
`;

const AddToCartButton = ({ product, quantity, className, mediaQueries }) => {
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
      sx={{ backgroundColor: primary }}
      onClick={handleClick}
      className={className}
      mediaQueries={mediaQueries}
    >
      {buttonText}
    </AddToCartButt>
  );
};

export default AddToCartButton;
