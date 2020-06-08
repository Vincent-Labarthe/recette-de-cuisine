export const CHANGE_FIELD = 'CHANGE_FIELD';
export const LOAD_RECIPES = 'LOAD_RECIPES';
export const LOAD_FAVORITE_RECIPES = 'LOAD_FAVORITE_RECIPES';
export const OPEN_RECIPE = 'OPEN_RECIPE';
export const CLOSE_RECIPE = 'CLOSE_RECIPE';
export const SEARCH = 'SEARCH';
export const SAVE_LOADED_RECIPES = 'SAVE_LOADED_RECIPES';
export const SAVE_FAVORITE_RECIPES = 'SAVE_FAVORITE_RECIPES';
export const DISPLAY_GROCERY_LISTS = 'DISPLAY_GROCERY_LISTS';
export const CLOSE_GROCERY_LISTS = 'CLOSE_GROCERY_LISTS';
export const DISPLAY_RECIPE_STEPS = 'DISPLAY_RECIPE_STEPS';
export const CLOSE_RECIPE_STEPS = 'CLOSE_RECIPE_STEPS';
export const DISPLAY_RECIPE_INGREDIENTS = 'DISPLAY_RECIPE_INGREDIENTS';
export const CLOSE_RECIPE_INGREDIENTS = 'CLOSE_RECIPE_INGREDIENTS';
export const CLOSE_ALL_MODALS = 'CLOSE_ALL_MODALS';
export const OPEN_SEARCH_MODE = 'OPEN_SEARCH_MODE';
export const CLOSE_SEARCH_MODE = 'CLOSE_SEARCH_MODE';
export const CHANGE_FILTERS_STATUS = 'CHANGE_FILTERS_STATUS';
export const SET_STATE = 'SET_STATE';
export const UPDATE_SELECTED_FILTERS = 'UPDATE_SELECTED_FILTERS';
export const SAVE_LIST_DATA = 'SAVE_LIST_DATA';
export const GENERATE_GROCERY_LIST = 'GENERATE_GROCERY_LIST';
export const SET_ERROR_STATUS = 'SET_ERROR_STATUS';
export const ADD_TO_FAVORITE_RECIPES = 'ADD_TO_FAVORITE_RECIPES';
export const REMOVE_FROM_FAVORITE_RECIPES = 'REMOVE_FROM_FAVORITE_RECIPES';
export const SET_ADD_TO_LIST_STATUS = 'SET_ADD_TO_LIST_STATUS';
export const SET_ADD_TO_FAVORITE_STATUS = 'SET_ADD_TO_FAVORITE_STATUS';
export const SET_LOADING_STATUS = 'SET_LOADING_STATUS';
export const UPDATE_FAVORITE_RECIPES = 'UPDATE_FAVORITE_RECIPES';

export const changeField = (name, value) => ({
  type: CHANGE_FIELD,
  name,
  value,
});

export const loadRecipes = () => ({
  type: LOAD_RECIPES,
});

// enables to update the sessionStorage of favorite
// recipes without loading the /favorite-recipes page
export const updateFavoriteRecipes = () => ({
  type: UPDATE_FAVORITE_RECIPES,
});

export const loadFavoriteRecipes = () => ({
  type: LOAD_FAVORITE_RECIPES,
});

export const openRecipe = (id, image, title, readyInMinutes, servings,
  extendedIngredients, analyzedInstructions, sourceName, sourceUrl) => ({
  type: OPEN_RECIPE,
  id,
  image,
  title,
  readyInMinutes,
  servings,
  extendedIngredients,
  analyzedInstructions,
  sourceName,
  sourceUrl,
});

export const closeRecipe = () => ({
  type: CLOSE_RECIPE,
});

export const search = () => ({
  type: SEARCH,
});

export const saveLoadedRecipes = (loadedData) => ({
  type: SAVE_LOADED_RECIPES,
  loadedData,
});

export const saveFavoriteRecipes = (loadedData) => ({
  type: SAVE_FAVORITE_RECIPES,
  loadedData,
});

export const displayGroceryLists = () => ({
  type: DISPLAY_GROCERY_LISTS,
});

export const closeGroceryLists = () => ({
  type: CLOSE_GROCERY_LISTS,
});

export const displayRecipeSteps = (analyzedInstructions) => ({
  type: DISPLAY_RECIPE_STEPS,
  analyzedInstructions,
});

export const closeRecipeSteps = () => ({
  type: CLOSE_RECIPE_STEPS,
});

export const displayRecipeIngredients = (extendedIngredients) => ({
  type: DISPLAY_RECIPE_INGREDIENTS,
  extendedIngredients,
});

export const closeRecipeIngredients = () => ({
  type: CLOSE_RECIPE_INGREDIENTS,
});

export const closeAllModals = () => ({
  type: CLOSE_ALL_MODALS,
});

export const openSearchMode = () => ({
  type: OPEN_SEARCH_MODE,
});

export const closeSearchMode = () => ({
  type: CLOSE_SEARCH_MODE,
});

export const changeFiltersStatus = (filtersIsOpen) => ({
  type: CHANGE_FILTERS_STATUS,
  filtersIsOpen: !filtersIsOpen,
});

export const updateSelectedFilters = (selectedFilters) => ({
  type: UPDATE_SELECTED_FILTERS,
  selectedFilters,
});

export const saveListData = (generateListData) => ({
  type: SAVE_LIST_DATA,
  generateListData,
});

export const generateGroceryList = () => ({
  type: GENERATE_GROCERY_LIST,
});

export const setErrorStatus = (errorBool) => ({
  type: SET_ERROR_STATUS,
  errorBool,
});

export const addToFavorite = () => ({
  type: ADD_TO_FAVORITE_RECIPES,
});

export const removeFromFavorite = () => ({
  type: REMOVE_FROM_FAVORITE_RECIPES,
});

export const setAddToListStatus = (addBool) => ({
  type: SET_ADD_TO_LIST_STATUS,
  addBool,
});

export const setAddToFavoriteStatus = (addBool) => ({
  type: SET_ADD_TO_FAVORITE_STATUS,
  addBool,
});

export const setLoadingStatus = (statusBool) => ({
  type: SET_LOADING_STATUS,
  statusBool,
});
