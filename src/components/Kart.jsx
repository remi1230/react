import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import { useMediaQuery, CardContent, Tooltip } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Quantite from './quantite';
import Button from '@mui/material/Button';
import TrashIcon from '@mui/icons-material/DeleteForever';
import TitlePage from './TitlePage';
import { userConnectInfos } from '../services/authInfos';

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProdDetailContainer = styled.div`
  display: grid;
  grid-template-columns: 12.5% 87.5%;
  align-items: center;
  @media (max-width: 912px) {
    grid-template-columns: 4% 96%;
  }
  @media (max-width: 612px) {
    grid-template-columns: 0% 100%;
  }
  @media (max-width: 472px) {
    grid-template-columns: 0% 100%;
  }
  @media (max-width: 372px) {
    grid-template-columns: 0% 100%;
  }
`;

const ButtonContainer = styled.div`
  align-self: end;
  justify-self: end;
`;

const CartItem = styled(Card)`
  position: relative;
  display: flex;
  height: 400px;
  margin-bottom: 20px;
  padding-right: 0px;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
  @media (max-width: 912px) {
    width: 80%;
    padding-right: 10px;
  }
  @media (max-width: 612px) {
    width: 80%;
  }
  @media (max-width: 472px) {
    width: 80%;
  }
  @media (max-width: 372px) {
    width: 85%;
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
  width: 100px;
  background: var(--prodBg);
  border-radius: 100%;
  padding: 7px;
  border: 4px #ccc solid;
  box-shadow: 2px 2px 5px #3e3e3e;
  cursor: pointer;
`;

const CartItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 500px;
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
  font-size: 22px;
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
  font-size: 18px;
  color: #888;
  @media (max-width: 900px) {
        font-size: 16px; 
  }
  @media (max-width: 612px) {
        font-size: 14px; 
  }
`;

const CartButton = styled(Button)`
  
`;

const CaisseContainer = styled.div`
  display: block;
  margin-bottom: 100px;
`;

const PrixTotal = styled.div`
  display: block;
  font-weight: 600;
  margin-bottom: 0px;
  color: var(--categorieTitle);
  font-weight: bold;
  @media (max-width: 900px) {
        font-size: 24px; 
  }
  @media (max-width: 612px) {
        font-size: 20px; 
  }
`;

const ParaphEmptyKart = styled.p`
  color: var(--categorieTitle);
  margin-bottom: 600px;
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

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const { username }                             = userConnectInfos();

  const cartUser = cart.filter(prod => prod.username === username);

  const navigate = useNavigate();
  const matches = useMediaQuery("@media (max-width:360px)");

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  const handleIncrement = (productId, currentQuantity) => {
    const newQuantity = currentQuantity + 1;
    updateQuantity(productId, newQuantity);
  };

  const handleDecrement = (productId, currentQuantity) => {
    const newQuantity = currentQuantity > 1 ? currentQuantity - 1 : 1;
    updateQuantity(productId, newQuantity);
  };

  const handleCheckout = () => {
    if (!localStorage.user) {
      navigate('/login', { state: { from: { pathname: '/checkout' } } });
    } else {
      navigate('/checkout');
    }
  };

  let prixTot = 0;
  if(cartUser.length){
    prixTot = cartUser.reduce((acc, val) => acc + (val.price * val.quantity), 0).toFixed(2);
  }

  const breakpoints = {
    xs: {maxWidth: '450px', coeff: 0.7},
    sm: {maxWidth: '600px', coeff: 0.8},
    md: {maxWidth: '900px', coeff: 0.9},
    lg: {maxWidth: '1440px', coeff: 1},
    xl: {maxWidth: '9999px', coeff: 1.2},
  };

  const handleImageClick = (id) => {
    navigate(`/produit/${id}`);
  };

  const kartPrixTotal = cartUser.reduce((acc, val) => acc + (val.price * val.quantity), 0).toFixed(2) + " €";

  return (
    <CartContainer>
      {cartUser.length !== 0 ? (<TitlePage title={"Mon Panier - " + kartPrixTotal} />) : (undefined)}
      {cartUser.length === 0 ? (
        <ParaphEmptyKart>Votre panier est vide</ParaphEmptyKart>
      ) : (
        cartUser.map((product, index) => (
          <CartItem key={product.id}
          sx={{ backgroundColor: ' background: rgb(2,0,36); background: var(--cartItemBg); ' }}>
            <CardContentStyled sx={matches ? { paddingRight: 0, paddingLeft: '4px' } : {}}>
              <ProdDetailContainer>
                <CustomTooltip title={product.description} arrow placement="top"enterDelay={500} leaveDelay={200} >
                  <CartItemThumbail onClick={() => handleImageClick(product.id)} sx={{ width: {
                    xs: '100px',
                    sm: '110px',
                    md: '120px',
                    lg: '135px',
                    xl: '150px',
                  }, }} key={index} component="img" image={product.thumbnail} alt={product.title} />
                </CustomTooltip>
                <CartItemDetails>
                  <CartItemTitle>{product.title}</CartItemTitle>
                  <CartItemPrice>Prix unitaire: {product.price.toFixed(2)} €</CartItemPrice>
                  <Quantite
                    breakpoints={breakpoints}
                    quantity={product.quantity}
                    setQuantity={(newQuantity) => updateQuantity(product.id, newQuantity)}
                    onIncrement={() => handleIncrement(product.id, product.quantity)}
                    onDecrement={() => handleDecrement(product.id, product.quantity)}
                  />
                  <CartItemPrice>Prix total: {(product.price * product.quantity).toFixed(2) + ' €'}</CartItemPrice>
                </CartItemDetails>
              </ProdDetailContainer>
              <ButtonContainer>
                <Button sx={{ minWidth: 'unset',
                    width: {
                      xs: '15px',
                      sm: '20px',
                      md: '30px',
                      lg: '40px',
                      xl: '50px',
                    },
                    backgroundColor: 'transparent', '&:hover': {
                    backgroundColor: 'transparent',
                    color: '--var(trashHoverColor)',
                  }, }}
                  variant="contained"
                  onClick={() => handleRemove(product)}
                >
                  <TrashIcon
                  sx={{ backgroundColor: '#transparent', color: 'var(--trashBg)', '&:hover': {
                    backgroundColor: '--var(trashHoverBg)',
                    color: '--var(trashHoverColor)',
                  },
                  fontSize: {
                    xs: '20px',
                    sm: '24px',
                    md: '28px',
                    lg: '32px',
                    xl: '36px',
                  },
                }}/>
                </Button>
              </ButtonContainer>
            </CardContentStyled>
          </CartItem>
        ))
      )}
      {cartUser.length > 0 && (
        <CaisseContainer>
          <PrixTotal sx={{fontWeight: 600}}>Prix total du panier: {prixTot} €</PrixTotal>
          <CartButton sx={{ color: 'var(--addToCartTxt)', marginTop: '20px', backgroundColor: 'var(--addToCartBg)', fontWeight: 900, }} variant="contained" onClick={handleCheckout}>
            Passer à la caisse
          </CartButton>
        </CaisseContainer>
        
      )}
    </CartContainer>
  );
};

export default Cart;
