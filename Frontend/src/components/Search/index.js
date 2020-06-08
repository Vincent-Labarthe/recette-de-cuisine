// == Import npm
import React from 'react';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Filters from 'src/containers/Filters';
import classNames from 'classnames'; // Will be useful for defining classNames based on the state

// == Import
import SearchStyled from './SearchStyled';

// == Composant
const Search = ({
  searchValue,
  changeFieldValue,
  search,
  changeFiltersStatus,
  filtersIsOpen,
  loadingStatus,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    search();
  };
  const handleChange = (evt) => {
    evt.preventDefault();
    changeFieldValue('searchBar', evt.target.value);
  };
  const openFilters = () => {
    changeFiltersStatus(filtersIsOpen);
  };
  return (
    <SearchStyled className={classNames({
      'filters--open': filtersIsOpen,
    })}
    >
      <form className="search-bar-form" onSubmit={handleSubmit}>
        <div className="search-zone">
          <div className="search-bar">
            {loadingStatus ? (
              <Icon
                name="spinner"
                size="large"
                className="search-bar-icon"
                color="grey"
                onClick={handleSubmit}
                loading
              />
            ) : (
              <Icon
                name="search"
                size="large"
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
              size="large"
              className="search-bar-icon"
              color="grey"
              onClick={openFilters}
            />
          </div>
          <div className="filters">
            <Filters />
          </div>
        </div>
      </form>
    </SearchStyled>
  );
};
Search.propTypes = {
  searchValue: PropTypes.string.isRequired,
  changeFieldValue: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  changeFiltersStatus: PropTypes.func.isRequired,
  filtersIsOpen: PropTypes.bool.isRequired,
  loadingStatus: PropTypes.bool.isRequired,
};
// == Export
export default Search;
