/* eslint-disable no-console */
import {
  CHANGE_FIELD,
  OPEN_SEARCH_MODE,
  CLOSE_SEARCH_MODE,
  CHANGE_FILTERS_STATUS,
  UPDATE_SELECTED_FILTERS,
  SET_ERROR_STATUS,
} from 'src/actions/recipes';

const initialState = {
  searchBar: '',
  searchIsOpen: false,
  filtersIsOpen: false,
  checked: false,
  selectedFilters: { diets: [], intolerance: [] },
  errorStatus: false,
};

// Reducer
const searchReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };

    case OPEN_SEARCH_MODE:
      return {
        ...state,
        searchIsOpen: true,
      };

    case CLOSE_SEARCH_MODE:
      return {
        ...state,
        searchIsOpen: false,
        filtersIsOpen: false,
      };

    case CHANGE_FILTERS_STATUS:
      return {
        ...state,
        filtersIsOpen: action.filtersIsOpen,
      };

    case UPDATE_SELECTED_FILTERS:
      return {
        ...state,
        selectedFilters: action.selectedFilters,
      };

    case SET_ERROR_STATUS:
      return {
        ...state,
        errorStatus: action.errorBool,
      };
    default:
      return state;
  }
};

export default searchReducer;
