import React from 'react';
import AccueilImg from '/accueilBG.png';
import styled from 'styled-components';

const DivImgAccueil = styled.div`
    background-image: url(${AccueilImg});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100vh;
    padding-top: 21.5vh;
    display: flex;
    justify-content: center;
`;
const DivTxtAccueil = styled.div`
    background-color: var(--titleBackground);
    border-radius: 5px;
    padding: 5px;
    font-size: 36px;
    color: var(--titleText);
    width: fit-content;
    height: fit-content;
    font-weight: 900;
`;

function AccueilImage() {
  return <DivImgAccueil><DivTxtAccueil>WorldCommerce, achetez le monde !</DivTxtAccueil></DivImgAccueil>;
}

export default AccueilImage;