import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '/logo.png';

const MenuLogoLink = styled(Link)`
  text-decoration: none;
  @media (max-width: 900px) {
    position: absolute;
    top: 0;
    right: 0;
  }
`;
const ImgLogo = styled.img`
  @media (max-width: 900px) {
    width: 50px;
  }
`;
const MenuIconLink = styled(Link)`
  text-decoration: none;
`;
const MenuTextLink = styled(Link)`
  text-decoration: none;
  font-size: 24px;
  color: var(--importantContentText);
`;
const ItemMenuContainerFirstLine = styled.div`
  padding-left: 15px;
`;
const ItemMenuContainerSecondLine = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 112px;
  margin-left: 112px;

  @media (max-width: 900px) {
    flex-direction: column;
    margin-left: 0;
    gap: 20px;
  }
`;
const ItemMenuContainerThirdLine = styled.div`
  gap: 15px;
  margin-right: 15px;

  @media (max-width: 900px) {
    flex-direction: column;
    margin-right: 0;
  }
`;
const SpanIcon = styled.span`
  font-size: 36px;
`;
const NavMenu = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--menuBg);
`;
const UlMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    display: ${({ open }) => (open ? 'flex' : 'none')};
    gap: 20px;
    padding-bottom: 15px;
  }
`;
const LiIconMenu = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const Burger = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 10;

  div {
    width: 30px;
    height: 3px;
    background: white;
    border-radius: 5px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  @media (max-width: 900px) {
    display: flex;
  }
`;

function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <NavMenu>
      <Burger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </Burger>
      <UlMenu open={open}>
        <ItemMenuContainerFirstLine>
          <li>
            <MenuLogoLink to="/"><ImgLogo src={logo} alt="Le logo" /></MenuLogoLink>
          </li>
        </ItemMenuContainerFirstLine>
        <ItemMenuContainerSecondLine>
          <li>
            <MenuTextLink to="/produits">Produits</MenuTextLink>
          </li>
          <li>
            <MenuTextLink to="/categories">Catégories</MenuTextLink>
          </li>
        </ItemMenuContainerSecondLine>
        <ItemMenuContainerThirdLine>
          <LiIconMenu>
            <MenuIconLink to="/favorite"><SpanIcon className="material-icons">favorite</SpanIcon></MenuIconLink>
            <MenuIconLink to="/contact"><SpanIcon className="material-icons">alternate_email</SpanIcon></MenuIconLink>
            <MenuIconLink to="/cart"><SpanIcon className="material-icons">shopping_cart</SpanIcon></MenuIconLink>
            <MenuIconLink to="/connexion"><SpanIcon className="material-icons">account_circle</SpanIcon></MenuIconLink>
          </LiIconMenu>
        </ItemMenuContainerThirdLine>
      </UlMenu>
    </NavMenu>
  );
}

export default Navigation;