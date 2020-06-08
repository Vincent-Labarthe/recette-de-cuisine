// == Import npm
import React from 'react';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames'; // Will be useful for defining classNames based on the state
import Filters from 'src/containers/Filters';

// == Import
import MobileNavbarStyled from './MobileNavbarStyled';

// == Composant
const MobileNavbar = ({
  searchValue,
  changeFieldValue,
  search,
  searchIsOpen,
  openSearchMode,
  closeSearchMode,
  filtersIsOpen,
  changeFiltersStatus,
  selectedFilters,
  isConnected,
  loadingStatus,
}) => {
  const openNavbar = () => {
    openSearchMode();
  };
  const openFilters = () => {
    changeFiltersStatus(filtersIsOpen);
  };
  const handleCancel = () => {
    closeSearchMode();
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    search();
    console.log(selectedFilters);
  };
  const handleChange = (evt) => {
    evt.preventDefault();
    changeFieldValue('searchBar', evt.target.value);
  };

  return (
    <MobileNavbarStyled className={classNames({
      'search--open': searchIsOpen,
      'filters--open': filtersIsOpen,
      'user--connected': isConnected,
    })}
    >
      {/* This is the mobile navbar on initial state */}
      <div className="icons-mode">
        <Link to="/">
          <Icon name="home" size="big" color="orange" />
        </Link>
        <div className="grocery-lists-icon">
          <Link to="/grocery-lists">
            <Icon name="list alternate outline" size="big" color="orange" />
          </Link>
        </div>
        {loadingStatus ? (
          <Icon name="spinner" size="big" color="orange" onClick={openNavbar} loading />
        ) : (
          <Icon name="search" size="big" color="orange" onClick={openNavbar} />
        )}
      </div>
      {/* This is the mobile navbar after clic on search icon */}
      <div className="search-mode">
        <form className="search-bar-form" onSubmit={handleSubmit}>
          <div className="search-zone">
            <div className="filters">
              <Filters />
            </div>
            {/* There are some differences between this search
                bar and the one in the desktop version.
                To make it easier to manage, we didn't reuse
                the Search component. */}
            <div className="search-mode-bottom">
              <div className="search-bar">
                {loadingStatus ? (
                  <Icon
                    name="spinner"
                    size="big"
                    className="search-bar-icon"
                    color="grey"
                    onClick={handleSubmit}
                    loading
                  />
                ) : (
                  <Icon
                    name="search"
                    size="big"
                    className="search-bar-icon"
                    color="grey"
                    onClick={handleSubmit}
                  />
                )}
                <input
                  className="search-bar-input"
                  placeholder="Explore recipes"
                  type="text"
                  name="searchBar"
                  onChange={handleChange}
                  value={searchValue}
                />
                <Icon
                  name="sliders"
                  size="big"
                  className="search-bar-icon"
                  color="orange"
                  onClick={openFilters}
                />
              </div>
              <div className="cancel-button">
                <span className="cancel" onClick={handleCancel}>Cancel</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </MobileNavbarStyled>
  );
};

MobileNavbar.propTypes = {
  searchValue: PropTypes.string.isRequired,
  changeFieldValue: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  searchIsOpen: PropTypes.bool.isRequired,
  filtersIsOpen: PropTypes.bool.isRequired,
  openSearchMode: PropTypes.func.isRequired,
  closeSearchMode: PropTypes.func.isRequired,
  changeFiltersStatus: PropTypes.func.isRequired,
  selectedFilters: PropTypes.shape({
    diets: PropTypes.array.isRequired,
    intolerance: PropTypes.array.isRequired,
  }).isRequired,
  isConnected: PropTypes.bool,
  loadingStatus: PropTypes.bool.isRequired,
};
MobileNavbar.defaultProps = {
  isConnected: true,
};
// == Export
export default MobileNavbar;
