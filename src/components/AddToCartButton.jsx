import styled from 'styled-components';
import Button from '@mui/material/Button';

const AddToCartButt = styled(Button)`
    width: 400px;
    font-size: 18px;
`;

const AddToCartButton = () => {
  return (
    <AddToCartButt variant="contained" color="primary"
        style={{ margin: 'auto', marginTop: '25px', backgroundColor: 'var(--addToCartBg)', color: 'var(--addToCartTxt)', fontWeight: 'bold' }}>
            + PANIER
        </AddToCartButt>
  );
};

export default AddToCartButton;
