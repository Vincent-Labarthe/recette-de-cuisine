import {
  SAVE_LOADED_RECIPES,
  SET_ADD_TO_LIST_STATUS,
  SET_ADD_TO_FAVORITE_STATUS,
  LOAD_RECIPES,
  LOAD_FAVORITE_RECIPES,
  SAVE_FAVORITE_RECIPES,
  SEARCH,
  SET_LOADING_STATUS,
  UPDATE_FAVORITE_RECIPES,
} from 'src/actions/recipes';

import testData from 'src/assets/data/dataHomeTest';

const initialState = {
  recipesData: [],
  addToListStatus: false,
  addToFavoriteStatus: false,
  loadingStatus: false,
  favoriteRecipesData: [],
};

// Reducer
const homeReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_LOADED_RECIPES:
      return {
        ...state,
        recipesData: action.loadedData,
        loadingStatus: false,
      };

    case SET_ADD_TO_LIST_STATUS:
      return {
        ...state,
        addToListStatus: action.addBool,
      };

    case SET_ADD_TO_FAVORITE_STATUS:
      return {
        ...state,
        addToFavoriteStatus: action.addBool,
        loadingStatus: false,
      };

    case LOAD_RECIPES:
      return {
        ...state,
        loadingStatus: true,
      };

    case LOAD_FAVORITE_RECIPES:
      return {
        ...state,
        loadingStatus: true,
      };

    case SAVE_FAVORITE_RECIPES:
      return {
        ...state,
        favoriteRecipesData: action.loadedData,
        loadingStatus: false,
      };

    case SEARCH:
      return {
        ...state,
        loadingStatus: true,
      };

    case SET_LOADING_STATUS:
      return {
        ...state,
        loadingStatus: false,
      };

    case UPDATE_FAVORITE_RECIPES:
      return {
        ...state,
        loadingStatus: true,
      };

    default:
      return state;
  }
};

export default homeReducer;
