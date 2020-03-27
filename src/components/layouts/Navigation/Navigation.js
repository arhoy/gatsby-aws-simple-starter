import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import { MobileMenu } from './MobileMenu';
import NoStyleLink from '../../Links/NoStyleLink';
import { BurgerSVG3 } from './Burger3';

const Header = styled.header`
  position: relative;
  padding: 3rem 0;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const HeaderTop = styled.div`
  grid-column: 1/-1;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const LogoLink = styled(Link)`
  padding: 0;
  margin: 0;
`;
const Logo = styled.span`
  z-index: 100;
  & ${LogoLink} {
    text-decoration: none !important;
    font-weight: bold;
    font-size: 2rem;
    letter-spacing: 4px;
    color: ${props => props.theme.colors.white};
  }
`;

const MenuLinks = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 1.5rem;
  align-items: center;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    display: none;
  }
`;

const CustomLink = styled(NoStyleLink)`
  overflow: hidden;
  display: inline;
  position: relative;

  font-size: 2rem;
  color: ${props => props.theme.colors.white};
  margin: 1rem;
  &::before {
    content: '';
    position: absolute;
    right: 0;
    width: 0;
    bottom: 0px;
    background: ${props => props.theme.colors.white};
    height: 2px;
    transition-property: width;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }
  &:hover,
  &:focus,
  &:active {
    &::before {
      left: 0;
      right: auto;
      width: 100%;
    }
  }
`;

const BurgerIconContainer = styled.div`
  z-index: 100;
  cursor: pointer;
  width: 40px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: ${props => props.theme.screenSize.mobileL}) {
    display: none;
  }
`;

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenu] = useState(false);

  const mobileMenuHandler = () => {
    setMobileMenu(prevState => !prevState);
  };

  return (
    <>
      <Header>
        <HeaderTop>
          <Logo>
            <LogoLink to="/">AWS GATSBY STATER</LogoLink>
          </Logo>

          <MenuLinks>
            <CustomLink className="underline" to="/about">
              About
            </CustomLink>
            <CustomLink className="underline" to="/app">
              Dashboard
            </CustomLink>
            <CustomLink className="underline" to="/blog">
              Blog
            </CustomLink>
            <CustomLink className="underline" to="/contact">
              Contact
            </CustomLink>
          </MenuLinks>
          <BurgerIconContainer onClick={mobileMenuHandler}>
            <BurgerSVG3 open={mobileMenuOpen} />
          </BurgerIconContainer>
        </HeaderTop>
      </Header>
      {mobileMenuOpen && <MobileMenu />}
    </>
  );
};
