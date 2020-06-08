import { connect } from 'react-redux';
import Recipe from 'src/components/Home/Modals/Recipe';

import {
  closeRecipe,
  displayGroceryLists,
  displayRecipeSteps,
  displayRecipeIngredients,
  addToFavorite,
  removeFromFavorite,
} from 'src/actions/recipes';

// == Data / state
const mapStateToProps = (state) => ({
  id: state.modals.recipeId,
  image: state.modals.image,
  title: state.modals.title,
  readyInMinutes: state.modals.readyInMinutes,
  servings: state.modals.servings,
  extendedIngredients: state.modals.extendedIngredients,
  analyzedInstructions: state.modals.analyzedInstructions,
  sourceName: state.modals.sourceName,
  sourceUrl: state.modals.sourceUrl,
  isConnected: state.auth.isConnected,
});

// == Actions / dispatch
const mapDispatchToProps = (dispatch) => ({
  closeRecipeModal: () => {
    dispatch(closeRecipe());
  },
  displayGroceryLists: () => {
    dispatch(displayGroceryLists());
  },
  displayRecipeSteps: (analyzedInstructions) => {
    dispatch(displayRecipeSteps(analyzedInstructions));
  },
  displayRecipeIngredients: (extendedIngredients) => {
    dispatch(displayRecipeIngredients(extendedIngredients));
  },
  addToFavorite: () => {
    dispatch(addToFavorite());
  },
  removeFromFavorite: () => {
    dispatch(removeFromFavorite());
  },
});

// connect(redux)(react)
const RecipeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Recipe);

export default RecipeContainer;
