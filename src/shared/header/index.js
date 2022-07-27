import React from 'react';
import { useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { faList } from '@fortawesome/free-solid-svg-icons';
import {  faBookmark } from '@fortawesome/free-regular-svg-icons';

import NavButton from '../../components/buttons/navButton';
import { POSITONS_TOOLTIP, ROUTES } from '../../shared/constants';
import logoImage from '../../assets/logo.png';

import './header.scss';

const Header = () => {
  const navigate = useNavigate();

  const handleNav = () => {
    navigate(ROUTES.HOME);
  };

  return (
    <div className="container-header">
      <Navbar bg="light">
        <Container>
          <Navbar.Text onClick={handleNav}>
            <img src={logoImage} alt="books store logo" height="50"/>
            <span className="title">Books Store</span>
          </Navbar.Text>
          <Navbar.Collapse className="justify-content-end">
            <NavButton 
              positionTooltip={POSITONS_TOOLTIP.BOTTOM}
              messageTooltip="Go to book list"
              icon={faList}
              iconSize="xl"
              path={ROUTES.HOME}
            />
            <NavButton 
              positionTooltip={POSITONS_TOOLTIP.BOTTOM}
              messageTooltip="Go to your favorites books"
              icon={faBookmark}
              iconSize="xl"
              path={ROUTES.WISHLIST}
            />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
};

export default Header;
