import axios from 'axios';

import { ADD_GROCERY_LIST } from 'src/actions/grocery';

const groceryMiddleware = (store) => (next) => (action) => {
  switch(action.type) {
    case ADD_GROCERY_LIST: {
      console.log('Lancement de l\'action ADD_GROCERY_LIST...');
      const state = store.getState();
        axios.post('http://localhost:8000/api/user/shopping-list-add', {
          token: sessionStorage.getItem('userToken'),
          shoppingListTitle: state.grocery.newName,
        })
        
      .then((response) => {
        console.log('groceryMiddleware addGroceryList ok:', response.data);
      })
      .catch((error) => {
        console.error('Une erreur s\'est produite', error);
      });
      break;
    }
    default:
      break;
  }

  next(action);
};

export default groceryMiddleware;
