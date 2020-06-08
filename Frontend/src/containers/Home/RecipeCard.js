import { connect } from 'react-redux';
import RecipeCard from 'src/components/Home/RecipeCard';
import { openRecipe } from 'src/actions/recipes';

// == Data / state
const mapStateToProps = () => ({
});

// == Actions / dispatch
const mapDispatchToProps = (dispatch) => ({
  openRecipe: (id, image, title, readyInMinutes, servings,
    extendedIngredients, analyzedInstructions, sourceName, sourceUrl) => {
    dispatch(openRecipe(id, image, title, readyInMinutes, servings,
      extendedIngredients, analyzedInstructions, sourceName, sourceUrl)); // the reducer is modals.js
  },
});

// connect(redux)(react)
const RecipeCardContainer = connect(mapStateToProps, mapDispatchToProps)(RecipeCard);

export default RecipeCardContainer;
