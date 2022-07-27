import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'; 
import {faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons';

import NavButton from '../../components/buttons/navButton';

import { POSITONS_TOOLTIP } from '../../shared/constants';
import { linkedinPath, githubPath} from './constants';

import './footer.scss';

const Footer = () => {
  return (
    <div className="footer-container">
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavButton
            positionTooltip={POSITONS_TOOLTIP.TOP}
            messageTooltip="Let's match on LinkedIn"
            externalUrl={linkedinPath}
            icon={faLinkedinIn}
          />
          <Navbar.Text>
            Project created by Rex Vargas
          </Navbar.Text>
          <NavButton
            positionTooltip={POSITONS_TOOLTIP.TOP}
            messageTooltip="Know more projects"
            externalUrl={githubPath}
            icon={faGithub}
          />
        </Container>
      </Navbar>
    </div>
  )
};

export default Footer;