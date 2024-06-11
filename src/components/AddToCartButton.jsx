import { useState } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';

const AddToCartButt = styled(Button)`
    width: 400px;
    font-size: 18px;
`;

const AddToCartButton = () => {
  const [buttonText, setButtonText] = useState("+ PANIER");

  const handleClick = () => {
    setButtonText(prevText => (prevText === "+ PANIER" ? "- PANIER" : "+ PANIER"));
  };
  
  return (
    <AddToCartButt variant="contained" color="primary"
        style={{ margin: 'auto', marginTop: '-25px', backgroundColor: 'var(--addToCartBg)', color: 'var(--addToCartTxt)', fontWeight: 'bold' }} onClick={handleClick}>
            {buttonText}
        </AddToCartButt>
  );
};

export default AddToCartButton;
