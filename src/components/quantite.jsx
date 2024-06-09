import { useState } from 'react';
import styled from 'styled-components';

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
`;
const QuantiteButtonLeftContent = styled.div`
    position: absolute;
    left: 8px;
    top: -7px;
`;
const QuantiteButtonRightContainer = styled.div`
    position: relative;
    width: 25px;
    height: 25px;
    display: flex;
    border-radius: 50px;
    background-color: var(--quantiteBg);
    color: var(--quantiteTxt);
`;
const QuantiteButtonRightContent = styled.div`
    position: absolute;
    left: 5px;
    top: -4px;
`;
const QuantiteButtonNumberContainer = styled.div`
    display: flex;
`;
const QuantiteButtonNumberContent = styled.div`
    margin: auto;
    color: var(--quantiteNumber);
`;


const Quantite = () => {
    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => {
      setQuantity(prevQuantity => prevQuantity + 1);
    };
  
    const decrementQuantity = () => {
      setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    return (
        <QuantiteContainer>
            <QuantiteTitleContainer>
                <QuantiteTitleContent>Quantité</QuantiteTitleContent>
            </QuantiteTitleContainer>
            <QuantiteButtonContainer>
                <QuantiteButtonLeftContainer onClick={decrementQuantity}>
                    <QuantiteButtonLeftContent>-</QuantiteButtonLeftContent>
                </QuantiteButtonLeftContainer>
                <QuantiteButtonNumberContainer>
                    <QuantiteButtonNumberContent>1</QuantiteButtonNumberContent>
                </QuantiteButtonNumberContainer>
                <QuantiteButtonRightContainer onClick={incrementQuantity}>
                    <QuantiteButtonRightContent>+</QuantiteButtonRightContent>
                </QuantiteButtonRightContainer>
            </QuantiteButtonContainer>
        </QuantiteContainer>
    );
};

export default Quantite;
