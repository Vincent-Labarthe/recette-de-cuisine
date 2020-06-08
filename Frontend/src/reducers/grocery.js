// Action Types
import { ADD, CHANGE_GROCERY_FIELD } from 'src/actions/grocery';
import dataGrocery from 'src/assets/data/dataGroceryLists';

// Initial State
const initialState = {
  newName: '',
  lists: dataGrocery,
};

// Reducer
const groceryReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_GROCERY_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };

    case ADD: {

      return {
        ...state,
        title: action.title,
      };
    }

    default:
      return state;
  }
};

export default groceryReducer;
