import React from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './buttons.scss';

const NavButton = ({
  positionTooltip,
  messageTooltip,
  externalUrl,
  icon,
  iconSize,
  path,
}) => {
  const navigate = useNavigate();

  const handleNav = () => {
    navigate(path);
  };

  return(
    <div className="nav-button">
      <OverlayTrigger
        placement={positionTooltip}
        overlay={
          <Tooltip>{messageTooltip}</Tooltip>
        }
      >
        {externalUrl ? (
          <Navbar.Brand href={externalUrl}>
            <FontAwesomeIcon icon={icon} size={iconSize} />
          </Navbar.Brand>
        ): (
          <Navbar.Text onClick={handleNav} >
            <FontAwesomeIcon
              icon={icon}
              size={iconSize}
              className="nav-button__icon"
            />
          </Navbar.Text>
        )}
      </OverlayTrigger>
    </div>
  );
};

export default NavButton;