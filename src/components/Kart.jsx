import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';
import { AuthContext } from './AuthContext';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Quantite from './quantite';
import Button from '@mui/material/Button';
import TrashIcon from '@mui/icons-material/DeleteForever';

const CartContainer = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProdDetailContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonContainer = styled.div`
  align-self: end;
`;

const CartItem = styled(Card)`
  position: relative;
  display: flex;
  height: 400px;
  margin-bottom: 20px;
  padding-right: 0px;
  width: 80%;
  justify-content: space-between;
  align-items: center;
  background-color: var(--categorieBg);
  height: fit-content;
  @media (max-width: 912px) {
    width: 70%;
    padding-right: 10px;
  }
  @media (max-width: 612px) {
    width: 60%;
  }
  @media (max-width: 472px) {
    width: 50%;
  }
  @media (max-width: 372px) {
    width: 45%;
  }
`;

const CardContentStyled = styled(CardContent)`
  display: grid;
  grid-template-columns: 90% 10%;
  width: 100%;
`;

const CartItemThumbail = styled(CardMedia)`
  flex: 3;
  width: 100px;
  background: var(--prodBg);
  border-radius: 100%;
  padding: 7px;
  border: 4px #ccc solid;
  box-shadow: 2px 2px 5px #3e3e3e;
`;

const CartItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 500px;
  gap: 20px;
`;

const CartItemTitle = styled.h5`
  color: var(--cartItemTitle);
  margin: 0;
  @media (max-width: 900px) {
        font-size: 18px; 
  }
  @media (max-width: 600px) {
        font-size: 16px; 
  }
`;

const CartItemPrice = styled.span`
  font-size: 18px;
  color: #888;
  @media (max-width: 900px) {
        font-size: 16px; 
  }
  @media (max-width: 600px) {
        font-size: 14px; 
  }
`;

const CartButton = styled(Button)`
  
`;

const TitlePanier = styled.h3`
  color: var(--titlePanier);
  margin: 10px 0 10px;
`;

const CaisseContainer = styled.div`
  display: block;
  margin-bottom: 100px;
`;

const PrixTotal = styled.div`
  display: block;
  margin-bottom: 0px;
  color: var(--titlePanier);
  font-weight: bold;
  @media (max-width: 900px) {
        font-size: 24px; 
  }
  @media (max-width: 600px) {
        font-size: 20px; 
  }
`;

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

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
    if (!isAuthenticated) {
      navigate('/login', { state: { from: { pathname: '/checkout' } } });
    } else {
      navigate('/checkout');
    }
  };

  let prixTot = 0;
  if(cart.length){
    prixTot = cart.reduce((acc, val) => acc + (val.price * val.quantity), 0).toFixed(2);
  }

  const breakpoints = {
    xs: {maxWidth: '450px', coeff: 0.8},
    sm: {maxWidth: '600px', coeff: 0.9},
    md: {maxWidth: '900px', coeff: 1},
    lg: {maxWidth: '1440px', coeff: 1.3},
    xl: {maxWidth: '9999px', coeff: 1.6},
  };

  return (
    <CartContainer>
      <TitlePanier>Mon Panier</TitlePanier>
      {cart.length === 0 ? (
        <p>Votre panier est vide</p>
      ) : (
        cart.map((product, index) => (
          <CartItem key={product.id}>
            <CardContentStyled>
              <ProdDetailContainer>
                <CartItemThumbail sx={{ width: {
                  xs: '75px',
                  sm: '100px',
                  md: '120px',
                  lg: '135px',
                  xl: '150px',
                }, }} key={index} component="img" image={product.thumbnail} alt={product.title} />
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
                  <CartItemPrice>Prix total: {(product.price * product.quantity).toFixed(2)} €</CartItemPrice>
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
                    xs: '20px',  // taille de l'icône pour les écrans extra-small (mobile)
                    sm: '24px',  // taille de l'icône pour les écrans small (tablette)
                    md: '28px',  // taille de l'icône pour les écrans medium (bureau)
                    lg: '32px',  // taille de l'icône pour les écrans large (bureau large)
                    xl: '36px',  // taille de l'icône pour les écrans extra-large (bureau très large)
                  },
                }}/>
                </Button>
              </ButtonContainer>
            </CardContentStyled>
          </CartItem>
        ))
      )}
      {cart.length > 0 && (
        <CaisseContainer>
          <PrixTotal>Prix total du panier: {prixTot} €</PrixTotal>
          <CartButton sx={{ color: 'var(--addToCartTxt)', marginTop: '20px', backgroundColor: 'var(--addToCartBg)', fontWeight: 900, }} variant="contained" onClick={handleCheckout}>
            Passer à la caisse
          </CartButton>
        </CaisseContainer>
        
      )}
    </CartContainer>
  );
};

export default Cart;
