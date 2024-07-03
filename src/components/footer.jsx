import React from 'react';
import styled from 'styled-components';
import logo from '/logo.png';
import FacebookCartIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';


const FooterContainer = styled.footer`
  padding: 20px;
  background-color: var(--menuBg);
`;
const FooterLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 900px) {
    display: block;
  }
`;
const FooterLineItemBlock = styled.div`
  display: block;
`;
const FooterLineItemBlockCenter = styled.div`
  margin-left: 72px;
  @media (max-width: 900px) {
    display: block;
    margin-left: 0px;
  }
`;
const FooterLineItemSocialMedias = styled.div`
  display: flex;
  margin-left: -242px;
  @media (max-width: 900px) {
    margin-left: 0px;
    justify-content: center;
  }
`;
const FooterLineItemTitle = styled.div`
  color: var(--importantContentText);
  font-weight: bold;
  text-align: left;
  @media (max-width: 900px) {
    text-align: center;
  }
`;
const FooterLineItemText = styled.p`
  color: var(--importantContentText);
  text-align: left;
  font-size: 12px;
  line-height: 0.8;
   @media (max-width: 900px) {
    text-align: center;
  }
`;
const FooterLineItemLink = styled.p`
  color: var(--importantContentText);
  text-decoration: underline;
  text-align: left;
  font-size: 12px;
  line-height: 0.8;
   @media (max-width: 900px) {
    text-align: center;
  }
`;
const ImgLogo = styled.img`
  width: 62px;
  @media (max-width: 900px) {
    width: 50px;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterLine>
        <FooterLineItemBlock><p>&copy; {new Date().getFullYear()} WorldCommerce. Tous droits réservés.</p></FooterLineItemBlock>
        <FooterLineItemSocialMedias>
          <a href=""><FacebookCartIcon fontSize="large"/></a>
          <a href=""><XIcon fontSize="large"/></a>
          <a href=""><XIcon fontSize="large"/></a>
          <a href=""><InstagramIcon fontSize="large"/></a>
        </FooterLineItemSocialMedias>
        <FooterLineItemBlock><ImgLogo src={logo} alt="Le logo" /></FooterLineItemBlock>
      </FooterLine>
      <FooterLine>
        <FooterLineItemBlock>
          <FooterLineItemTitle>Mentions légales</FooterLineItemTitle>
          <FooterLineItemText>Siège social : 123 Rue Exemple, 75000 Paris, France</FooterLineItemText>
          <FooterLineItemText>Téléphone : +33 1 23 45 67 89</FooterLineItemText>
          <FooterLineItemText>Email : contact@exemple.com</FooterLineItemText>
          <FooterLineItemText>RCS : Paris B 123 456 789</FooterLineItemText>
          <FooterLineItemText>Numéro de TVA intracommunautaire : FR123456789</FooterLineItemText>
        </FooterLineItemBlock>
        <FooterLineItemBlockCenter>
        <FooterLineItemTitle>Informations contractuelles</FooterLineItemTitle>
          <FooterLineItemLink>Conditions Générales de Vente</FooterLineItemLink>
          <FooterLineItemLink>Politique de Confidentialité</FooterLineItemLink>
          <FooterLineItemLink>Politique de Cookies</FooterLineItemLink>
          <FooterLineItemText><p>&copy; {new Date().getFullYear()} WorldCommerce. Tous droits réservés.</p></FooterLineItemText>
        </FooterLineItemBlockCenter>
        <FooterLineItemBlock>
        <FooterLineItemTitle>Propiété intellectuelle</FooterLineItemTitle>
          <FooterLineItemText>Les textes, images et logos présents sur ce site sont la</FooterLineItemText>
          <FooterLineItemText>propriété de WorldCommerce SARL.</FooterLineItemText>
          <FooterLineItemText>Le présent site est soumis au droit français.</FooterLineItemText>
          <FooterLineItemText>En cas de litige, les tribunaux de Paris seront seuls compétents.</FooterLineItemText>
        </FooterLineItemBlock>
      </FooterLine>
    </FooterContainer>
  );
}

export default Footer;
