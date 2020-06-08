import axios from 'axios';
import {
  GENERATE_GROCERY_LIST,
  ADD_TO_FAVORITE_RECIPES,
  REMOVE_FROM_FAVORITE_RECIPES,
  setAddToListStatus,
  setAddToFavoriteStatus,
  updateFavoriteRecipes,
  loadFavoriteRecipes,
} from 'src/actions/recipes';
const generateMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GENERATE_GROCERY_LIST: {
      const state = store.getState();
      console.log(state.modals.generateListData);
      const myToken = state.modals.generateListData.token;
      const myShoppingListTitle = state.modals.generateListData.shoppingListTitle;
      const myIngredientsList = state.modals.generateListData.ingredientsList;
      console.log(myIngredientsList);
      axios.post('http://localhost:8000/api/user/shopping-list-add', {
        token: myToken,
        shoppingListTitle: myShoppingListTitle,
        ingredientsList: myIngredientsList,
      })
        .then((response) => {
          const results = response.data;
          console.log('Tremendous success !');
          console.log(results);
          store.dispatch(setAddToListStatus(true));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case ADD_TO_FAVORITE_RECIPES: {
      const state = store.getState();
      console.log('Je suis dans le middleware add to fav !');
      // store.dispatch(setAddToFavoriteStatus(true));
      axios.post('http://localhost:8000/api/user/recipe-add', {
        apiId: state.modals.recipeId,
        recipeTitle: state.modals.title,
        token: sessionStorage.getItem('userToken'),
      })
        .then((response) => {
          const results = response.data;
          // enables to update the sessionStorage of favorite
          // recipes without loading the /favorite-recipes page
          store.dispatch(updateFavoriteRecipes());
          // sessionStorage.setItem('favoriteRecipes', JSON.stringify(results));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case REMOVE_FROM_FAVORITE_RECIPES: {
      const state = store.getState();
      console.log('REMOVE_FROM_FAVORITE_RECIPES')
      axios.post('http://localhost:8000/api/user/recipe-remove', {
        apiId: state.modals.recipeId,
        token: sessionStorage.getItem('userToken'),
      })
        .then((response) => {
          const results = response.data;
          console.log('Axios success');
          store.dispatch(updateFavoriteRecipes());
          store.dispatch(loadFavoriteRecipes());
        })
        .catch((error) => {
          console.log('Axios fail');
          console.log(state.modals.recipeId);
          console.log(error);
        });
      next(action);
      break;
    }
    default:
      next(action);
      break;
  }
};
export default generateMiddleware;