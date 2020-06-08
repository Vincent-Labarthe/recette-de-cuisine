import { connect } from 'react-redux';
import FavoriteRecipes from 'src/components/FavoriteRecipes';
import { loadFavoriteRecipes } from 'src/actions/recipes';

// == Data / state
const mapStateToProps = (state) => ({
  errorStatus: state.search.errorStatus,
});

// == Actions / dispatch
const mapDispatchToProps = (dispatch) => ({
  loadFavoriteRecipes: () => {
    dispatch(loadFavoriteRecipes());
  },
});

// connect(redux)(react)
const FavoriteRecipesContainer = connect(mapStateToProps, mapDispatchToProps)(FavoriteRecipes);

export default FavoriteRecipesContainer;
