import { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from './CartContext';
import Card from '@mui/material/Card';
import { CardContent, Tooltip } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import { userConnectInfos } from '../services/authInfos';

const Title = styled.h5`
    color: var(--contactFieldTxt);
    font-weight: 600;
    margin: 0 0 55px;
`;

const ProdDetailContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CartItem = styled(Card)`
  position: relative;
  display: flex;
  width: 90%;
  height: 200px;
  margin-bottom: 20px;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
  @media (max-width: 1225px) {
    width: 85%;
    padding-right: 10px;
  }
  @media (max-width: 912px) {
    width: 80%;
    padding-right: 10px;
  }
  @media (max-width: 612px) {
    width: 80%;
  }
  @media (max-width: 580px) {
    width: 97%;
  }
`;

const CardContentStyled = styled(CardContent)`
  display: grid;
  grid-template-columns: 95% 5%;
  width: 100%;
  @media (max-width: 1600px) {
    grid-template-columns: 95% 5%;
  }
`;

const CartItemThumbail = styled(CardMedia)`
  flex: 1;
  width: 50px;
  background: var(--prodBg);
  border-radius: 100%;
  padding: 7px;
  border: 4px #ccc solid;
  box-shadow: 2px 2px 5px #3e3e3e;
  cursor: pointer;
`;

const CartItemDetails = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  gap: 20px;
  @media (max-width: 612px) {
    width: 252px;
    justify-self: end;
    }
  }
`;

const CartItemTitle = styled.h5`
  color: var(--cartItemTitle);
  margin: 0;
  font-size: 16px;
  @media (max-width: 900px) {
        font-size: 16px; 
  }
  @media (max-width: 612px) {
        font-size: 14px; 
  }
  @media (max-width: 450px) {
        font-size: 12px; 
  }
`;

const CartItemPrice = styled.span`
  font-size: 14px;
  color: #888;
  @media (max-width: 900px) {
        font-size: 14px; 
  }
  @media (max-width: 612px) {
        font-size: 14px; 
  }
`;

const QuantiteContainer = styled.div`
    position: absolute;
    top: 5px;
    right: 5px;
    display: flex;
    width: 20px; 
    height: 20px; 
    border-radius: 9999px;
    background-color: var(--quantiteBg);
    color: var(--quantiteTxt);
`;

const QuantiteNumber = styled.div`
    margin: auto;
    width: 20px; 
    height: 20px; 
    border-radius: 9999px;
    background-color: var(--quantiteBg);
    color: var(--quantiteTxt);
    font-size: 0.9rem;
`;

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .MuiTooltip-tooltip`]: {
    fontSize        : '0.8rem',
    fontWeight      : '700',
    color           : 'var(--customTooltipText)',
    backgroundColor : 'var(--customTooltipBg)',
  },
}));


const CheckoutCart = () => {
    const { cart }     = useContext(CartContext);
    const { username } = userConnectInfos();
    const cartUser     = cart.filter(prod => prod.username === username);
  
    return (
      <div>
        <Title>Mon panier</Title>
        {
          cartUser.map((product, index) => (
            <CartItem key={product.id}
            sx={{ backgroundColor: ' background: rgb(2,0,36); background: var(--cartItemBg); ' }}>
                <QuantiteContainer>
                    <QuantiteNumber>{product.quantity}</QuantiteNumber>
                </QuantiteContainer>
                <CardContentStyled>
                <ProdDetailContainer>
                  <CustomTooltip title={product.description} arrow placement="top"enterDelay={500} leaveDelay={200} >
                    <CartItemThumbail sx={{ width: {
                          xs: '50px',
                          sm: '60px',
                          md: '70px',
                          lg: '85px',
                          xl: '100px',
                      }, }} key={index} component="img" image={product.thumbnail} alt={product.title} />
                  </CustomTooltip>
                  <CartItemDetails>
                    <CartItemTitle>{product.title}</CartItemTitle>
                    <CartItemPrice>Prix unitaire: {product.price.toFixed(2)} €</CartItemPrice>
                    <CartItemPrice>Prix total: {(product.price * product.quantity).toFixed(2) + ' €'}</CartItemPrice>
                  </CartItemDetails>
                </ProdDetailContainer>
                </CardContentStyled>
          </CartItem>
        ))
      }
      </div>
    );
  };
  
 
  export default CheckoutCart;