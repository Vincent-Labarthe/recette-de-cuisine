import { connect } from 'react-redux';
import Ingredients from 'src/components/Home/Modals/Ingredients';
import { closeRecipeIngredients, closeAllModals, displayGroceryLists } from 'src/actions/recipes';

// == Data / state
const mapStateToProps = (state) => ({
  ingredientsIsOpen: state.modals.ingredientsIsOpen,
  extendedIngredients: state.modals.extendedIngredients,
});

// == Actions / dispatch
const mapDispatchToProps = (dispatch) => ({
  displayGroceryLists: () => {
    dispatch(displayGroceryLists());
  },
  closeIngredientsModal: () => {
    dispatch(closeRecipeIngredients());
  },
  closeAllModals: () => {
    dispatch(closeAllModals());
  },
});

// connect(redux)(react)
const IngredientsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Ingredients);

export default IngredientsContainer;
