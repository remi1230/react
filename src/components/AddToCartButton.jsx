import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import * as colors from '@mui/material/colors';
import { CartContext } from './CartContext';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { userConnectInfos } from '../services/authInfos';

const AddToCartButt = styled(Button)`
    width: 400px;
    font-size: 18px;
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
  const navigate = useNavigate();

  const handleClick = () => {
    const { isAuthenticated, username } = userConnectInfos();
    
    if(isAuthenticated){
      if (isInCart) {
        removeFromCart(product);
        setButtonText("+ PANIER");
      } else {
        addToCart({ ...product, quantity, username });
        setButtonText("- PANIER");
      }
      setIsInCart(!isInCart);
    }
    else{
      navigate('/login');
    }
  };

  return (
    <AddToCartButt
      variant="contained"
      sx={{
          fontWeight      : 600,
          color           : colors.deepOrange[400],
          backgroundColor : colors.blueGrey[100],
          '&:hover':
          {
            color           : colors.deepOrange[500],
            backgroundColor : colors.blueGrey[200],
            cursor          : 'pointer',
          },
      }}
      onClick={handleClick}
      className={className}
      mediaQueries={mediaQueries}
    >
      {buttonText}
    </AddToCartButt>
  );
};

export default AddToCartButton;
