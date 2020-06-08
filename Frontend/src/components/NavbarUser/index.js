// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import NavbarUserStyled from './NavbarUserStyled';

// == Composant
const NavbarUser = ({ isConnected, closeAllModals }) => (
  <NavbarUserStyled className={classNames({
    'user--connected': isConnected,
  })}
  >
    <div className="temp-grocery-list-link">
      <Link
        to="/temporary-grocery-list"
        className="grocery-lists-link"
      >
        My grocery list
      </Link>
    </div>
    <div className="nav-user-links">
      <Link
        to="/grocery-lists"
        className="grocery-lists-link"
      >
        Grocery lists
      </Link>
      <Link
        to="/favorite-recipes"
        onClick={closeAllModals}
      >
        Favorite recipes
      </Link>
      <Link
        to="/user-data"
      >
        Personal data
      </Link>
    </div>
  </NavbarUserStyled>
);

NavbarUser.propTypes = {
  isConnected: PropTypes.bool,
  closeAllModals: PropTypes.func.isRequired,
};
NavbarUser.defaultProps = {
  isConnected: true,
};
// == Export
export default NavbarUser;
