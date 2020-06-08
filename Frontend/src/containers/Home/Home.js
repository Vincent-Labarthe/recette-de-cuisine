import { connect } from 'react-redux';
import Home from 'src/components/Home';
import { loadRecipes } from 'src/actions/recipes';

// == Data / state
const mapStateToProps = (state) => ({
  recipesData: state.home.recipesData,
  errorStatus: state.search.errorStatus,
  addToListStatus: state.home.addToListStatus,
  addToFavoriteStatus: state.home.addToFavoriteStatus,
  isConnected: state.auth.isConnected,
});

// == Actions / dispatch
const mapDispatchToProps = (dispatch) => ({
  loadRecipes: () => {
    dispatch(loadRecipes());
  },
});

// connect(redux)(react)
const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
