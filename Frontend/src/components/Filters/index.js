// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import filtersData from 'src/assets/data/dataFilters';

// == Import
import FiltersStyled from './FiltersStyled';

// == Composant
const Filters = ({ updateSelectedFilters, selectedFilters }) => {
  const handleChange = (event) => {
    const filterValue = event.target.value;
    const filterTag = event.target.name;

    const isInselectedFilters = () => {
      const foundFilter = selectedFilters[filterTag].find((value) => value === filterValue);
      return foundFilter;
    };

    // This algorithm manages the adding/removal of the list id in the array selectedFilters
    if (selectedFilters.length === 0) {
      selectedFilters[filterTag].push(filterValue);
    }
    else {
      const checkInArray = isInselectedFilters();
      if (checkInArray === undefined) {
        selectedFilters[filterTag].push(filterValue);
      }
      else {
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < selectedFilters.length; i++) {
          if (selectedFilters[i] === filterValue) {
            selectedFilters[filterTag].splice(i, 1);
          }
        }
      }
    }
    updateSelectedFilters(selectedFilters);
  };
  // This enables to split the filters among different ul.
  // We have 3 rows in mobile version, 2 in desktop.
  const mobileRow1 = filtersData.filter(foodFilter => foodFilter.id < 4);
  const mobileRow2 = filtersData.filter(foodFilter => foodFilter.id > 3 && foodFilter.id < 7);
  const mobileRow3 = filtersData.filter(foodFilter => foodFilter.id > 6 && foodFilter.id < 10);
  const desktopRow1 = filtersData.filter(foodFilter => foodFilter.id < 6);
  const desktopRow2 = filtersData.filter(foodFilter => foodFilter.id > 5);

  return (
    <FiltersStyled>
      <div className="filters-mobile">
        <ul>
          {mobileRow1.map((foodFilter) => (
            <li className="filter" key={foodFilter.id}>
              <input
                type="checkbox"
                label={foodFilter.label}
                name={foodFilter.tag}
                value={foodFilter.value}
                onChange={handleChange}
              />
              {foodFilter.label}
            </li>
          ))}
        </ul>
        <ul>
          {mobileRow2.map((foodFilter) => (
            <li className="filter" key={foodFilter.id}>
              <input
                type="checkbox"
                label={foodFilter.label}
                name={foodFilter.tag}
                value={foodFilter.value}
                onChange={handleChange}
              />
              {foodFilter.label}
            </li>
          ))}
        </ul>
        <ul>
          {mobileRow3.map((foodFilter) => (
            <li className="filter" key={foodFilter.id}>
              <input
                type="checkbox"
                label={foodFilter.label}
                name={foodFilter.tag}
                value={foodFilter.value}
                onChange={handleChange}
              />
              {foodFilter.label}
            </li>
          ))}
        </ul>
      </div>
      <div className="filters-desktop">
        <ul>
          {desktopRow1.map((foodFilter) => (
            <li className="filter" key={foodFilter.id}>
              <input
                type="checkbox"
                label={foodFilter.label}
                name={foodFilter.tag}
                value={foodFilter.value}
                onChange={handleChange}
              />
              <span>{foodFilter.label}</span>
            </li>
          ))}
        </ul>
        <ul>
          {desktopRow2.map((foodFilter) => (
            <li className="filter" key={foodFilter.id}>
              <input
                type="checkbox"
                label={foodFilter.label}
                name={foodFilter.tag}
                value={foodFilter.value}
                onChange={handleChange}
              />
              <span>{foodFilter.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </FiltersStyled>
  );
};

Filters.propTypes = {
  updateSelectedFilters: PropTypes.func.isRequired,
  // selectedFilters: PropTypes.array.isRequired,
  selectedFilters: PropTypes.shape({
    diets: PropTypes.array.isRequired,
    intolerance: PropTypes.array.isRequired,
  }).isRequired,
};
// == Export
export default Filters;
