import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
// == Import
import Search from 'src/containers/Search';
import HeaderStyled from './HeaderStyled';
import HeaderButton from './HeaderButton';
import HeaderButtonConnected from './HeaderButtonConnected';

// == Composant
const Header = ({ 
  isConnected,
  connectedFirstname,
  connectedLastname,
  logout,
  closeAllModals,
}) => {
  // console.log(isConnected, connectedFirstname, connectedLastname);
  return (
    <HeaderStyled>
      <div className="logo-title">
        <Icon name="shopping basket" size="big" className="logo " color="grey" />
        <h1 className="grocereaz">Grocer'eaz</h1>
      </div>
      <div className="display-search">
        <Search />
      </div>
      <div className="header-buttons">
        <Link to="/">
          <button className="home-button" type="button" onClick={closeAllModals}>Home</button>
        </Link>
        <div className="header-button">
          {!isConnected && <HeaderButton />}
          {isConnected && 
            <HeaderButtonConnected
              firstname={connectedFirstname}
              lastname={connectedLastname}
              logout={logout} 
            />}
        </div>
      </div>
    </HeaderStyled>
  );
};

Header.propTypes = {
  isConnected: PropTypes.bool,
  closeAllModals: PropTypes.func.isRequired,
};
Header.defaultProps = {
  isConnected: true,
}
// == Export
export default Header;
