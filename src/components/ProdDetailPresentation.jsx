import { useState } from 'react';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Quantite from './quantite';
import AddToCartButton from './AddToCartButton';
import Reviews from './Reviews';

const mediaQueries = {
    430: '99%',
    415: '98%',
    400: '97%',
    385: '95%',
    360: '90%',
    345: '85%',
    330: '80%',
    315: '75%',
    300: '70%',
    275: '65%',
};

const generateMediaQueries = (queries) => {
    return Object.keys(queries).sort((a, b) => b - a).map(size => `
      @media (max-width: ${size}px) {
        width: ${queries[size]};
      }
    `).join('');
};

const ProduitsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ImagesProduitContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px 0 25px;
    flex-wrap: wrap;
    width: fit-content;
`;

const TitleProduit = styled.div`
    font-size: 22px;
    color: var(--prodText);
    margin-top: 20px;
`;

const PriceProduit = styled.div`
    font-size: 18px;
    color: var(--prodPrice);
`;

const DivSuperContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
`;

const DivContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    justify-content: center;
    align-items: center;
`;

const CardProduitContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const CardProduit = styled(Card)`
    width: 50%;
    margin: auto;
    background-color: var(--cardProdBg);
`;

const CardContentStyled = styled(CardContent)`
    background: linear-gradient(42deg, rgb(2, 0, 36) 0%, rgb(41, 55, 55) 55%, rgb(179, 193, 190) 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const CardProduitDescription = styled(Card)`
    background-color: #ddd;
`;

const CardProduitParameters = styled(Card)`
    background-color: #ddd;
`;

const CardMediaStyled = styled(CardMedia)`
    width: 275px;
`;

const ProduitDescription = styled(CardContent)`
    color: var(--importantContentText);
    font-size: 1rem;
`;

const AddToCartButtonStyled = styled(AddToCartButton)`
    ${generateMediaQueries(mediaQueries)}
`;

/**
 * Insère des balises <br> dans une chaîne tous les n caractères sans couper de mot.
 * 
 * @param {string} str - La chaîne de caractères originale.
 * @param {number} n - Le nombre de caractères après lequel insérer une balise <br>.
 * @returns {string} - La chaîne de caractères avec les balises <br> insérées sans couper de mot.
 */
function insertLineBreaksHTML(str, n) {
    if (n <= 0) {
        throw new Error("La valeur de n doit être supérieure à 0.");
    }

    let result = '';
    let start = 0;
    while (start < str.length) {
        let end = start + n;

        // Ne pas dépasser la longueur de la chaîne
        if (end >= str.length) {
            result += str.slice(start);
            break;
        }

        // Chercher le dernier espace avant la position end
        let lastSpace = str.lastIndexOf(' ', end);
        if (lastSpace > start) {
            result += str.slice(start, lastSpace) + '<br>';
            start = lastSpace + 1;
        } else {
            result += str.slice(start, end) + '<br>';
            start = end;
        }
    }

    return result;
}

const ProdDetailPresentation = (props) => {
    const data = props.data;
    const [quantity, setQuantity] = useState(1);
    const formattedDescription = insertLineBreaksHTML(data.description, 60);

    const breakpoints = {
        xs: {maxWidth: '450px', coeff: 0.9},
        sm: {maxWidth: '600px', coeff: 0.9},
        md: {maxWidth: '900px', coeff: 0.9},
        lg: {maxWidth: '1440px', coeff: 1},
        xl: {maxWidth: '9999px', coeff: 1.2},
      };
  
    return (
      <DivSuperContainer>
          <DivContainer>
              <AddToCartButtonStyled product={data} quantity={quantity} />
              <CardProduitContainer>
                  <CardProduit sx={{ width: 'fit-content' }}>
                      <CardContentStyled>
                        <CardProduitParameters>
                            <Quantite breakpoints={breakpoints} quantity={quantity} setQuantity={setQuantity} />
                        </CardProduitParameters>
                        <ProduitsContainer>
                            <TitleProduit>{data.title}<PriceProduit>{data.price + ' €'}</PriceProduit></TitleProduit>
                            <ImagesProduitContainer>
                                {data.images.map(image =>
                                    <CardMediaStyled key={image} sx={{ width: 300 }} component="img" image={image} alt={data.title} />
                                )}
                            </ImagesProduitContainer>
                        </ProduitsContainer>
                        <CardProduitDescription>
                            <ProduitDescription dangerouslySetInnerHTML={{ __html: formattedDescription }} />
                        </CardProduitDescription>
                      </CardContentStyled>
                  </CardProduit>
              </CardProduitContainer>
              <Reviews data={data.reviews} />
          </DivContainer>
      </DivSuperContainer>
    );
  };

export default ProdDetailPresentation;
