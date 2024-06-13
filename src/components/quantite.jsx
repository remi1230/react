import React from 'react';
import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const QuantiteContainer = styled.div`
    display: block;
    padding: 5px;
`;
const QuantiteTitleContainer = styled.div`
    display: flex;
    margin-bottom: 5px;
`;
const QuantiteTitleContent = styled.div`
    margin: auto;
    color: var(--quantiteTitle);
    font-size: 20px;
`;
const QuantiteButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 12px;
`;
const QuantiteButtonLeftContainer = styled.div`
    position: relative;
    width: 25px;
    height: 25px;
    display: flex;
    border-radius: 50px;
    background-color: var(--quantiteBg);
    color: var(--quantiteTxt);
    cursor: pointer;
    &:hover {
        background-color: var(--quantiteBgHover);
        color: var(--quantiteTxtHover);
    }
`;
const QuantiteButtonLeftContent = styled.div`
    position: absolute;
    left: 1px;
    top: -1px;
`;
const QuantiteButtonRightContainer = styled.div`
    position: relative;
    width: 25px;
    height: 25px;
    display: flex;
    border-radius: 50px;
    background-color: var(--quantiteBg);
    color: var(--quantiteTxt);
    cursor: pointer;
    &:hover {
        background-color: var(--quantiteBgHover);
        color: var(--quantiteTxtHover);
    }
`;
const QuantiteButtonRightContent = styled.div`
    position: absolute;
    left: 1px;
    top: -2px;
`;
const QuantiteButtonNumberContainer = styled.div`
    display: flex;
`;
const QuantiteButtonNumberContent = styled.div`
    margin: auto;
    color: var(--quantiteNumber);
`;

const Quantite = ({ quantity, setQuantity, onIncrement, onDecrement }) => {

    const incrementQuantity = () => {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      if (onIncrement) onIncrement(newQuantity);
    };
  
    const decrementQuantity = () => {
      const newQuantity = quantity > 1 ? quantity - 1 : 1;
      setQuantity(newQuantity);
      if (onDecrement) onDecrement(newQuantity);
    };

    return (
        <QuantiteContainer>
            <QuantiteTitleContainer>
                <QuantiteTitleContent>Quantité</QuantiteTitleContent>
            </QuantiteTitleContainer>
            <QuantiteButtonContainer>
                <QuantiteButtonLeftContainer onClick={decrementQuantity}>
                    <QuantiteButtonLeftContent><RemoveIcon /></QuantiteButtonLeftContent>
                </QuantiteButtonLeftContainer>
                <QuantiteButtonNumberContainer>
                    <QuantiteButtonNumberContent>{quantity}</QuantiteButtonNumberContent>
                </QuantiteButtonNumberContainer>
                <QuantiteButtonRightContainer onClick={incrementQuantity}>
                    <QuantiteButtonRightContent><AddIcon /></QuantiteButtonRightContent>
                </QuantiteButtonRightContainer>
            </QuantiteButtonContainer>
        </QuantiteContainer>
    );
};

export default Quantite;
