import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Tooltip } from '@mui/material';

const ImageProduitContainer = styled.div`
    display: block;
`;
const TitleProduit = styled.div`
    font-size: 16px;
    color: var(--prodText);
    margin: 12px 0 12px;
`;
const PriceProduit = styled.div`
    font-size: 16px;
    color: var(--prodPrice);
    margin-bottom: 12px;
`;
const CardProduit = styled(Card)`
    background-color: var(--cardProdBg);
`;
const CardContentStyled = styled(CardContent)`
    background: linear-gradient(42deg, rgb(2, 0, 36) 0%, rgb(41, 55, 55) 55%, rgb(179, 193, 190) 100%);
`;

function truncateString(str, num) {
    return str.length > num ? str.slice(0, num) + '...' : str;
}

const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .MuiTooltip-tooltip`]: {
      fontSize        : '0.8rem',
      fontWeight      : '700',
      lineHeight      : 1.5,
      color           : 'var(--customTooltipText)',
      backgroundColor : 'var(--customTooltipBg)',
    },
}));

const ProdPresentation = (props) => {
  const navigate = useNavigate();

  const handleImageClick = (id) => {
      navigate(`/produit/${id}`);
  };

  return (
    <CardProduit key={props.id} sx={{ width: 275 }}  onClick={() => handleImageClick(props.id)} style={{ cursor: 'pointer' }}>
        <CardContentStyled>
          <CustomTooltip title={props.description} arrow placement="top"enterDelay={500} leaveDelay={200} >
            <ImageProduitContainer>
                <TitleProduit>{truncateString(props.title, 25)}</TitleProduit>
                <CardMedia height="275" component="img" image={props.image} alt={props.title} />
                <PriceProduit>{props.price + ' €'}</PriceProduit>
            </ImageProduitContainer>
          </CustomTooltip>
        </CardContentStyled>
    </CardProduit>
  );
};

export default ProdPresentation;
