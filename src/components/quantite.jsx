import React from 'react';
import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useMediaQuery } from '@mui/material';

function camelToKebab(camelCaseString) {
    return camelCaseString
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .toLowerCase();
}

const cssParam = {
    fontSize : 20,
    width    : 24,
    height   : 24,
};

const applyBreakpoints = (breakpoints, cssProp = 'fontSize', cssPropertyUnit = 'px') => {
    if (!breakpoints) return '';

    let cssPropertyName  = camelToKebab(cssProp);
    let cssPropertyValue = cssParam[cssProp]; 

    return `
        @media (max-width: ${breakpoints.xl.maxWidth}) {
            ${cssPropertyName}: ${cssPropertyValue * breakpoints.xl.coeff}${cssPropertyUnit};
        }
        @media (max-width: ${breakpoints.lg.maxWidth}) {
            ${cssPropertyName}: ${cssPropertyValue * breakpoints.lg.coeff}${cssPropertyUnit};
        }
        @media (max-width: ${breakpoints.md.maxWidth}) {
            ${cssPropertyName}: ${cssPropertyValue * breakpoints.md.coeff}${cssPropertyUnit};
        }
        @media (max-width: ${breakpoints.sm.maxWidth}) {
            ${cssPropertyName}: ${cssPropertyValue * breakpoints.sm.coeff}${cssPropertyUnit};
        }
        @media (max-width: ${breakpoints.xs.maxWidth}) {
            ${cssPropertyName}: ${cssPropertyValue * breakpoints.xs.coeff}${cssPropertyUnit};
        }
    `;
};

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
    ${({ breakpoints }) => applyBreakpoints(breakpoints)}
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
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    background-color: var(--quantiteBg);
    color: var(--quantiteTxt);
    cursor: pointer;
    &:hover {
        background-color: var(--quantiteBgHover);
        color: var(--quantiteTxtHover);
    }
    ${({ breakpoints }) => applyBreakpoints(breakpoints, 'width')}
    ${({ breakpoints }) => applyBreakpoints(breakpoints, 'height')}
`;
const QuantiteButtonLeftContent = styled.div`
    padding: ${({ padding }) => padding || '0px'};
`;
const QuantiteButtonRightContainer = styled.div`
    position: relative;
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    background-color: var(--quantiteBg);
    color: var(--quantiteTxt);
    cursor: pointer;
    &:hover {
        background-color: var(--quantiteBgHover);
        color: var(--quantiteTxtHover);
    }
    ${({ breakpoints }) => applyBreakpoints(breakpoints, 'width')}
    ${({ breakpoints }) => applyBreakpoints(breakpoints, 'height')}
`;
const QuantiteButtonRightContent = styled.div`
    padding: ${({ padding }) => padding || '0px'};
`;
const QuantiteButtonNumberContainer = styled.div`
    display: flex;
`;
const QuantiteButtonNumberContent = styled.div`
    margin: auto;
    color: var(--quantiteNumber);
`;

const Quantite = ({ breakpoints, quantity, setQuantity, onIncrement, onDecrement }) => {

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

    let iconFontSize = 'medium';
    let padding   = '0px';

    if(breakpoints){
        const isXs = useMediaQuery(`(max-width:${breakpoints.xs.maxWidth})`);
        const isSm = useMediaQuery(`(max-width:${breakpoints.sm.maxWidth})`);
        const isMd = useMediaQuery(`(max-width:${breakpoints.md.maxWidth})`);
        const isLg = useMediaQuery(`(max-width:${breakpoints.lg.maxWidth})`);
        const isXl = useMediaQuery(`(max-width:${breakpoints.xl.maxWidth})`);
  
        if (isXs) {
        iconFontSize = 'small';
        padding   = '0';
        } else if (isSm) {
        iconFontSize = 'medium';
        padding   = '2px 0 0 0';
        } else if (isMd) {
        iconFontSize = 'medium';
        padding   = '4px 0 0 0';
        } else if (isLg) {
        iconFontSize = 'medium';
        padding   = '5px 0 0 0';
        } else if (isXl) {
        iconFontSize = 'medium';
        padding   = '5px 0 0 1px';
        }
    }

    return (
        <QuantiteContainer>
            <QuantiteTitleContainer>
                <QuantiteTitleContent breakpoints={breakpoints} >Quantité</QuantiteTitleContent>
            </QuantiteTitleContainer>
            <QuantiteButtonContainer>
                <QuantiteButtonLeftContainer breakpoints={breakpoints} onClick={decrementQuantity}>
                    <QuantiteButtonLeftContent padding={padding}><RemoveIcon fontSize={iconFontSize} /></QuantiteButtonLeftContent>
                </QuantiteButtonLeftContainer>
                <QuantiteButtonNumberContainer>
                    <QuantiteButtonNumberContent>{quantity}</QuantiteButtonNumberContent>
                </QuantiteButtonNumberContainer>
                <QuantiteButtonRightContainer breakpoints={breakpoints} onClick={incrementQuantity}>
                    <QuantiteButtonRightContent padding={padding}><AddIcon fontSize={iconFontSize} /></QuantiteButtonRightContent>
                </QuantiteButtonRightContainer>
            </QuantiteButtonContainer>
        </QuantiteContainer>
    );
};

export default Quantite;
