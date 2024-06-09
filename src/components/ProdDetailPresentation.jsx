import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Quantite from './quantite';

const ImageProduitContainer = styled.div`
    display: block;
`;
const TitleProduit = styled.div`
    font-size: 22px;
    color: var(--prodText);
    margin-top: 20px;
`;
const PriceProduit = styled.div`
    font-size: 18px;
    color: var(--prodPrice);
    margin-bottom: 20px;
`;
const CardProduitContainer = styled.div`
    display: flex;
    margin-bottom: 300px;
`;
const CardProduit = styled(Card)`
    margin: auto;
    background-color: var(--cardProdBg);
`;
const CardContentStyled = styled(CardContent)`
    background: linear-gradient(42deg, rgb(2, 0, 36) 0%, rgb(41, 55, 55) 55%, rgb(179, 193, 190) 100%);
`;
const CardProduitDescription = styled(Card)`
    background-color: #ddd;
`;
const CardProduitParameters = styled(Card)`
    background-color: #ddd;
`;
const CardMediaStyled = styled(CardMedia)`
    height: 100%;
`;
const ProduitDescription = styled(CardContent)`
    color: var(--importantContentText);
    font-size: 18px;
`;

function truncateString(str, num) {
    return str.length > num ? str.slice(0, num) + '...' : str;
}

const ProdDetailPresentation = (props) => {
  const data = props.data;

  return (
    <CardProduitContainer>
        <CardProduit sx={{ width: 500 }}>
            <CardContentStyled>
            <CardProduitParameters>
                <Quantite />
            </CardProduitParameters>
            <ImageProduitContainer>
                <TitleProduit>{truncateString(data.title, 250)}</TitleProduit>
                <CardMediaStyled height="275" component="img" image={data.images[0]} alt={data.title} />
                <PriceProduit>{data.price + ' €'}</PriceProduit>
            </ImageProduitContainer>
            <CardProduitDescription>
                <ProduitDescription>{data.description}</ProduitDescription>
            </CardProduitDescription>
            </CardContentStyled>
        </CardProduit>
    </CardProduitContainer>
  );
};

export default ProdDetailPresentation;
