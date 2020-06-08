import React from 'react';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
// == Import
import FooterStyled from './FooterStyled';

// == Composant
const Footer = () => (
  <FooterStyled>
    <div className="footer-icons">
      <Link to="/about-us">
        <Icon name="users" size="big" color="orange" />
      </Link>
      <Link to="/contact">
        <Icon name="mail" size="big" color="orange" />
      </Link>
      <Link to="/legal-mentions">
        <Icon name="legal" size="big" color="orange" />
      </Link>
      <a>
        <Icon name="connectdevelop" size="big" color="orange" />
      </a>

    </div>
    <div className="footer-links">
      <Link to="/about-us" className="footer-link">About us</Link>
      <Link to="/contact" className="footer-link">Contact</Link>
      <Link to="/legal-mentions" className="footer-link">Legal mentions</Link>
      <a className="footer-link">API</a>
    </div>
  </FooterStyled>
);

// == Export
export default Footer;
