import {
  OPEN_RECIPE,
  CLOSE_RECIPE,
  DISPLAY_GROCERY_LISTS,
  CLOSE_GROCERY_LISTS,
  DISPLAY_RECIPE_STEPS,
  CLOSE_RECIPE_STEPS,
  DISPLAY_RECIPE_INGREDIENTS,
  CLOSE_RECIPE_INGREDIENTS,
  CLOSE_ALL_MODALS,
  SAVE_LIST_DATA,
} from 'src/actions/recipes';

import instructionsData from 'src/assets/data/dataInstructions';

const initialState = {
  recipeIsOpen: false,
  stepsIsOpen: false,
  ingredientsIsOpen: false,
  groceryListsIsOpen: false,
  recipeId: 0,
  image: '',
  title: '',
  readyInMinutes: 0,
  servings: 0,
  analyzedInstructions: instructionsData,
  extendedIngredients: [],
  selectedLists: [],
  sourceName: '',
  sourceUrl: '',
  generateListData: [],
};

// Reducer
const modalsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_RECIPE:
      return {
        ...state,
        recipeIsOpen: true,
        recipeId: action.id,
        image: action.image,
        title: action.title,
        readyInMinutes: action.readyInMinutes,
        servings: action.servings,
        extendedIngredients: action.extendedIngredients,
        analyzedInstructions: action.analyzedInstructions,
        sourceName: action.sourceName,
        sourceUrl: action.sourceUrl,
      };

    case CLOSE_RECIPE:
      return {
        ...state,
        recipeIsOpen: false,
      };

    case DISPLAY_GROCERY_LISTS:
      return {
        ...state,
        groceryListsIsOpen: true,
      };

    case CLOSE_GROCERY_LISTS:
      return {
        ...state,
        groceryListsIsOpen: false,
      };

    case DISPLAY_RECIPE_STEPS:
      return {
        ...state,
        stepsIsOpen: true,
        instructions: action.instructions,
      };

    case CLOSE_RECIPE_STEPS:
      return {
        ...state,
        stepsIsOpen: false,
      };

    case DISPLAY_RECIPE_INGREDIENTS:
      return {
        ...state,
        ingredientsIsOpen: true,
        extendedIngredients: action.extendedIngredients,
      };

    case CLOSE_RECIPE_INGREDIENTS:
      return {
        ...state,
        ingredientsIsOpen: false,
      };

    case CLOSE_ALL_MODALS:
      return {
        ...state,
        recipeIsOpen: false,
        stepsIsOpen: false,
        ingredientsIsOpen: false,
        groceryListsIsOpen: false,
      };

    case SAVE_LIST_DATA:
      return {
        ...state,
        generateListData: action.generateListData,
      };

    default:
      return state;
  }
};

export default modalsReducer;
