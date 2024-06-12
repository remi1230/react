import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Quantite from './quantite';
import AddToCartButton from './AddToCartButton';
import Reviews from './Reviews';

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
    gap: 50px;
    margin: auto;
    justify-content: center;
`;
const CardProduitContainer = styled.div`
    display: flex;
    flex-direction: column;
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
    width: 275px;
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
    <DivSuperContainer>
        <DivContainer>
            <CardProduitContainer>
                <CardProduit sx={{ width: 'fit-content' }}>
                    <CardContentStyled>
                    <CardProduitParameters>
                        <Quantite />
                    </CardProduitParameters>
                    <ProduitsContainer>
                        <TitleProduit>{truncateString(data.title, 250)}<PriceProduit>{data.price + ' €'}</PriceProduit></TitleProduit>
                        <ImagesProduitContainer>
                            {data.images.map(image =>
                                <CardMediaStyled sx={{ width: data.images.length > 1 ? 300 : 375 }} component="img" image={image} alt={data.title} />
                            )}
                        </ImagesProduitContainer>
                    </ProduitsContainer>
                    <CardProduitDescription>
                        <ProduitDescription>{data.description}</ProduitDescription>
                    </CardProduitDescription>
                    </CardContentStyled>
                </CardProduit>
            </CardProduitContainer>
            <AddToCartButton />
            <Reviews data={data.reviews} />
        </DivContainer>
    </DivSuperContainer>
  );
};

export default ProdDetailPresentation;
